namespace NOVA.Mock.Services;

public sealed class MockDataService
{
    private readonly object _sync = new();
    private readonly List<string> _apps = ["NOVA", "GOM"];
    private readonly List<string> _plans = ["Standard", "Professional", "Enterprise"];
    private readonly List<string> _tenantStatuses = ["準備中", "利用中", "停止中"];
    private readonly List<string> _departments = ["営業本部", "情報システム部", "経理部", "管理部"];
    private readonly List<string> _roles = ["一般利用者", "承認者", "管理者"];
    private readonly List<string> _operationTypes = ["ログイン", "ログアウト", "テナント更新", "ユーザ登録", "パスワードリセット", "通知配信"];
    private readonly List<string> _errorSeverities = ["Critical", "Warning", "Info"];
    private readonly List<string> _errorStatuses = ["発生中", "未対応", "解消済み"];

    private TenantDto _tenant;
    private readonly List<UserDto> _users;
    private readonly List<NotificationDto> _notifications;
    private readonly List<OperationLogDto> _operationLogs;
    private readonly List<LoginLogDto> _loginLogs;
    private readonly List<ErrorLogDto> _errors;

    public MockDataService()
    {
        _tenant = new TenantDto(
            "TEN-001",
            "サンプル商事株式会社",
            "利用中",
            "2026-04-01",
            "2026-04-15",
            "Enterprise",
            new AppUsageDto("NOVA", true, "本番利用中"),
            new AppUsageDto("GOM", true, "一部部門で利用中"),
            "田中 花子",
            "tenant-admin@example.com",
            128,
            "2026-06-07 18:20",
            "佐藤 次郎");

        _users =
        [
            new UserDto("USR-001", "山田 太郎", "yamada@example.com", "営業本部", "課長", ["NOVA"], "承認者", true),
            new UserDto("USR-002", "鈴木 一郎", "suzuki@example.com", "情報システム部", "主任", ["NOVA", "GOM"], "管理者", true),
            new UserDto("USR-003", "高橋 美咲", "takahashi@example.com", "経理部", "担当", ["GOM"], "一般利用者", false)
        ];

        _notifications =
        [
            new NotificationDto("NTF-001", "新機能リリース: 承認フロー改善", "リリース", "NOVA", "2026-06-07 09:00", false, "NOVA に新しい承認ステップ設定機能を追加しました。"),
            new NotificationDto("NTF-002", "計画メンテナンスのお知らせ", "メンテナンス", "共通", "2026-06-06 15:30", true, "2026-06-10 22:00 からメンテナンスを実施します。")
        ];

        _operationLogs =
        [
            new OperationLogDto("2026-06-07 18:01", "鈴木 一郎", "NOVA", "エンドユーザ管理", "ユーザ登録", "成功", "USR-004"),
            new OperationLogDto("2026-06-07 17:25", "佐藤 次郎", "共通", "テナント管理", "テナント更新", "成功", "TEN-001"),
            new OperationLogDto("2026-06-07 16:48", "鈴木 一郎", "GOM", "認証", "パスワードリセット", "成功", "USR-003")
        ];

        _loginLogs =
        [
            new LoginLogDto("2026-06-07 18:10", "鈴木 一郎", "NOVA", "成功", "10.10.1.15", "-"),
            new LoginLogDto("2026-06-07 17:55", "山田 太郎", "GOM", "成功", "10.10.1.20", "-"),
            new LoginLogDto("2026-06-07 17:42", "unknown@example.com", "NOVA", "失敗", "10.10.9.99", "ユーザが存在しません")
        ];

        _errors =
        [
            new ErrorLogDto("ERR-1001", "2026-06-07 17:40", "NOVA", "バッチ連携処理でタイムアウトが発生", "Critical", "発生中", "2026-06-07 16:55", "2026-06-07 17:40", "運用確認中"),
            new ErrorLogDto("ERR-2003", "2026-06-07 15:20", "GOM", "一部通知送信の遅延", "Warning", "未対応", "2026-06-07 14:50", "2026-06-07 15:20", "未着手"),
            new ErrorLogDto("ERR-3008", "2026-06-07 11:05", "共通", "ログ集計ジョブの再試行完了", "Info", "解消済み", "2026-06-07 10:48", "2026-06-07 11:05", "対応完了")
        ];
    }

    public BootstrapResponse GetBootstrap()
    {
        lock (_sync)
        {
            return new BootstrapResponse(
                _tenant,
                _users.ToList(),
                _notifications.ToList(),
                _operationLogs.ToList(),
                _loginLogs.ToList(),
                _errors.ToList(),
                new MasterDataDto(
                    _apps.ToList(),
                    _plans.ToList(),
                    _tenantStatuses.ToList(),
                    _departments.ToList(),
                    _roles.ToList(),
                    _operationTypes.ToList(),
                    _errorSeverities.ToList(),
                    _errorStatuses.ToList()));
        }
    }

    public TenantDto UpdateTenant(TenantUpdateRequest request)
    {
        lock (_sync)
        {
            _tenant = _tenant with
            {
                Status = request.Status,
                ContractDate = request.ContractDate,
                StartDate = request.StartDate,
                Plan = request.Plan,
                NovaUsage = _tenant.NovaUsage with { StatusText = request.NovaUsage },
                GomUsage = _tenant.GomUsage with { StatusText = request.GomUsage },
                AdminName = request.AdminName,
                AdminEmail = request.AdminEmail,
                UpdatedAt = DateTime.Now.ToString("yyyy-MM-dd HH:mm"),
                UpdatedBy = "モック管理者"
            };

            _operationLogs.Insert(0, new OperationLogDto(
                DateTime.Now.ToString("yyyy-MM-dd HH:mm"),
                "モック管理者",
                "共通",
                "テナント管理",
                "テナント更新",
                "成功",
                _tenant.Id));

            return _tenant;
        }
    }

    public UserDto RegisterUser(UserRegistrationRequest request)
    {
        lock (_sync)
        {
            var newUser = new UserDto(
                $"USR-{_users.Count + 1:000}",
                request.Name,
                request.Email,
                request.Department,
                request.Title,
                request.Apps,
                request.Role,
                true);

            _users.Insert(0, newUser);
            _tenant = _tenant with { UserCount = _tenant.UserCount + 1 };

            _operationLogs.Insert(0, new OperationLogDto(
                DateTime.Now.ToString("yyyy-MM-dd HH:mm"),
                "モック管理者",
                request.Apps.FirstOrDefault() ?? "共通",
                "エンドユーザ管理",
                "ユーザ登録",
                "成功",
                newUser.Id));

            return newUser;
        }
    }

    public PasswordResetResultDto ResetPassword(PasswordResetRequest request)
    {
        lock (_sync)
        {
            var user = _users.FirstOrDefault(x => x.Id == request.UserId)
                ?? throw new InvalidOperationException("対象ユーザが見つかりません。");

            _operationLogs.Insert(0, new OperationLogDto(
                DateTime.Now.ToString("yyyy-MM-dd HH:mm"),
                "モック管理者",
                user.Apps.FirstOrDefault() ?? "共通",
                "認証",
                "パスワードリセット",
                "成功",
                user.Id));

            return new PasswordResetResultDto(
                user.Id,
                user.Name,
                user.Email,
                "再設定案内メールを送信しました。");
        }
    }
}

public sealed record BootstrapResponse(
    TenantDto Tenant,
    List<UserDto> Users,
    List<NotificationDto> Notifications,
    List<OperationLogDto> OperationLogs,
    List<LoginLogDto> LoginLogs,
    List<ErrorLogDto> Errors,
    MasterDataDto MasterData);

public sealed record MasterDataDto(
    List<string> Apps,
    List<string> Plans,
    List<string> TenantStatuses,
    List<string> Departments,
    List<string> Roles,
    List<string> OperationTypes,
    List<string> ErrorSeverities,
    List<string> ErrorStatuses);

public sealed record TenantDto(
    string Id,
    string Name,
    string Status,
    string ContractDate,
    string StartDate,
    string Plan,
    AppUsageDto NovaUsage,
    AppUsageDto GomUsage,
    string AdminName,
    string AdminEmail,
    int UserCount,
    string UpdatedAt,
    string UpdatedBy);

public sealed record AppUsageDto(string AppName, bool Enabled, string StatusText);

public sealed record UserDto(
    string Id,
    string Name,
    string Email,
    string Department,
    string Title,
    List<string> Apps,
    string Role,
    bool Active);

public sealed record NotificationDto(
    string Id,
    string Title,
    string Type,
    string App,
    string PublishedAt,
    bool IsRead,
    string Summary);

public sealed record OperationLogDto(
    string At,
    string UserName,
    string App,
    string Feature,
    string EventName,
    string Result,
    string TargetId);

public sealed record LoginLogDto(
    string At,
    string UserName,
    string App,
    string Result,
    string IpAddress,
    string FailureReason);

public sealed record ErrorLogDto(
    string Id,
    string At,
    string App,
    string Summary,
    string Severity,
    string Status,
    string FirstSeenAt,
    string LastSeenAt,
    string Assignment);

public sealed record TenantUpdateRequest(
    string Status,
    string ContractDate,
    string StartDate,
    string Plan,
    string NovaUsage,
    string GomUsage,
    string AdminName,
    string AdminEmail);

public sealed record UserRegistrationRequest(
    string Email,
    string Name,
    string Department,
    string Title,
    List<string> Apps,
    string Role,
    bool SendNotification);

public sealed record PasswordResetRequest(string UserId);

public sealed record PasswordResetResultDto(
    string UserId,
    string UserName,
    string Email,
    string Message);

public sealed record ApiResult<T>(string Message, T Data);

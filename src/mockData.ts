export type SeverityClass = "critical" | "warning" | "info" | "success";

export interface AppUsageDto {
  appName: string;
  enabled: boolean;
  statusText: string;
}

export interface TenantDto {
  id: string;
  name: string;
  imageUrl: string;
  status: string;
  contractDate: string;
  startDate: string;
  plan: string;
  userLimit: number;
  currentUserCount: number;
  optionContracts: string[];
  novaUsage: AppUsageDto;
  gomUsage: AppUsageDto;
  adminName: string;
  adminEmail: string;
  updatedAt: string;
  updatedBy: string;
}

export interface UserDto {
  id: string;
  name: string;
  email: string;
  department: string;
  title: string;
  apps: string[];
  role: string;
  active: boolean;
  lastLoginAt: string;
  createdAt: string;
  lastPasswordResetAt: string;
}

export interface PermissionDto {
  id: string;
  category: string;
  name: string;
  description: string;
}

export interface RoleDto {
  id: string;
  name: string;
  scope: string;
  description: string;
  memberCount: number;
  permissionIds: string[];
}

export interface NotificationDto {
  id: string;
  title: string;
  type: string;
  app: string;
  publishedAt: string;
  isRead: boolean;
  summary: string;
  importance?: string;
  body?: string;
  needsAction?: boolean;
  actionLabel?: string;
  wizardId?: string;
}

export interface OperationLogDto {
  at: string;
  userName: string;
  screenName: string;
  actionName: string;
  result: string;
  targetId: string;
  detail: string;
}

export interface LoginLogDto {
  at: string;
  userName: string;
  result: string;
  ipAddress: string;
  authMethod: string;
  clientName: string;
  failureReason: string;
}

export interface ErrorLogDto {
  id: string;
  at: string;
  app: string;
  summary: string;
  severity: string;
  status: string;
  firstSeenAt: string;
  lastSeenAt: string;
  assignment: string;
}

export interface MasterDataDto {
  apps: string[];
  plans: string[];
  tenantStatuses: string[];
  departments: string[];
  roles: string[];
  operationTypes: string[];
  managementScreens: string[];
  errorSeverities: string[];
  errorStatuses: string[];
}

export interface BootstrapResponse {
  tenant: TenantDto;
  users: UserDto[];
  roles: RoleDto[];
  permissions: PermissionDto[];
  notifications: NotificationDto[];
  operationLogs: OperationLogDto[];
  loginLogs: LoginLogDto[];
  errors: ErrorLogDto[];
  masterData: MasterDataDto;
}

export interface ApiResult<T> {
  message: string;
  data: T;
}

export const mockBootstrap: BootstrapResponse = {
  tenant: {
    id: "TEN-001",
    name: "サンプル商事株式会社",
    imageUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 280'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%231f6f78'/%3E%3Cstop offset='1' stop-color='%23d9a441'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='480' height='280' rx='28' fill='url(%23g)'/%3E%3Ccircle cx='390' cy='70' r='46' fill='rgba(255,255,255,0.18)'/%3E%3Cpath d='M0 210c58-26 104-39 138-39 61 0 103 39 164 39 46 0 105-16 178-49v119H0Z' fill='rgba(255,255,255,0.16)'/%3E%3Ctext x='40' y='126' fill='white' font-size='28' font-family='Segoe UI,sans-serif' font-weight='700'%3ETenant Brand Image%3C/text%3E%3Ctext x='40' y='162' fill='rgba(255,255,255,0.88)' font-size='16' font-family='Segoe UI,sans-serif'%3ESample tenant visual for mock screen%3C/text%3E%3C/svg%3E",
    status: "利用中",
    contractDate: "2026-04-01",
    startDate: "2026-04-15",
    plan: "Enterprise",
    userLimit: 200,
    currentUserCount: 128,
    optionContracts: ["加工モジュール", "AI需要予測"],
    novaUsage: { appName: "NOVA", enabled: true, statusText: "本番利用中" },
    gomUsage: { appName: "GOM", enabled: true, statusText: "一部部門で利用中" },
    adminName: "田中 花子",
    adminEmail: "tenant-admin@example.com",
    updatedAt: "2026-06-07 18:20",
    updatedBy: "佐藤 次郎"
  },
  users: [
    { id: "USR-001", name: "山田 太郎", email: "yamada@example.com", department: "営業本部", title: "課長", apps: ["NOVA"], role: "承認者", active: true, lastLoginAt: "2026-06-07 17:55", createdAt: "2026-04-20", lastPasswordResetAt: "2026-05-28 09:10" },
    { id: "USR-002", name: "鈴木 一郎", email: "suzuki@example.com", department: "情報システム部", title: "主任", apps: ["NOVA", "GOM"], role: "管理者", active: true, lastLoginAt: "2026-06-07 18:10", createdAt: "2026-04-15", lastPasswordResetAt: "2026-05-10 13:40" },
    { id: "USR-003", name: "高橋 美咲", email: "takahashi@example.com", department: "経理部", title: "担当", apps: ["GOM"], role: "一般利用者", active: false, lastLoginAt: "2026-05-30 08:42", createdAt: "2026-05-01", lastPasswordResetAt: "2026-06-07 16:48" }
  ],
  roles: [
    {
      id: "ROLE-USER",
      name: "一般利用者",
      scope: "アプリ利用",
      description: "自分に許可されたアプリを利用し、参照中心の操作を行う基本ロール。",
      memberCount: 1,
      permissionIds: ["perm.app.login", "perm.app.view", "perm.profile.view"]
    },
    {
      id: "ROLE-APPROVER",
      name: "承認者",
      scope: "業務承認",
      description: "一般利用者権限に加え、承認対象データの確認と承認操作を実行するロール。",
      memberCount: 1,
      permissionIds: ["perm.app.login", "perm.app.view", "perm.profile.view", "perm.workflow.approve", "perm.report.export"]
    },
    {
      id: "ROLE-ADMIN",
      name: "管理者",
      scope: "テナント運用",
      description: "エンドユーザ登録、パスワードリセット、ログ参照などテナント内の運用管理を担うロール。",
      memberCount: 1,
      permissionIds: [
        "perm.app.login",
        "perm.app.view",
        "perm.profile.view",
        "perm.user.register",
        "perm.user.reset-password",
        "perm.log.operation.view",
        "perm.log.login.view",
        "perm.error.view",
        "perm.rbac.view"
      ]
    }
  ],
  permissions: [
    { id: "perm.app.login", category: "認証", name: "ログイン", description: "管理画面または対象アプリへログインする。" },
    { id: "perm.app.view", category: "アプリ利用", name: "業務データ参照", description: "許可されたアプリでデータを参照する。" },
    { id: "perm.profile.view", category: "プロフィール", name: "自分の利用情報参照", description: "自身のプロフィールや利用可能アプリを確認する。" },
    { id: "perm.workflow.approve", category: "承認", name: "承認実行", description: "申請や取引データの承認処理を実行する。" },
    { id: "perm.report.export", category: "帳票", name: "レポート出力", description: "レポートやCSVを出力する。" },
    { id: "perm.user.register", category: "ユーザ管理", name: "エンドユーザ登録", description: "テナント内ユーザを新規登録する。" },
    { id: "perm.user.reset-password", category: "ユーザ管理", name: "パスワードリセット", description: "対象ユーザの再設定案内を実行する。" },
    { id: "perm.log.operation.view", category: "監査", name: "操作ログ参照", description: "操作ログを検索、閲覧する。" },
    { id: "perm.log.login.view", category: "監査", name: "ログインログ参照", description: "ログイン履歴や失敗理由を確認する。" },
    { id: "perm.error.view", category: "監視", name: "エラー監視参照", description: "エラー一覧と重大度を確認する。" },
    { id: "perm.rbac.view", category: "権限管理", name: "ロール、権限定義参照", description: "RBAC の定義と割当状況を確認する。" }
  ],
  notifications: [
    {
      id: "NTF-003",
      title: "新機能リリース: AI需要予測 初期設定ウィザード",
      type: "リリース",
      app: "NOVA",
      publishedAt: "2026-06-08 10:00",
      isRead: false,
      summary: "AI需要予測の利用開始に向けて、対象部門、初期データ範囲、通知先を段階的に設定できるウィザードを追加しました。",
      importance: "高",
      body: "AI需要予測オプションを契約済みのテナント向けに、初期設定ウィザードを提供開始しました。対象部門、予測開始月、管理者通知条件を設定することで、利用開始準備を短時間で完了できます。",
      needsAction: true,
      actionLabel: "設定を開始",
      wizardId: "ai-demand-forecast"
    },
    { id: "NTF-001", title: "新機能リリース: 承認フロー改善", type: "リリース", app: "NOVA", publishedAt: "2026-06-07 09:00", isRead: false, summary: "NOVA に新しい承認ステップ設定機能を追加しました。", importance: "中", body: "承認段階を複数設定できるようになり、部門ごとの承認経路に対応しました。既存フローには影響せず、必要な場合のみ追加設定で利用できます。", needsAction: false },
    { id: "NTF-002", title: "計画メンテナンスのお知らせ", type: "メンテナンス", app: "共通", publishedAt: "2026-06-06 15:30", isRead: true, summary: "2026-06-10 22:00 からメンテナンスを実施します。", importance: "高", body: "共通基盤の保守作業に伴い、2026-06-10 22:00 から 2026-06-11 00:00 の間、一部機能が利用しづらくなる可能性があります。", needsAction: true }
  ],
  operationLogs: [
    { at: "2026-06-07 18:01", userName: "鈴木 一郎", screenName: "エンドユーザ登録", actionName: "ユーザ登録", result: "成功", targetId: "USR-004", detail: "営業本部の利用者を新規登録" },
    { at: "2026-06-07 17:25", userName: "佐藤 次郎", screenName: "テナント編集", actionName: "テナント更新", result: "成功", targetId: "TEN-001", detail: "テナント名とイメージ画像を更新" },
    { at: "2026-06-07 16:48", userName: "鈴木 一郎", screenName: "パスワードリセット", actionName: "パスワードリセット", result: "成功", targetId: "USR-003", detail: "対象ユーザへ再設定案内を送信" }
  ],
  loginLogs: [
    { at: "2026-06-07 18:10", userName: "鈴木 一郎", result: "成功", ipAddress: "10.10.1.15", authMethod: "ID/パスワード", clientName: "Chrome / Windows", failureReason: "-" },
    { at: "2026-06-07 17:55", userName: "山田 太郎", result: "成功", ipAddress: "10.10.1.20", authMethod: "SSO", clientName: "Edge / Windows", failureReason: "-" },
    { at: "2026-06-07 17:42", userName: "unknown@example.com", result: "失敗", ipAddress: "10.10.9.99", authMethod: "ID/パスワード", clientName: "Chrome / macOS", failureReason: "ユーザが存在しません" }
  ],
  errors: [
    { id: "ERR-1001", at: "2026-06-07 17:40", app: "NOVA", summary: "バッチ連携処理でタイムアウトが発生", severity: "Critical", status: "発生中", firstSeenAt: "2026-06-07 16:55", lastSeenAt: "2026-06-07 17:40", assignment: "運用確認中" },
    { id: "ERR-2003", at: "2026-06-07 15:20", app: "GOM", summary: "一部通知送信の遅延", severity: "Warning", status: "未対応", firstSeenAt: "2026-06-07 14:50", lastSeenAt: "2026-06-07 15:20", assignment: "未着手" },
    { id: "ERR-3008", at: "2026-06-07 11:05", app: "共通", summary: "ログ集計ジョブの再試行完了", severity: "Info", status: "解消済み", firstSeenAt: "2026-06-07 10:48", lastSeenAt: "2026-06-07 11:05", assignment: "対応完了" }
  ],
  masterData: {
    apps: ["NOVA", "GOM"],
    plans: ["Standard", "Professional", "Enterprise"],
    tenantStatuses: ["準備中", "利用中", "停止中"],
    departments: ["営業本部", "情報システム部", "経理部", "管理部"],
    roles: ["一般利用者", "承認者", "管理者"],
    operationTypes: ["ログイン", "ログアウト", "テナント更新", "ユーザ登録", "パスワードリセット", "通知配信"],
    managementScreens: ["ダッシュボード", "テナント照会", "テナント編集", "エンドユーザ登録", "パスワードリセット", "通知一覧"],
    errorSeverities: ["Critical", "Warning", "Info"],
    errorStatuses: ["発生中", "未対応", "解消済み"]
  }
};

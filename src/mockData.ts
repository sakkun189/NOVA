export type SeverityClass = "critical" | "warning" | "info" | "success";

export interface AppUsageDto {
  appName: string;
  enabled: boolean;
  statusText: string;
}

export interface TenantDto {
  id: string;
  name: string;
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
}

export interface OperationLogDto {
  at: string;
  userName: string;
  app: string;
  feature: string;
  eventName: string;
  result: string;
  targetId: string;
}

export interface LoginLogDto {
  at: string;
  userName: string;
  app: string;
  result: string;
  ipAddress: string;
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
    { id: "USR-001", name: "山田 太郎", email: "yamada@example.com", department: "営業本部", title: "課長", apps: ["NOVA"], role: "承認者", active: true },
    { id: "USR-002", name: "鈴木 一郎", email: "suzuki@example.com", department: "情報システム部", title: "主任", apps: ["NOVA", "GOM"], role: "管理者", active: true },
    { id: "USR-003", name: "高橋 美咲", email: "takahashi@example.com", department: "経理部", title: "担当", apps: ["GOM"], role: "一般利用者", active: false }
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
    { id: "NTF-001", title: "新機能リリース: 承認フロー改善", type: "リリース", app: "NOVA", publishedAt: "2026-06-07 09:00", isRead: false, summary: "NOVA に新しい承認ステップ設定機能を追加しました。" },
    { id: "NTF-002", title: "計画メンテナンスのお知らせ", type: "メンテナンス", app: "共通", publishedAt: "2026-06-06 15:30", isRead: true, summary: "2026-06-10 22:00 からメンテナンスを実施します。" }
  ],
  operationLogs: [
    { at: "2026-06-07 18:01", userName: "鈴木 一郎", app: "NOVA", feature: "エンドユーザ管理", eventName: "ユーザ登録", result: "成功", targetId: "USR-004" },
    { at: "2026-06-07 17:25", userName: "佐藤 次郎", app: "共通", feature: "テナント管理", eventName: "テナント更新", result: "成功", targetId: "TEN-001" },
    { at: "2026-06-07 16:48", userName: "鈴木 一郎", app: "GOM", feature: "認証", eventName: "パスワードリセット", result: "成功", targetId: "USR-003" }
  ],
  loginLogs: [
    { at: "2026-06-07 18:10", userName: "鈴木 一郎", app: "NOVA", result: "成功", ipAddress: "10.10.1.15", failureReason: "-" },
    { at: "2026-06-07 17:55", userName: "山田 太郎", app: "GOM", result: "成功", ipAddress: "10.10.1.20", failureReason: "-" },
    { at: "2026-06-07 17:42", userName: "unknown@example.com", app: "NOVA", result: "失敗", ipAddress: "10.10.9.99", failureReason: "ユーザが存在しません" }
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
    errorSeverities: ["Critical", "Warning", "Info"],
    errorStatuses: ["発生中", "未対応", "解消済み"]
  }
};

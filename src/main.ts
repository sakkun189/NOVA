import "./style.css";
import {
  type ApiResult,
  type BootstrapResponse,
  type NotificationDto,
  type PermissionDto,
  type TenantDto,
  type UserDto,
  mockBootstrap
} from "./mockData";

type SeverityClass = "critical" | "warning" | "info" | "success";

const state: { data: BootstrapResponse; userName: string; backendAvailable: boolean } = {
  data: structuredClone(mockBootstrap),
  userName: "モック管理者",
  backendAvailable: false
};

const wizardState = {
  activeWizardId: "",
  step: 1,
  department: "営業本部",
  startMonth: "2026-07",
  notifyAdmins: true
};

const uiState = {
  selectedNotificationId: "NTF-003"
};

const viewMeta: Record<string, { title: string; description: string }> = {
  dashboard: { title: "ダッシュボード", description: "管理状況の要約を確認します。" },
  "tenant-view": { title: "テナント照会", description: "契約情報と利用状況を確認します。" },
  "contract-license": { title: "契約/ライセンス利用状況", description: "契約内容、上限数、オプション利用状況を確認します。" },
  "tenant-edit": { title: "テナント編集", description: "テナント設定を更新します。" },
  "user-list": { title: "エンドユーザ一覧", description: "登録済みユーザの状態、ロール、利用アプリを確認します。" },
  "user-register": { title: "エンドユーザ登録", description: "新規利用者を登録します。" },
  "notification-list": { title: "通知一覧", description: "ベンダ通知を一覧確認し、詳細や設定導線を確認します。" },
  "role-access": { title: "ロール/権限管理", description: "RBAC に基づくロール定義と権限割当を確認します。" },
  "password-reset": { title: "パスワードリセット", description: "対象ユーザに再設定案内を送ります。" },
  "operation-logs": { title: "操作ログ", description: "主要な管理操作を追跡します。" },
  "login-logs": { title: "ログインログ", description: "ログイン履歴と失敗理由を確認します。" },
  "error-monitor": { title: "エラー監視", description: "重大度別に異常を確認します。" }
};

renderShell();

function renderShell(): void {
  const app = document.getElementById("app");
  if (!app) {
    return;
  }

  app.innerHTML = `
    <div id="loginView" class="login-shell">
      <section class="login-card">
        <div class="eyebrow">Vendor Control Plane</div>
        <h1>SaaS販売管理システム</h1>
        <p class="subtle">システム運用者向けモック画面</p>
        <form id="loginForm" class="stacked-form">
          <label>
            <span>ログインID</span>
            <input id="loginId" type="text" value="admin@example.com" required>
          </label>
          <label>
            <span>パスワード</span>
            <input id="loginPassword" type="password" value="password" required>
          </label>
          <button type="submit" class="primary">ログイン</button>
        </form>
      </section>
    </div>

    <div id="appShell" class="app-shell hidden">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">N</div>
          <div>
            <strong>NOVA 3</strong>
            <p>Vendor Control Plane</p>
          </div>
        </div>
        <nav class="nav">
          ${Object.entries(viewMeta)
            .map(([key, value], index) => `<button data-view="${key}" class="nav-item ${index === 0 ? "active" : ""}">${value.title}</button>`)
            .join("")}
        </nav>
      </aside>
      <main class="main-panel">
        <header class="topbar">
          <div>
            <h2 id="viewTitle">ダッシュボード</h2>
            <p id="viewDescription">管理状況の要約を確認します。</p>
          </div>
          <div class="topbar-meta">
            <span id="backendModeBadge" class="badge info">Frontend Mock</span>
            <span id="currentUserName">${state.userName}</span>
            <button id="logoutButton" class="ghost">ログアウト</button>
          </div>
        </header>
        <section id="flashMessage" class="flash hidden"></section>
        <section id="viewsHost"></section>
        <section id="wizardModalHost"></section>
      </main>
    </div>
  `;

  bindBaseEvents();
}

function bindBaseEvents(): void {
  const loginForm = document.getElementById("loginForm") as HTMLFormElement | null;
  const logoutButton = document.getElementById("logoutButton") as HTMLButtonElement | null;

  loginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    state.userName = valueOf("loginId", "モック管理者");
    await loadBootstrap();
    renderAppViews();
    (document.getElementById("currentUserName") as HTMLElement).textContent = state.userName;
    document.getElementById("loginView")?.classList.add("hidden");
    document.getElementById("appShell")?.classList.remove("hidden");
  });

  logoutButton?.addEventListener("click", () => {
    document.getElementById("appShell")?.classList.add("hidden");
    document.getElementById("loginView")?.classList.remove("hidden");
  });
}

async function loadBootstrap(): Promise<void> {
  try {
    const response = await fetch("/api/bootstrap");
    if (!response.ok) {
      throw new Error(`bootstrap failed: ${response.status}`);
    }
    state.data = await response.json() as BootstrapResponse;
    state.backendAvailable = true;
  } catch {
    state.data = structuredClone(mockBootstrap);
    state.backendAvailable = false;
  }
}

function renderAppViews(): void {
  const host = document.getElementById("viewsHost") as HTMLElement;
  host.innerHTML = `
    <section id="dashboard" class="view active-view"></section>
    <section id="tenant-view" class="view"></section>
    <section id="contract-license" class="view"></section>
    <section id="tenant-edit" class="view"></section>
    <section id="user-list" class="view"></section>
    <section id="user-register" class="view"></section>
    <section id="notification-list" class="view"></section>
    <section id="role-access" class="view"></section>
    <section id="password-reset" class="view"></section>
    <section id="operation-logs" class="view"></section>
    <section id="login-logs" class="view"></section>
    <section id="error-monitor" class="view"></section>
  `;

  document.querySelectorAll<HTMLButtonElement>(".nav-item").forEach((button) => {
    button.onclick = () => changeView(button.dataset.view ?? "dashboard");
  });

  renderModeBadge();
  renderDashboard();
  renderTenantView();
  renderContractLicense();
  renderTenantForm();
  renderUserList();
  renderUserForm();
  renderNotificationList();
  renderRoleAccess();
  renderResetForm();
  renderOperationLogs();
  renderLoginLogs();
  renderErrors();
}

function renderModeBadge(): void {
  const badge = document.getElementById("backendModeBadge") as HTMLElement;
  badge.textContent = state.backendAvailable ? "C# API Connected" : "Frontend Mock";
  badge.className = `badge ${state.backendAvailable ? "success" : "info"}`;
}

function changeView(viewId: string): void {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
  document.getElementById(viewId)?.classList.add("active-view");
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
  document.querySelector(`[data-view="${viewId}"]`)?.classList.add("active");
  const meta = viewMeta[viewId];
  (document.getElementById("viewTitle") as HTMLElement).textContent = meta.title;
  (document.getElementById("viewDescription") as HTMLElement).textContent = meta.description;
}

function renderDashboard(): void {
  const data = state.data;
  const criticalCount = data.errors.filter((x) => x.severity === "Critical").length;
  const unreadNotifications = data.notifications.filter((x) => !x.isRead).length;

  (document.getElementById("dashboard") as HTMLElement).innerHTML = `
    <div class="hero">
      <div>
        <div class="eyebrow">OVERVIEW</div>
        <h3>${escapeHtml(data.tenant.name)}</h3>
        <p>${escapeHtml(`${data.tenant.status} | 契約プラン: ${data.tenant.plan} | 現在登録数: ${data.tenant.currentUserCount}`)}</p>
      </div>
      <div class="hero-stats">
        ${summaryCard("現在登録数", `${data.tenant.currentUserCount}`)}
        ${summaryCard("重大エラー", `${criticalCount}`)}
        ${summaryCard("未読通知", `${unreadNotifications}`)}
        ${summaryCard("直近ログイン", `${data.loginLogs.length}`)}
      </div>
    </div>
    <div class="grid two-col">
      <article class="panel">
        <div class="panel-header"><h3>直近通知</h3></div>
        <div class="list">
          ${data.notifications.map(renderNotificationCard).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>重大エラー</h3></div>
        <div class="list">
          ${data.errors.filter((x) => x.severity === "Critical").map((e) => `<div class="list-item"><h4>${escapeHtml(e.id)}</h4><p>${escapeHtml(e.summary)}</p><small>${e.at} | ${e.app}</small></div>`).join("")}
        </div>
      </article>
    </div>
  `;

  document.querySelectorAll<HTMLElement>("[data-wizard-id]").forEach((element) => {
    element.onclick = () => openWizard(element.dataset.wizardId ?? "");
    element.onkeydown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openWizard(element.dataset.wizardId ?? "");
      }
    };
  });
}

function renderTenantView(): void {
  const tenant = state.data.tenant;
  const contractDetails = [
    ["テナントID", tenant.id],
    ["テナント名", tenant.name],
    ["契約ステータス", tenant.status],
    ["ベンダとの契約日", tenant.contractDate],
    ["テナント利用開始日", tenant.startDate],
    ["契約プラン", tenant.plan],
    ["ユーザ登録上限数", `${tenant.userLimit}`],
    ["現在登録数", `${tenant.currentUserCount}`],
    ["オプション契約一覧", tenant.optionContracts.join("、")],
    ["最終更新", `${tenant.updatedAt} / ${tenant.updatedBy}`]
  ];
  const usageDetails = [
    ["NOVA利用状況", tenant.novaUsage.statusText],
    ["GOM利用状況", tenant.gomUsage.statusText],
    ["管理者名", tenant.adminName],
    ["管理者メールアドレス", tenant.adminEmail]
  ];

  (document.getElementById("tenant-view") as HTMLElement).innerHTML = `
    <div class="grid two-col tenant-sections">
      <article class="panel">
        <div class="panel-header"><h3>契約情報</h3></div>
        <div class="detail-grid">
          ${contractDetails.map(([label, value]) => `<div class="detail-item"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>利用情報</h3></div>
        <div class="detail-grid">
          ${usageDetails.map(([label, value]) => `<div class="detail-item"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
        </div>
      </article>
    </div>
  `;
}

function renderTenantForm(): void {
  const view = document.getElementById("tenant-edit") as HTMLElement;
  view.innerHTML = `
    <article class="panel">
      <div class="panel-header"><h3>テナント情報編集</h3></div>
      <div class="empty-state">
        <h4>現在、テナント側で編集できる項目はありません</h4>
        <p>契約情報および契約ステータスはベンダ側で管理します。利用情報も現時点では照会のみを対象とします。</p>
      </div>
    </article>
  `;
}

function renderContractLicense(): void {
  const tenant = state.data.tenant;
  const remaining = tenant.userLimit - tenant.currentUserCount;
  const appUsage = state.data.masterData.apps.map((app) => ({
    app,
    users: state.data.users.filter((user) => user.apps.includes(app)).length,
    status: app === "NOVA" ? tenant.novaUsage.statusText : tenant.gomUsage.statusText
  }));

  (document.getElementById("contract-license") as HTMLElement).innerHTML = `
    <div class="grid contract-layout">
      <article class="panel">
        <div class="panel-header"><h3>契約サマリ</h3></div>
        <div class="hero-stats">
          ${summaryCard("契約プラン", tenant.plan)}
          ${summaryCard("上限数", `${tenant.userLimit}`)}
          ${summaryCard("現在登録数", `${tenant.currentUserCount}`)}
          ${summaryCard("残数", `${remaining}`)}
        </div>
        <div class="detail-grid contract-meta">
          <div class="detail-item"><span>契約ステータス</span><strong>${escapeHtml(tenant.status)}</strong></div>
          <div class="detail-item"><span>ベンダとの契約日</span><strong>${tenant.contractDate}</strong></div>
          <div class="detail-item"><span>テナント利用開始日</span><strong>${tenant.startDate}</strong></div>
          <div class="detail-item"><span>超過見込み</span><strong>${remaining <= 20 ? "注意" : "問題なし"}</strong></div>
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>オプション契約</h3></div>
        <div class="list">
          ${tenant.optionContracts.map((option) => `
            <div class="list-item option-item">
              <h4>${escapeHtml(option)}</h4>
              <p>${option === "AI需要予測" ? "初期設定ウィザードを利用して導入準備を進められます。" : "対象業務向けの追加機能として契約済みです。"}</p>
              <small>${option === "AI需要予測" ? "初期設定: 実施中" : "初期設定: 利用中"}</small>
            </div>
          `).join("")}
        </div>
      </article>
    </div>
    <article class="panel">
      <div class="panel-header"><h3>アプリ別利用状況</h3></div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>アプリ</th>
              <th>利用状況</th>
              <th>利用中ユーザ数</th>
              <th>登録率</th>
            </tr>
          </thead>
          <tbody>
            ${appUsage.map((item) => `
              <tr>
                <td>${escapeHtml(item.app)}</td>
                <td>${escapeHtml(item.status)}</td>
                <td>${item.users}</td>
                <td>${Math.round((item.users / Math.max(tenant.currentUserCount, 1)) * 100)}%</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `;
}

function renderUserList(): void {
  const view = document.getElementById("user-list") as HTMLElement;
  view.innerHTML = `
    <article class="panel">
      <div class="panel-header"><h3>エンドユーザ一覧</h3></div>
      <div class="filters">
        ${selectField("userListAppFilter", "利用アプリ", ["すべて", ...state.data.masterData.apps], "すべて")}
        ${selectField("userListRoleFilter", "ロール", ["すべて", ...state.data.masterData.roles], "すべて")}
        ${selectField("userListStatusFilter", "アカウント状態", ["すべて", "有効", "無効"], "すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ユーザID</th>
              <th>名前</th>
              <th>メールアドレス</th>
              <th>部署、所属</th>
              <th>利用アプリ</th>
              <th>ロール</th>
              <th>状態</th>
              <th>最終ログイン</th>
              <th>登録日</th>
              <th>最終リセット</th>
            </tr>
          </thead>
          <tbody id="userListBody"></tbody>
        </table>
      </div>
    </article>
  `;

  document.querySelectorAll("#user-list select").forEach((x) => x.addEventListener("change", fillUserListRows));
  fillUserListRows();
}

function fillUserListRows(): void {
  const appFilter = valueOf("userListAppFilter", "すべて");
  const roleFilter = valueOf("userListRoleFilter", "すべて");
  const statusFilter = valueOf("userListStatusFilter", "すべて");

  (document.getElementById("userListBody") as HTMLElement).innerHTML = state.data.users
    .filter((user) => appFilter === "すべて" || user.apps.includes(appFilter))
    .filter((user) => roleFilter === "すべて" || user.role === roleFilter)
    .filter((user) => statusFilter === "すべて" || (statusFilter === "有効" ? user.active : !user.active))
    .map((user) => `
      <tr>
        <td>${user.id}</td>
        <td>${escapeHtml(user.name)}</td>
        <td>${escapeHtml(user.email)}</td>
        <td>${escapeHtml(user.department)}</td>
        <td>${escapeHtml(user.apps.join(", "))}</td>
        <td>${escapeHtml(user.role)}</td>
        <td><span class="badge ${user.active ? "success" : "warning"}">${user.active ? "有効" : "無効"}</span></td>
        <td>${user.lastLoginAt}</td>
        <td>${user.createdAt}</td>
        <td>${user.lastPasswordResetAt}</td>
      </tr>
    `).join("");
}

function renderUserForm(): void {
  const data = state.data;
  const view = document.getElementById("user-register") as HTMLElement;
  view.innerHTML = `
    <article class="panel">
      <div class="panel-header"><h3>エンドユーザ登録</h3></div>
      <form id="userForm" class="stacked-form two-up">
        ${inputField("userEmail", "メールアドレス", "email", "")}
        ${inputField("userName", "名前", "text", "")}
        ${selectField("userDepartment", "部署等の所属", data.masterData.departments, data.masterData.departments[0])}
        ${inputField("userTitle", "役職", "text", "")}
        ${selectField("userApp", "利用アプリ", data.masterData.apps, data.masterData.apps[0])}
        ${selectField("userRole", "権限、ロール", data.masterData.roles, data.masterData.roles[0])}
        <label>
          <span>登録通知送信有無</span>
          <select id="userSendNotification">
            <option value="true">送信する</option>
            <option value="false">送信しない</option>
          </select>
        </label>
        <div class="form-actions full"><button type="submit" class="primary">登録</button></div>
      </form>
    </article>
  `;

  (document.getElementById("userForm") as HTMLFormElement).onsubmit = async (event) => {
    event.preventDefault();
    const payload = {
      email: valueOf("userEmail"),
      name: valueOf("userName"),
      department: valueOf("userDepartment"),
      title: valueOf("userTitle"),
      apps: [valueOf("userApp")],
      role: valueOf("userRole"),
      sendNotification: valueOf("userSendNotification") === "true"
    };

    if (state.backendAvailable) {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json() as ApiResult<UserDto>;
      state.data.users.unshift(result.data);
      showFlash(result.message);
      await loadBootstrap();
    } else {
      const newUser: UserDto = {
        id: `USR-${String(state.data.users.length + 1).padStart(3, "0")}`,
        name: payload.name,
        email: payload.email,
        department: payload.department,
        title: payload.title,
        apps: payload.apps,
        role: payload.role,
        active: true,
        lastLoginAt: "-",
        createdAt: nowLabel().slice(0, 10),
        lastPasswordResetAt: "-"
      };
      state.data.users.unshift(newUser);
      state.data.tenant.currentUserCount += 1;
      state.data.operationLogs.unshift({
        at: nowLabel(),
        userName: state.userName,
        app: payload.apps[0],
        feature: "エンドユーザ管理",
        eventName: "ユーザ登録",
        result: "成功",
        targetId: newUser.id
      });
      showFlash("フロントモック上でユーザを登録しました。");
    }

    rerenderAfterMutation();
    (document.getElementById("userForm") as HTMLFormElement).reset();
  };
}

function renderResetForm(): void {
  const view = document.getElementById("password-reset") as HTMLElement;
  view.innerHTML = `
    <article class="panel">
      <div class="panel-header"><h3>パスワードリセット</h3></div>
      <form id="resetForm" class="stacked-form">
        <label>
          <span>対象ユーザ</span>
          <select id="resetUserSelect">${state.data.users.map((user) => `<option value="${user.id}">${escapeHtml(user.name)} (${escapeHtml(user.email)})</option>`).join("")}</select>
        </label>
        <div id="resetUserCard" class="mini-card"></div>
        <label class="checkbox">
          <input id="resetConfirm" type="checkbox">
          <span>再設定案内メールを送る前提で実行する</span>
        </label>
        <div class="form-actions"><button type="submit" class="primary">リセット実行</button></div>
      </form>
    </article>
  `;

  const select = document.getElementById("resetUserSelect") as HTMLSelectElement;
  const renderCard = () => {
    const user = state.data.users.find((x) => x.id === select.value) ?? state.data.users[0];
    if (!user) {
      return;
    }
    (document.getElementById("resetUserCard") as HTMLElement).innerHTML = `
      <h4>${escapeHtml(user.name)}</h4>
      <p>${escapeHtml(user.email)}</p>
      <p>${escapeHtml(user.department)} / ${escapeHtml(user.role)}</p>
      <p>利用アプリ: ${escapeHtml(user.apps.join(", "))}</p>
    `;
  };
  select.onchange = renderCard;
  renderCard();

  (document.getElementById("resetForm") as HTMLFormElement).onsubmit = async (event) => {
    event.preventDefault();
    const confirmed = (document.getElementById("resetConfirm") as HTMLInputElement).checked;
    if (!confirmed) {
      showFlash("確認チェックを付けてください。", true);
      return;
    }

    if (state.backendAvailable) {
      const response = await fetch("/api/users/password-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: select.value })
      });
      const result = await response.json() as ApiResult<{ message: string }>;
      showFlash(result.message);
      await loadBootstrap();
    } else {
      const user = state.data.users.find((x) => x.id === select.value);
      if (!user) {
        showFlash("対象ユーザが見つかりません。", true);
        return;
      }
      state.data.operationLogs.unshift({
        at: nowLabel(),
        userName: state.userName,
        app: user.apps[0] ?? "共通",
        feature: "認証",
        eventName: "パスワードリセット",
        result: "成功",
        targetId: user.id
      });
      showFlash("フロントモック上でパスワードリセットを受け付けました。");
    }

    rerenderAfterMutation();
  };
}

function renderNotificationCard(notification: NotificationDto): string {
  const clickableClass = notification.wizardId ? " notification-card-clickable" : "";
  return `
    <div class="list-item notification-card${clickableClass}" ${notification.wizardId ? `data-wizard-id="${escapeHtml(notification.wizardId)}" role="button" tabindex="0"` : ""}>
      <div class="notification-head">
        <h4>${escapeHtml(notification.title)}</h4>
        <span class="badge ${notification.isRead ? "info" : "success"}">${notification.isRead ? "既読" : "未読"}</span>
      </div>
      <p>${escapeHtml(notification.summary)}</p>
      <small>${notification.publishedAt} | ${notification.app}</small>
      ${notification.actionLabel && notification.wizardId ? `
        <div class="notification-actions">
          <span class="inline-action">${escapeHtml(notification.actionLabel)}</span>
        </div>
      ` : ""}
    </div>
  `;
}

function renderNotificationList(): void {
  const view = document.getElementById("notification-list") as HTMLElement;
  const selected = getSelectedNotification();
  view.innerHTML = `
    <div class="grid notification-layout">
      <article class="panel">
        <div class="panel-header"><h3>通知一覧</h3></div>
        <div class="filters">
          ${selectField("notificationTypeFilter", "通知種別", ["すべて", "リリース", "メンテナンス"], "すべて")}
          ${selectField("notificationReadFilter", "既読状態", ["すべて", "未読", "既読"], "すべて")}
        </div>
        <div class="list" id="notificationListCards"></div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>通知詳細</h3></div>
        <div id="notificationDetailPanel">
          ${selected ? renderNotificationDetail(selected) : `<div class="empty-state"><h4>通知を選択してください</h4><p>左側の通知一覧から確認したい通知を選ぶと詳細が表示されます。</p></div>`}
        </div>
      </article>
    </div>
  `;

  document.querySelectorAll("#notification-list select").forEach((x) => x.addEventListener("change", fillNotificationList));
  fillNotificationList();
}

function fillNotificationList(): void {
  const typeFilter = valueOf("notificationTypeFilter", "すべて");
  const readFilter = valueOf("notificationReadFilter", "すべて");
  const container = document.getElementById("notificationListCards") as HTMLElement;

  container.innerHTML = state.data.notifications
    .filter((notification) => typeFilter === "すべて" || notification.type === typeFilter)
    .filter((notification) => readFilter === "すべて" || (readFilter === "未読" ? !notification.isRead : notification.isRead))
    .map((notification) => `
      <div class="list-item notification-row ${notification.id === uiState.selectedNotificationId ? "selected-row" : ""}" data-notification-id="${notification.id}">
        <div class="notification-head">
          <h4>${escapeHtml(notification.title)}</h4>
          <span class="badge ${notification.isRead ? "info" : "success"}">${notification.isRead ? "既読" : "未読"}</span>
        </div>
        <p>${escapeHtml(notification.summary)}</p>
        <small>${notification.publishedAt} | ${notification.type} | ${notification.app}</small>
      </div>
    `).join("");

  document.querySelectorAll<HTMLElement>("[data-notification-id]").forEach((element) => {
    element.onclick = () => {
      uiState.selectedNotificationId = element.dataset.notificationId ?? "";
      updateNotificationDetail();
      fillNotificationList();
    };
  });
}

function updateNotificationDetail(): void {
  const selected = getSelectedNotification();
  (document.getElementById("notificationDetailPanel") as HTMLElement).innerHTML = selected
    ? renderNotificationDetail(selected)
    : `<div class="empty-state"><h4>通知を選択してください</h4><p>左側の通知一覧から確認したい通知を選ぶと詳細が表示されます。</p></div>`;

  const actionButton = document.getElementById("notificationWizardButton") as HTMLButtonElement | null;
  if (actionButton) {
    actionButton.onclick = () => openWizard(actionButton.dataset.wizardId ?? "");
  }
}

function renderNotificationDetail(notification: NotificationDto): string {
  return `
    <div class="stacked-form">
      <div class="detail-grid">
        <div class="detail-item"><span>通知種別</span><strong>${escapeHtml(notification.type)}</strong></div>
        <div class="detail-item"><span>対象アプリ</span><strong>${escapeHtml(notification.app)}</strong></div>
        <div class="detail-item"><span>配信日時</span><strong>${notification.publishedAt}</strong></div>
        <div class="detail-item"><span>重要度</span><strong>${escapeHtml(notification.importance ?? "-")}</strong></div>
      </div>
      <div class="detail-item detail-block">
        <span>通知概要</span>
        <strong>${escapeHtml(notification.summary)}</strong>
      </div>
      <div class="detail-item detail-block">
        <span>詳細内容</span>
        <p>${escapeHtml(notification.body ?? notification.summary)}</p>
      </div>
      <div class="detail-item detail-block">
        <span>対応要否</span>
        <strong>${notification.needsAction ? "要対応" : "確認のみ"}</strong>
      </div>
      ${notification.wizardId && notification.actionLabel ? `
        <div class="form-actions">
          <button type="button" class="primary" id="notificationWizardButton" data-wizard-id="${escapeHtml(notification.wizardId)}">${escapeHtml(notification.actionLabel)}</button>
        </div>
      ` : ""}
    </div>
  `;
}

function openWizard(wizardId: string): void {
  if (!wizardId) {
    return;
  }
  wizardState.activeWizardId = wizardId;
  wizardState.step = 1;
  wizardState.department = "営業本部";
  wizardState.startMonth = "2026-07";
  wizardState.notifyAdmins = true;
  renderWizardModal();
}

function closeWizard(): void {
  wizardState.activeWizardId = "";
  renderWizardModal();
}

function renderWizardModal(): void {
  const host = document.getElementById("wizardModalHost") as HTMLElement;
  if (!wizardState.activeWizardId) {
    host.innerHTML = "";
    return;
  }

  host.innerHTML = `
    <div class="wizard-overlay">
      <div class="wizard-modal">
        <div class="panel-header">
          <div>
            <h3>AI需要予測 初期設定ウィザード</h3>
            <p class="subtle">ステップ ${wizardState.step} / 3</p>
          </div>
          <button type="button" class="ghost" id="wizardCloseButton">閉じる</button>
        </div>
        ${renderWizardStep()}
      </div>
    </div>
  `;

  (document.getElementById("wizardCloseButton") as HTMLButtonElement).onclick = closeWizard;

  if (wizardState.step === 1) {
    (document.getElementById("wizardDepartment") as HTMLSelectElement).onchange = (event) => {
      wizardState.department = (event.target as HTMLSelectElement).value;
    };
    (document.getElementById("wizardNextStep") as HTMLButtonElement).onclick = () => {
      wizardState.step = 2;
      renderWizardModal();
    };
    return;
  }

  if (wizardState.step === 2) {
    (document.getElementById("wizardStartMonth") as HTMLInputElement).onchange = (event) => {
      wizardState.startMonth = (event.target as HTMLInputElement).value;
    };
    (document.getElementById("wizardNotifyAdmins") as HTMLInputElement).onchange = (event) => {
      wizardState.notifyAdmins = (event.target as HTMLInputElement).checked;
    };
    (document.getElementById("wizardPrevStep") as HTMLButtonElement).onclick = () => {
      wizardState.step = 1;
      renderWizardModal();
    };
    (document.getElementById("wizardNextStep") as HTMLButtonElement).onclick = () => {
      wizardState.step = 3;
      renderWizardModal();
    };
    return;
  }

  (document.getElementById("wizardPrevStep") as HTMLButtonElement).onclick = () => {
    wizardState.step = 2;
    renderWizardModal();
  };
  (document.getElementById("wizardFinish") as HTMLButtonElement).onclick = () => {
    state.data.operationLogs.unshift({
      at: nowLabel(),
      userName: state.userName,
      app: "NOVA",
      feature: "通知",
      eventName: "AI需要予測 初期設定ウィザード完了",
      result: "成功",
      targetId: "NTF-003"
    });
    const target = state.data.notifications.find((item) => item.id === "NTF-003");
    if (target) {
      target.isRead = true;
    }
    showFlash("AI需要予測の初期設定ウィザードを完了しました。");
    closeWizard();
    renderDashboard();
    renderOperationLogs();
  };
}

function renderWizardStep(): string {
  if (wizardState.step === 1) {
    return `
      <div class="wizard-body stacked-form">
        <div class="wizard-summary">対象部門と利用開始アプリを選択します。</div>
        <label>
          <span>対象部門</span>
          <select id="wizardDepartment">
            ${state.data.masterData.departments.map((department) => `<option value="${escapeHtml(department)}" ${department === wizardState.department ? "selected" : ""}>${escapeHtml(department)}</option>`).join("")}
          </select>
        </label>
        <label>
          <span>対象機能</span>
          <input type="text" value="AI需要予測" disabled>
        </label>
        <div class="form-actions">
          <button type="button" class="primary" id="wizardNextStep">次へ</button>
        </div>
      </div>
    `;
  }

  if (wizardState.step === 2) {
    return `
      <div class="wizard-body stacked-form">
        <div class="wizard-summary">初期データの適用期間と通知条件を設定します。</div>
        <label>
          <span>予測開始月</span>
          <input id="wizardStartMonth" type="month" value="${escapeHtml(wizardState.startMonth)}">
        </label>
        <label class="checkbox">
          <input id="wizardNotifyAdmins" type="checkbox" ${wizardState.notifyAdmins ? "checked" : ""}>
          <span>設定完了時にテナント管理者へ通知する</span>
        </label>
        <div class="form-actions">
          <button type="button" class="ghost" id="wizardPrevStep">戻る</button>
          <button type="button" class="primary" id="wizardNextStep">確認へ</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="wizard-body stacked-form">
      <div class="wizard-summary">設定内容を確認して完了します。</div>
      <div class="detail-grid">
        <div class="detail-item"><span>対象部門</span><strong>${escapeHtml(wizardState.department)}</strong></div>
        <div class="detail-item"><span>対象機能</span><strong>AI需要予測</strong></div>
        <div class="detail-item"><span>予測開始月</span><strong>${escapeHtml(wizardState.startMonth)}</strong></div>
        <div class="detail-item"><span>管理者通知</span><strong>${wizardState.notifyAdmins ? "送信する" : "送信しない"}</strong></div>
      </div>
      <div class="form-actions">
        <button type="button" class="ghost" id="wizardPrevStep">戻る</button>
        <button type="button" class="primary" id="wizardFinish">設定を完了</button>
      </div>
    </div>
  `;
}

function renderRoleAccess(): void {
  const view = document.getElementById("role-access") as HTMLElement;
  const roles = withDerivedRoleCounts(state.data);
  const permissions = state.data.permissions;
  const groupedPermissions = groupPermissionsByCategory(permissions);

  view.innerHTML = `
    <div class="grid two-col rbac-top">
      <article class="panel">
        <div class="panel-header"><h3>ロール定義</h3></div>
        <div class="list role-list">
          ${roles.map((role) => `
            <div class="list-item role-card">
              <div class="role-card-head">
                <div>
                  <h4>${escapeHtml(role.name)}</h4>
                  <small>${escapeHtml(role.scope)}</small>
                </div>
                <span class="badge info">${role.memberCount}名</span>
              </div>
              <p>${escapeHtml(role.description)}</p>
              <small>付与権限数: ${role.permissionIds.length}</small>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>権限カタログ</h3></div>
        <div class="permission-groups">
          ${Object.entries(groupedPermissions).map(([category, items]) => `
            <section class="permission-group">
              <h4>${escapeHtml(category)}</h4>
              <div class="permission-items">
                ${items.map((permission) => `
                  <div class="permission-item">
                    <strong>${escapeHtml(permission.name)}</strong>
                    <p>${escapeHtml(permission.description)}</p>
                  </div>
                `).join("")}
              </div>
            </section>
          `).join("")}
        </div>
      </article>
    </div>
    <article class="panel">
      <div class="panel-header"><h3>ロール別許可マトリクス</h3></div>
      <div class="table-wrap">
        <table class="rbac-matrix">
          <thead>
            <tr>
              <th>権限</th>
              ${roles.map((role) => `<th>${escapeHtml(role.name)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${permissions.map((permission) => `
              <tr>
                <td>
                  <strong>${escapeHtml(permission.name)}</strong>
                  <div class="table-subtext">${escapeHtml(permission.category)}</div>
                </td>
                ${roles.map((role) => `
                  <td class="matrix-cell">
                    ${role.permissionIds.includes(permission.id) ? '<span class="matrix-check allowed">●</span>' : '<span class="matrix-check denied">-</span>'}
                  </td>
                `).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
    <article class="panel">
      <div class="panel-header"><h3>ロール割当ユーザ</h3></div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ユーザ名</th>
              <th>メールアドレス</th>
              <th>所属</th>
              <th>ロール</th>
              <th>利用アプリ</th>
            </tr>
          </thead>
          <tbody>
            ${state.data.users.map((user) => `
              <tr>
                <td>${escapeHtml(user.name)}</td>
                <td>${escapeHtml(user.email)}</td>
                <td>${escapeHtml(user.department)}</td>
                <td>${escapeHtml(user.role)}</td>
                <td>${escapeHtml(user.apps.join(", "))}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `;
}

function renderOperationLogs(): void {
  (document.getElementById("operation-logs") as HTMLElement).innerHTML = `
    <article class="panel">
      <div class="panel-header"><h3>操作ログ</h3></div>
      <div class="filters">
        ${selectField("operationAppFilter", "対象アプリ", ["すべて", ...state.data.masterData.apps, "共通"], "すべて")}
        ${selectField("operationTypeFilter", "イベント種別", ["すべて", ...state.data.masterData.operationTypes], "すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>操作日時</th><th>操作者</th><th>対象アプリ</th><th>対象機能</th><th>イベント</th><th>結果</th><th>対象ID</th></tr></thead>
          <tbody id="operationLogsBody"></tbody>
        </table>
      </div>
    </article>
  `;

  document.querySelectorAll("#operation-logs select").forEach((x) => x.addEventListener("change", fillOperationLogRows));
  fillOperationLogRows();
}

function fillOperationLogRows(): void {
  const appFilter = valueOf("operationAppFilter", "すべて");
  const typeFilter = valueOf("operationTypeFilter", "すべて");
  (document.getElementById("operationLogsBody") as HTMLElement).innerHTML = state.data.operationLogs
    .filter((x) => appFilter === "すべて" || x.app === appFilter)
    .filter((x) => typeFilter === "すべて" || x.eventName === typeFilter)
    .map((x) => `<tr><td>${x.at}</td><td>${escapeHtml(x.userName)}</td><td>${escapeHtml(x.app)}</td><td>${escapeHtml(x.feature)}</td><td>${escapeHtml(x.eventName)}</td><td>${escapeHtml(x.result)}</td><td>${escapeHtml(x.targetId)}</td></tr>`)
    .join("");
}

function renderLoginLogs(): void {
  (document.getElementById("login-logs") as HTMLElement).innerHTML = `
    <article class="panel">
      <div class="panel-header"><h3>ログインログ</h3></div>
      <div class="filters">
        ${selectField("loginAppFilter", "対象アプリ", ["すべて", ...state.data.masterData.apps], "すべて")}
        ${selectField("loginResultFilter", "結果", ["すべて", "成功", "失敗"], "すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>ログイン日時</th><th>ユーザ名</th><th>対象アプリ</th><th>結果</th><th>IPアドレス</th><th>失敗理由</th></tr></thead>
          <tbody id="loginLogsBody"></tbody>
        </table>
      </div>
    </article>
  `;

  document.querySelectorAll("#login-logs select").forEach((x) => x.addEventListener("change", fillLoginLogRows));
  fillLoginLogRows();
}

function fillLoginLogRows(): void {
  const appFilter = valueOf("loginAppFilter", "すべて");
  const resultFilter = valueOf("loginResultFilter", "すべて");
  (document.getElementById("loginLogsBody") as HTMLElement).innerHTML = state.data.loginLogs
    .filter((x) => appFilter === "すべて" || x.app === appFilter)
    .filter((x) => resultFilter === "すべて" || x.result === resultFilter)
    .map((x) => `<tr><td>${x.at}</td><td>${escapeHtml(x.userName)}</td><td>${escapeHtml(x.app)}</td><td>${escapeHtml(x.result)}</td><td>${escapeHtml(x.ipAddress)}</td><td>${escapeHtml(x.failureReason)}</td></tr>`)
    .join("");
}

function renderErrors(): void {
  (document.getElementById("error-monitor") as HTMLElement).innerHTML = `
    <article class="panel">
      <div class="panel-header"><h3>エラー監視</h3></div>
      <div class="filters">
        ${selectField("errorAppFilter", "対象アプリ", ["すべて", ...state.data.masterData.apps, "共通"], "すべて")}
        ${selectField("errorSeverityFilter", "重大度", ["すべて", ...state.data.masterData.errorSeverities], "すべて")}
        ${selectField("errorStatusFilter", "対応状況", ["すべて", ...state.data.masterData.errorStatuses], "すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>発生日時</th><th>エラーID</th><th>対象アプリ</th><th>概要</th><th>重大度</th><th>対応状況</th><th>初回発生</th><th>最新発生</th><th>担当状況</th></tr></thead>
          <tbody id="errorBody"></tbody>
        </table>
      </div>
    </article>
  `;

  document.querySelectorAll("#error-monitor select").forEach((x) => x.addEventListener("change", fillErrorRows));
  fillErrorRows();
}

function fillErrorRows(): void {
  const appFilter = valueOf("errorAppFilter", "すべて");
  const severityFilter = valueOf("errorSeverityFilter", "すべて");
  const statusFilter = valueOf("errorStatusFilter", "すべて");
  (document.getElementById("errorBody") as HTMLElement).innerHTML = state.data.errors
    .filter((x) => appFilter === "すべて" || x.app === appFilter)
    .filter((x) => severityFilter === "すべて" || x.severity === severityFilter)
    .filter((x) => statusFilter === "すべて" || x.status === statusFilter)
    .map((x) => `<tr><td>${x.at}</td><td>${escapeHtml(x.id)}</td><td>${escapeHtml(x.app)}</td><td>${escapeHtml(x.summary)}</td><td><span class="badge ${severityClass(x.severity)}">${escapeHtml(x.severity)}</span></td><td>${escapeHtml(x.status)}</td><td>${x.firstSeenAt}</td><td>${x.lastSeenAt}</td><td>${escapeHtml(x.assignment)}</td></tr>`)
    .join("");
}

function rerenderAfterMutation(): void {
  renderModeBadge();
  renderDashboard();
  renderTenantView();
  renderContractLicense();
  renderTenantForm();
  renderUserList();
  renderUserForm();
  renderNotificationList();
  renderRoleAccess();
  renderResetForm();
  renderOperationLogs();
  renderLoginLogs();
  renderErrors();
}

function summaryCard(label: string, value: string): string {
  return `<div class="summary-card"><span>${label}</span><strong>${value}</strong></div>`;
}

function inputField(id: string, label: string, type: string, value: string): string {
  return `<label><span>${label}</span><input id="${id}" type="${type}" value="${escapeHtml(value)}" required></label>`;
}

function readOnlyField(label: string, value: string, note?: string): string {
  return `
    <label>
      <span>${label}</span>
      <input type="text" value="${escapeHtml(value)}" disabled>
      ${note ? `<small class="field-note">${escapeHtml(note)}</small>` : ""}
    </label>
  `;
}

function selectField(id: string, label: string, options: string[], selected: string): string {
  return `
    <label>
      <span>${label}</span>
      <select id="${id}">
        ${options.map((option) => `<option value="${escapeHtml(option)}" ${option === selected ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
      </select>
    </label>
  `;
}

function severityClass(severity: string): SeverityClass {
  if (severity === "Critical") {
    return "critical";
  }
  if (severity === "Warning") {
    return "warning";
  }
  return "info";
}

function valueOf(id: string, fallback = ""): string {
  const element = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | null;
  return element?.value ?? fallback;
}

function showFlash(message: string, isError = false): void {
  const flash = document.getElementById("flashMessage") as HTMLElement;
  flash.textContent = message;
  flash.classList.remove("hidden");
  flash.style.background = isError ? "#fcebea" : "#edf8f0";
  flash.style.color = isError ? "#a63c31" : "#28784d";
  flash.style.borderColor = isError ? "#efb4af" : "#b5dfc1";
  window.setTimeout(() => flash.classList.add("hidden"), 2800);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function nowLabel(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  const mi = String(now.getMinutes()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
}

function groupPermissionsByCategory(permissions: PermissionDto[]): Record<string, PermissionDto[]> {
  return permissions.reduce<Record<string, PermissionDto[]>>((acc, permission) => {
    if (!acc[permission.category]) {
      acc[permission.category] = [];
    }
    acc[permission.category].push(permission);
    return acc;
  }, {});
}

function withDerivedRoleCounts(data: BootstrapResponse) {
  return data.roles.map((role) => ({
    ...role,
    memberCount: data.users.filter((user) => user.role === role.name).length
  }));
}

function getSelectedNotification(): NotificationDto | undefined {
  return state.data.notifications.find((notification) => notification.id === uiState.selectedNotificationId)
    ?? state.data.notifications[0];
}

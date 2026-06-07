import "./style.css";
import {
  type ApiResult,
  type BootstrapResponse,
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

const viewMeta: Record<string, { title: string; description: string }> = {
  dashboard: { title: "ダッシュボード", description: "管理状況の要約を確認します。" },
  "tenant-view": { title: "テナント照会", description: "契約情報と利用状況を確認します。" },
  "tenant-edit": { title: "テナント編集", description: "テナント設定を更新します。" },
  "user-register": { title: "エンドユーザ登録", description: "新規利用者を登録します。" },
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
    <section id="tenant-edit" class="view"></section>
    <section id="user-register" class="view"></section>
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
  renderTenantForm();
  renderUserForm();
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
          ${data.notifications.map((n) => `<div class="list-item"><h4>${escapeHtml(n.title)}</h4><p>${escapeHtml(n.summary)}</p><small>${n.publishedAt} | ${n.app}</small></div>`).join("")}
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
        active: true
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
  renderTenantForm();
  renderUserForm();
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

(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&t(p)}).observe(document,{childList:!0,subtree:!0});function s(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(n){if(n.ep)return;n.ep=!0;const d=s(n);fetch(n.href,d)}})();const B={tenant:{id:"TEN-001",name:"サンプル商事株式会社",status:"利用中",contractDate:"2026-04-01",startDate:"2026-04-15",plan:"Enterprise",userLimit:200,currentUserCount:128,optionContracts:["加工モジュール","AI需要予測"],novaUsage:{appName:"NOVA",enabled:!0,statusText:"本番利用中"},gomUsage:{appName:"GOM",enabled:!0,statusText:"一部部門で利用中"},adminName:"田中 花子",adminEmail:"tenant-admin@example.com",updatedAt:"2026-06-07 18:20",updatedBy:"佐藤 次郎"},users:[{id:"USR-001",name:"山田 太郎",email:"yamada@example.com",department:"営業本部",title:"課長",apps:["NOVA"],role:"承認者",active:!0,lastLoginAt:"2026-06-07 17:55",createdAt:"2026-04-20",lastPasswordResetAt:"2026-05-28 09:10"},{id:"USR-002",name:"鈴木 一郎",email:"suzuki@example.com",department:"情報システム部",title:"主任",apps:["NOVA","GOM"],role:"管理者",active:!0,lastLoginAt:"2026-06-07 18:10",createdAt:"2026-04-15",lastPasswordResetAt:"2026-05-10 13:40"},{id:"USR-003",name:"高橋 美咲",email:"takahashi@example.com",department:"経理部",title:"担当",apps:["GOM"],role:"一般利用者",active:!1,lastLoginAt:"2026-05-30 08:42",createdAt:"2026-05-01",lastPasswordResetAt:"2026-06-07 16:48"}],roles:[{id:"ROLE-USER",name:"一般利用者",scope:"アプリ利用",description:"自分に許可されたアプリを利用し、参照中心の操作を行う基本ロール。",memberCount:1,permissionIds:["perm.app.login","perm.app.view","perm.profile.view"]},{id:"ROLE-APPROVER",name:"承認者",scope:"業務承認",description:"一般利用者権限に加え、承認対象データの確認と承認操作を実行するロール。",memberCount:1,permissionIds:["perm.app.login","perm.app.view","perm.profile.view","perm.workflow.approve","perm.report.export"]},{id:"ROLE-ADMIN",name:"管理者",scope:"テナント運用",description:"エンドユーザ登録、パスワードリセット、ログ参照などテナント内の運用管理を担うロール。",memberCount:1,permissionIds:["perm.app.login","perm.app.view","perm.profile.view","perm.user.register","perm.user.reset-password","perm.log.operation.view","perm.log.login.view","perm.error.view","perm.rbac.view"]}],permissions:[{id:"perm.app.login",category:"認証",name:"ログイン",description:"管理画面または対象アプリへログインする。"},{id:"perm.app.view",category:"アプリ利用",name:"業務データ参照",description:"許可されたアプリでデータを参照する。"},{id:"perm.profile.view",category:"プロフィール",name:"自分の利用情報参照",description:"自身のプロフィールや利用可能アプリを確認する。"},{id:"perm.workflow.approve",category:"承認",name:"承認実行",description:"申請や取引データの承認処理を実行する。"},{id:"perm.report.export",category:"帳票",name:"レポート出力",description:"レポートやCSVを出力する。"},{id:"perm.user.register",category:"ユーザ管理",name:"エンドユーザ登録",description:"テナント内ユーザを新規登録する。"},{id:"perm.user.reset-password",category:"ユーザ管理",name:"パスワードリセット",description:"対象ユーザの再設定案内を実行する。"},{id:"perm.log.operation.view",category:"監査",name:"操作ログ参照",description:"操作ログを検索、閲覧する。"},{id:"perm.log.login.view",category:"監査",name:"ログインログ参照",description:"ログイン履歴や失敗理由を確認する。"},{id:"perm.error.view",category:"監視",name:"エラー監視参照",description:"エラー一覧と重大度を確認する。"},{id:"perm.rbac.view",category:"権限管理",name:"ロール、権限定義参照",description:"RBAC の定義と割当状況を確認する。"}],notifications:[{id:"NTF-003",title:"新機能リリース: AI需要予測 初期設定ウィザード",type:"リリース",app:"NOVA",publishedAt:"2026-06-08 10:00",isRead:!1,summary:"AI需要予測の利用開始に向けて、対象部門、初期データ範囲、通知先を段階的に設定できるウィザードを追加しました。",importance:"高",body:"AI需要予測オプションを契約済みのテナント向けに、初期設定ウィザードを提供開始しました。対象部門、予測開始月、管理者通知条件を設定することで、利用開始準備を短時間で完了できます。",needsAction:!0,actionLabel:"設定を開始",wizardId:"ai-demand-forecast"},{id:"NTF-001",title:"新機能リリース: 承認フロー改善",type:"リリース",app:"NOVA",publishedAt:"2026-06-07 09:00",isRead:!1,summary:"NOVA に新しい承認ステップ設定機能を追加しました。",importance:"中",body:"承認段階を複数設定できるようになり、部門ごとの承認経路に対応しました。既存フローには影響せず、必要な場合のみ追加設定で利用できます。",needsAction:!1},{id:"NTF-002",title:"計画メンテナンスのお知らせ",type:"メンテナンス",app:"共通",publishedAt:"2026-06-06 15:30",isRead:!0,summary:"2026-06-10 22:00 からメンテナンスを実施します。",importance:"高",body:"共通基盤の保守作業に伴い、2026-06-10 22:00 から 2026-06-11 00:00 の間、一部機能が利用しづらくなる可能性があります。",needsAction:!0}],operationLogs:[{at:"2026-06-07 18:01",userName:"鈴木 一郎",app:"NOVA",feature:"エンドユーザ管理",eventName:"ユーザ登録",result:"成功",targetId:"USR-004"},{at:"2026-06-07 17:25",userName:"佐藤 次郎",app:"共通",feature:"テナント管理",eventName:"テナント更新",result:"成功",targetId:"TEN-001"},{at:"2026-06-07 16:48",userName:"鈴木 一郎",app:"GOM",feature:"認証",eventName:"パスワードリセット",result:"成功",targetId:"USR-003"}],loginLogs:[{at:"2026-06-07 18:10",userName:"鈴木 一郎",app:"NOVA",result:"成功",ipAddress:"10.10.1.15",failureReason:"-"},{at:"2026-06-07 17:55",userName:"山田 太郎",app:"GOM",result:"成功",ipAddress:"10.10.1.20",failureReason:"-"},{at:"2026-06-07 17:42",userName:"unknown@example.com",app:"NOVA",result:"失敗",ipAddress:"10.10.9.99",failureReason:"ユーザが存在しません"}],errors:[{id:"ERR-1001",at:"2026-06-07 17:40",app:"NOVA",summary:"バッチ連携処理でタイムアウトが発生",severity:"Critical",status:"発生中",firstSeenAt:"2026-06-07 16:55",lastSeenAt:"2026-06-07 17:40",assignment:"運用確認中"},{id:"ERR-2003",at:"2026-06-07 15:20",app:"GOM",summary:"一部通知送信の遅延",severity:"Warning",status:"未対応",firstSeenAt:"2026-06-07 14:50",lastSeenAt:"2026-06-07 15:20",assignment:"未着手"},{id:"ERR-3008",at:"2026-06-07 11:05",app:"共通",summary:"ログ集計ジョブの再試行完了",severity:"Info",status:"解消済み",firstSeenAt:"2026-06-07 10:48",lastSeenAt:"2026-06-07 11:05",assignment:"対応完了"}],masterData:{apps:["NOVA","GOM"],plans:["Standard","Professional","Enterprise"],tenantStatuses:["準備中","利用中","停止中"],departments:["営業本部","情報システム部","経理部","管理部"],roles:["一般利用者","承認者","管理者"],operationTypes:["ログイン","ログアウト","テナント更新","ユーザ登録","パスワードリセット","通知配信"],errorSeverities:["Critical","Warning","Info"],errorStatuses:["発生中","未対応","解消済み"]}},r={data:structuredClone(B),userName:"モック管理者",backendAvailable:!1},o={activeWizardId:"",step:1,department:"営業本部",startMonth:"2026-07",notifyAdmins:!0},f={selectedNotificationId:"NTF-003"},F={dashboard:{title:"ダッシュボード",description:"管理状況の要約を確認します。"},"tenant-view":{title:"テナント照会",description:"契約情報と利用状況を確認します。"},"contract-license":{title:"契約/ライセンス利用状況",description:"契約内容、上限数、オプション利用状況を確認します。"},"tenant-edit":{title:"テナント編集",description:"テナント設定を更新します。"},"user-list":{title:"エンドユーザ一覧",description:"登録済みユーザの状態、ロール、利用アプリを確認します。"},"user-register":{title:"エンドユーザ登録",description:"新規利用者を登録します。"},"notification-list":{title:"通知一覧",description:"ベンダ通知を一覧確認し、詳細や設定導線を確認します。"},"role-access":{title:"ロール/権限管理",description:"RBAC に基づくロール定義と権限割当を確認します。"},"password-reset":{title:"パスワードリセット",description:"対象ユーザに再設定案内を送ります。"},"operation-logs":{title:"操作ログ",description:"主要な管理操作を追跡します。"},"login-logs":{title:"ログインログ",description:"ログイン履歴と失敗理由を確認します。"},"error-monitor":{title:"エラー監視",description:"重大度別に異常を確認します。"}};q();function q(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
          ${Object.entries(F).map(([a,s],t)=>`<button data-view="${a}" class="nav-item ${t===0?"active":""}">${s.title}</button>`).join("")}
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
            <span id="currentUserName">${r.userName}</span>
            <button id="logoutButton" class="ghost">ログアウト</button>
          </div>
        </header>
        <section id="flashMessage" class="flash hidden"></section>
        <section id="viewsHost"></section>
        <section id="wizardModalHost"></section>
      </main>
    </div>
  `,W())}function W(){const e=document.getElementById("loginForm"),a=document.getElementById("logoutButton");e?.addEventListener("submit",async s=>{s.preventDefault(),r.userName=l("loginId","モック管理者"),await b(),G(),document.getElementById("currentUserName").textContent=r.userName,document.getElementById("loginView")?.classList.add("hidden"),document.getElementById("appShell")?.classList.remove("hidden")}),a?.addEventListener("click",()=>{document.getElementById("appShell")?.classList.add("hidden"),document.getElementById("loginView")?.classList.remove("hidden")})}async function b(){try{const e=await fetch("/api/bootstrap");if(!e.ok)throw new Error(`bootstrap failed: ${e.status}`);r.data=await e.json(),r.backendAvailable=!0}catch{r.data=structuredClone(B),r.backendAvailable=!1}}function G(){const e=document.getElementById("viewsHost");e.innerHTML=`
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
  `,document.querySelectorAll(".nav-item").forEach(a=>{a.onclick=()=>J(a.dataset.view??"dashboard")}),C(),w(),M(),T(),R(),z(),k(),O(),U(),D(),A(),H(),P()}function C(){const e=document.getElementById("backendModeBadge");e.textContent=r.backendAvailable?"C# API Connected":"Frontend Mock",e.className=`badge ${r.backendAvailable?"success":"info"}`}function J(e){document.querySelectorAll(".view").forEach(s=>s.classList.remove("active-view")),document.getElementById(e)?.classList.add("active-view"),document.querySelectorAll(".nav-item").forEach(s=>s.classList.remove("active")),document.querySelector(`[data-view="${e}"]`)?.classList.add("active");const a=F[e];document.getElementById("viewTitle").textContent=a.title,document.getElementById("viewDescription").textContent=a.description}function w(){const e=r.data,a=e.errors.filter(t=>t.severity==="Critical").length,s=e.notifications.filter(t=>!t.isRead).length;document.getElementById("dashboard").innerHTML=`
    <div class="hero">
      <div>
        <div class="eyebrow">OVERVIEW</div>
        <h3>${i(e.tenant.name)}</h3>
        <p>${i(`${e.tenant.status} | 契約プラン: ${e.tenant.plan} | 現在登録数: ${e.tenant.currentUserCount}`)}</p>
      </div>
      <div class="hero-stats">
        ${m("現在登録数",`${e.tenant.currentUserCount}`)}
        ${m("重大エラー",`${a}`)}
        ${m("未読通知",`${s}`)}
        ${m("直近ログイン",`${e.loginLogs.length}`)}
      </div>
    </div>
    <div class="grid two-col">
      <article class="panel">
        <div class="panel-header"><h3>直近通知</h3></div>
        <div class="list">
          ${e.notifications.map(K).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>重大エラー</h3></div>
        <div class="list">
          ${e.errors.filter(t=>t.severity==="Critical").map(t=>`<div class="list-item"><h4>${i(t.id)}</h4><p>${i(t.summary)}</p><small>${t.at} | ${t.app}</small></div>`).join("")}
        </div>
      </article>
    </div>
  `,document.querySelectorAll("[data-wizard-id]").forEach(t=>{t.onclick=()=>$(t.dataset.wizardId??""),t.onkeydown=n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),$(t.dataset.wizardId??""))}})}function M(){const e=r.data.tenant,a=[["テナントID",e.id],["テナント名",e.name],["契約ステータス",e.status],["ベンダとの契約日",e.contractDate],["テナント利用開始日",e.startDate],["契約プラン",e.plan],["ユーザ登録上限数",`${e.userLimit}`],["現在登録数",`${e.currentUserCount}`],["オプション契約一覧",e.optionContracts.join("、")],["最終更新",`${e.updatedAt} / ${e.updatedBy}`]],s=[["NOVA利用状況",e.novaUsage.statusText],["GOM利用状況",e.gomUsage.statusText],["管理者名",e.adminName],["管理者メールアドレス",e.adminEmail]];document.getElementById("tenant-view").innerHTML=`
    <div class="grid two-col tenant-sections">
      <article class="panel">
        <div class="panel-header"><h3>契約情報</h3></div>
        <div class="detail-grid">
          ${a.map(([t,n])=>`<div class="detail-item"><span>${t}</span><strong>${i(n)}</strong></div>`).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>利用情報</h3></div>
        <div class="detail-grid">
          ${s.map(([t,n])=>`<div class="detail-item"><span>${t}</span><strong>${i(n)}</strong></div>`).join("")}
        </div>
      </article>
    </div>
  `}function R(){const e=document.getElementById("tenant-edit");e.innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>テナント情報編集</h3></div>
      <div class="empty-state">
        <h4>現在、テナント側で編集できる項目はありません</h4>
        <p>契約情報および契約ステータスはベンダ側で管理します。利用情報も現時点では照会のみを対象とします。</p>
      </div>
    </article>
  `}function T(){const e=r.data.tenant,a=e.userLimit-e.currentUserCount,s=r.data.masterData.apps.map(t=>({app:t,users:r.data.users.filter(n=>n.apps.includes(t)).length,status:t==="NOVA"?e.novaUsage.statusText:e.gomUsage.statusText}));document.getElementById("contract-license").innerHTML=`
    <div class="grid contract-layout">
      <article class="panel">
        <div class="panel-header"><h3>契約サマリ</h3></div>
        <div class="hero-stats">
          ${m("契約プラン",e.plan)}
          ${m("上限数",`${e.userLimit}`)}
          ${m("現在登録数",`${e.currentUserCount}`)}
          ${m("残数",`${a}`)}
        </div>
        <div class="detail-grid contract-meta">
          <div class="detail-item"><span>契約ステータス</span><strong>${i(e.status)}</strong></div>
          <div class="detail-item"><span>ベンダとの契約日</span><strong>${e.contractDate}</strong></div>
          <div class="detail-item"><span>テナント利用開始日</span><strong>${e.startDate}</strong></div>
          <div class="detail-item"><span>超過見込み</span><strong>${a<=20?"注意":"問題なし"}</strong></div>
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>オプション契約</h3></div>
        <div class="list">
          ${e.optionContracts.map(t=>`
            <div class="list-item option-item">
              <h4>${i(t)}</h4>
              <p>${t==="AI需要予測"?"初期設定ウィザードを利用して導入準備を進められます。":"対象業務向けの追加機能として契約済みです。"}</p>
              <small>${t==="AI需要予測"?"初期設定: 実施中":"初期設定: 利用中"}</small>
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
            ${s.map(t=>`
              <tr>
                <td>${i(t.app)}</td>
                <td>${i(t.status)}</td>
                <td>${t.users}</td>
                <td>${Math.round(t.users/Math.max(e.currentUserCount,1)*100)}%</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `}function z(){const e=document.getElementById("user-list");e.innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>エンドユーザ一覧</h3></div>
      <div class="filters">
        ${c("userListAppFilter","利用アプリ",["すべて",...r.data.masterData.apps],"すべて")}
        ${c("userListRoleFilter","ロール",["すべて",...r.data.masterData.roles],"すべて")}
        ${c("userListStatusFilter","アカウント状態",["すべて","有効","無効"],"すべて")}
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
  `,document.querySelectorAll("#user-list select").forEach(a=>a.addEventListener("change",I)),I()}function I(){const e=l("userListAppFilter","すべて"),a=l("userListRoleFilter","すべて"),s=l("userListStatusFilter","すべて");document.getElementById("userListBody").innerHTML=r.data.users.filter(t=>e==="すべて"||t.apps.includes(e)).filter(t=>a==="すべて"||t.role===a).filter(t=>s==="すべて"||(s==="有効"?t.active:!t.active)).map(t=>`
      <tr>
        <td>${t.id}</td>
        <td>${i(t.name)}</td>
        <td>${i(t.email)}</td>
        <td>${i(t.department)}</td>
        <td>${i(t.apps.join(", "))}</td>
        <td>${i(t.role)}</td>
        <td><span class="badge ${t.active?"success":"warning"}">${t.active?"有効":"無効"}</span></td>
        <td>${t.lastLoginAt}</td>
        <td>${t.createdAt}</td>
        <td>${t.lastPasswordResetAt}</td>
      </tr>
    `).join("")}function k(){const e=r.data,a=document.getElementById("user-register");a.innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>エンドユーザ登録</h3></div>
      <form id="userForm" class="stacked-form two-up">
        ${g("userEmail","メールアドレス","email","")}
        ${g("userName","名前","text","")}
        ${c("userDepartment","部署等の所属",e.masterData.departments,e.masterData.departments[0])}
        ${g("userTitle","役職","text","")}
        ${c("userApp","利用アプリ",e.masterData.apps,e.masterData.apps[0])}
        ${c("userRole","権限、ロール",e.masterData.roles,e.masterData.roles[0])}
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
  `,document.getElementById("userForm").onsubmit=async s=>{s.preventDefault();const t={email:l("userEmail"),name:l("userName"),department:l("userDepartment"),title:l("userTitle"),apps:[l("userApp")],role:l("userRole"),sendNotification:l("userSendNotification")==="true"};if(r.backendAvailable){const d=await(await fetch("/api/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();r.data.users.unshift(d.data),u(d.message),await b()}else{const n={id:`USR-${String(r.data.users.length+1).padStart(3,"0")}`,name:t.name,email:t.email,department:t.department,title:t.title,apps:t.apps,role:t.role,active:!0,lastLoginAt:"-",createdAt:h().slice(0,10),lastPasswordResetAt:"-"};r.data.users.unshift(n),r.data.tenant.currentUserCount+=1,r.data.operationLogs.unshift({at:h(),userName:r.userName,app:t.apps[0],feature:"エンドユーザ管理",eventName:"ユーザ登録",result:"成功",targetId:n.id}),u("フロントモック上でユーザを登録しました。")}V(),document.getElementById("userForm").reset()}}function D(){const e=document.getElementById("password-reset");e.innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>パスワードリセット</h3></div>
      <form id="resetForm" class="stacked-form">
        <label>
          <span>対象ユーザ</span>
          <select id="resetUserSelect">${r.data.users.map(t=>`<option value="${t.id}">${i(t.name)} (${i(t.email)})</option>`).join("")}</select>
        </label>
        <div id="resetUserCard" class="mini-card"></div>
        <label class="checkbox">
          <input id="resetConfirm" type="checkbox">
          <span>再設定案内メールを送る前提で実行する</span>
        </label>
        <div class="form-actions"><button type="submit" class="primary">リセット実行</button></div>
      </form>
    </article>
  `;const a=document.getElementById("resetUserSelect"),s=()=>{const t=r.data.users.find(n=>n.id===a.value)??r.data.users[0];t&&(document.getElementById("resetUserCard").innerHTML=`
      <h4>${i(t.name)}</h4>
      <p>${i(t.email)}</p>
      <p>${i(t.department)} / ${i(t.role)}</p>
      <p>利用アプリ: ${i(t.apps.join(", "))}</p>
    `)};a.onchange=s,s(),document.getElementById("resetForm").onsubmit=async t=>{if(t.preventDefault(),!document.getElementById("resetConfirm").checked){u("確認チェックを付けてください。",!0);return}if(r.backendAvailable){const p=await(await fetch("/api/users/password-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:a.value})})).json();u(p.message),await b()}else{const d=r.data.users.find(p=>p.id===a.value);if(!d){u("対象ユーザが見つかりません。",!0);return}r.data.operationLogs.unshift({at:h(),userName:r.userName,app:d.apps[0]??"共通",feature:"認証",eventName:"パスワードリセット",result:"成功",targetId:d.id}),u("フロントモック上でパスワードリセットを受け付けました。")}V()}}function K(e){return`
    <div class="list-item notification-card${e.wizardId?" notification-card-clickable":""}" ${e.wizardId?`data-wizard-id="${i(e.wizardId)}" role="button" tabindex="0"`:""}>
      <div class="notification-head">
        <h4>${i(e.title)}</h4>
        <span class="badge ${e.isRead?"info":"success"}">${e.isRead?"既読":"未読"}</span>
      </div>
      <p>${i(e.summary)}</p>
      <small>${e.publishedAt} | ${e.app}</small>
      ${e.actionLabel&&e.wizardId?`
        <div class="notification-actions">
          <span class="inline-action">${i(e.actionLabel)}</span>
        </div>
      `:""}
    </div>
  `}function O(){const e=document.getElementById("notification-list"),a=x();e.innerHTML=`
    <div class="grid notification-layout">
      <article class="panel">
        <div class="panel-header"><h3>通知一覧</h3></div>
        <div class="filters">
          ${c("notificationTypeFilter","通知種別",["すべて","リリース","メンテナンス"],"すべて")}
          ${c("notificationReadFilter","既読状態",["すべて","未読","既読"],"すべて")}
        </div>
        <div class="list" id="notificationListCards"></div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>通知詳細</h3></div>
        <div id="notificationDetailPanel">
          ${a?j(a):'<div class="empty-state"><h4>通知を選択してください</h4><p>左側の通知一覧から確認したい通知を選ぶと詳細が表示されます。</p></div>'}
        </div>
      </article>
    </div>
  `,document.querySelectorAll("#notification-list select").forEach(s=>s.addEventListener("change",y)),y()}function y(){const e=l("notificationTypeFilter","すべて"),a=l("notificationReadFilter","すべて"),s=document.getElementById("notificationListCards");s.innerHTML=r.data.notifications.filter(t=>e==="すべて"||t.type===e).filter(t=>a==="すべて"||(a==="未読"?!t.isRead:t.isRead)).map(t=>`
      <div class="list-item notification-row ${t.id===f.selectedNotificationId?"selected-row":""}" data-notification-id="${t.id}">
        <div class="notification-head">
          <h4>${i(t.title)}</h4>
          <span class="badge ${t.isRead?"info":"success"}">${t.isRead?"既読":"未読"}</span>
        </div>
        <p>${i(t.summary)}</p>
        <small>${t.publishedAt} | ${t.type} | ${t.app}</small>
      </div>
    `).join(""),document.querySelectorAll("[data-notification-id]").forEach(t=>{t.onclick=()=>{f.selectedNotificationId=t.dataset.notificationId??"",Y(),y()}})}function Y(){const e=x();document.getElementById("notificationDetailPanel").innerHTML=e?j(e):'<div class="empty-state"><h4>通知を選択してください</h4><p>左側の通知一覧から確認したい通知を選ぶと詳細が表示されます。</p></div>';const a=document.getElementById("notificationWizardButton");a&&(a.onclick=()=>$(a.dataset.wizardId??""))}function j(e){return`
    <div class="stacked-form">
      <div class="detail-grid">
        <div class="detail-item"><span>通知種別</span><strong>${i(e.type)}</strong></div>
        <div class="detail-item"><span>対象アプリ</span><strong>${i(e.app)}</strong></div>
        <div class="detail-item"><span>配信日時</span><strong>${e.publishedAt}</strong></div>
        <div class="detail-item"><span>重要度</span><strong>${i(e.importance??"-")}</strong></div>
      </div>
      <div class="detail-item detail-block">
        <span>通知概要</span>
        <strong>${i(e.summary)}</strong>
      </div>
      <div class="detail-item detail-block">
        <span>詳細内容</span>
        <p>${i(e.body??e.summary)}</p>
      </div>
      <div class="detail-item detail-block">
        <span>対応要否</span>
        <strong>${e.needsAction?"要対応":"確認のみ"}</strong>
      </div>
      ${e.wizardId&&e.actionLabel?`
        <div class="form-actions">
          <button type="button" class="primary" id="notificationWizardButton" data-wizard-id="${i(e.wizardId)}">${i(e.actionLabel)}</button>
        </div>
      `:""}
    </div>
  `}function $(e){e&&(o.activeWizardId=e,o.step=1,o.department="営業本部",o.startMonth="2026-07",o.notifyAdmins=!0,v())}function L(){o.activeWizardId="",v()}function v(){const e=document.getElementById("wizardModalHost");if(!o.activeWizardId){e.innerHTML="";return}if(e.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-modal">
        <div class="panel-header">
          <div>
            <h3>AI需要予測 初期設定ウィザード</h3>
            <p class="subtle">ステップ ${o.step} / 3</p>
          </div>
          <button type="button" class="ghost" id="wizardCloseButton">閉じる</button>
        </div>
        ${Q()}
      </div>
    </div>
  `,document.getElementById("wizardCloseButton").onclick=L,o.step===1){document.getElementById("wizardDepartment").onchange=a=>{o.department=a.target.value},document.getElementById("wizardNextStep").onclick=()=>{o.step=2,v()};return}if(o.step===2){document.getElementById("wizardStartMonth").onchange=a=>{o.startMonth=a.target.value},document.getElementById("wizardNotifyAdmins").onchange=a=>{o.notifyAdmins=a.target.checked},document.getElementById("wizardPrevStep").onclick=()=>{o.step=1,v()},document.getElementById("wizardNextStep").onclick=()=>{o.step=3,v()};return}document.getElementById("wizardPrevStep").onclick=()=>{o.step=2,v()},document.getElementById("wizardFinish").onclick=()=>{r.data.operationLogs.unshift({at:h(),userName:r.userName,app:"NOVA",feature:"通知",eventName:"AI需要予測 初期設定ウィザード完了",result:"成功",targetId:"NTF-003"});const a=r.data.notifications.find(s=>s.id==="NTF-003");a&&(a.isRead=!0),u("AI需要予測の初期設定ウィザードを完了しました。"),L(),w(),A()}}function Q(){return o.step===1?`
      <div class="wizard-body stacked-form">
        <div class="wizard-summary">対象部門と利用開始アプリを選択します。</div>
        <label>
          <span>対象部門</span>
          <select id="wizardDepartment">
            ${r.data.masterData.departments.map(e=>`<option value="${i(e)}" ${e===o.department?"selected":""}>${i(e)}</option>`).join("")}
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
    `:o.step===2?`
      <div class="wizard-body stacked-form">
        <div class="wizard-summary">初期データの適用期間と通知条件を設定します。</div>
        <label>
          <span>予測開始月</span>
          <input id="wizardStartMonth" type="month" value="${i(o.startMonth)}">
        </label>
        <label class="checkbox">
          <input id="wizardNotifyAdmins" type="checkbox" ${o.notifyAdmins?"checked":""}>
          <span>設定完了時にテナント管理者へ通知する</span>
        </label>
        <div class="form-actions">
          <button type="button" class="ghost" id="wizardPrevStep">戻る</button>
          <button type="button" class="primary" id="wizardNextStep">確認へ</button>
        </div>
      </div>
    `:`
    <div class="wizard-body stacked-form">
      <div class="wizard-summary">設定内容を確認して完了します。</div>
      <div class="detail-grid">
        <div class="detail-item"><span>対象部門</span><strong>${i(o.department)}</strong></div>
        <div class="detail-item"><span>対象機能</span><strong>AI需要予測</strong></div>
        <div class="detail-item"><span>予測開始月</span><strong>${i(o.startMonth)}</strong></div>
        <div class="detail-item"><span>管理者通知</span><strong>${o.notifyAdmins?"送信する":"送信しない"}</strong></div>
      </div>
      <div class="form-actions">
        <button type="button" class="ghost" id="wizardPrevStep">戻る</button>
        <button type="button" class="primary" id="wizardFinish">設定を完了</button>
      </div>
    </div>
  `}function U(){const e=document.getElementById("role-access"),a=_(r.data),s=r.data.permissions,t=Z(s);e.innerHTML=`
    <div class="grid two-col rbac-top">
      <article class="panel">
        <div class="panel-header"><h3>ロール定義</h3></div>
        <div class="list role-list">
          ${a.map(n=>`
            <div class="list-item role-card">
              <div class="role-card-head">
                <div>
                  <h4>${i(n.name)}</h4>
                  <small>${i(n.scope)}</small>
                </div>
                <span class="badge info">${n.memberCount}名</span>
              </div>
              <p>${i(n.description)}</p>
              <small>付与権限数: ${n.permissionIds.length}</small>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>権限カタログ</h3></div>
        <div class="permission-groups">
          ${Object.entries(t).map(([n,d])=>`
            <section class="permission-group">
              <h4>${i(n)}</h4>
              <div class="permission-items">
                ${d.map(p=>`
                  <div class="permission-item">
                    <strong>${i(p.name)}</strong>
                    <p>${i(p.description)}</p>
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
              ${a.map(n=>`<th>${i(n.name)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${s.map(n=>`
              <tr>
                <td>
                  <strong>${i(n.name)}</strong>
                  <div class="table-subtext">${i(n.category)}</div>
                </td>
                ${a.map(d=>`
                  <td class="matrix-cell">
                    ${d.permissionIds.includes(n.id)?'<span class="matrix-check allowed">●</span>':'<span class="matrix-check denied">-</span>'}
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
            ${r.data.users.map(n=>`
              <tr>
                <td>${i(n.name)}</td>
                <td>${i(n.email)}</td>
                <td>${i(n.department)}</td>
                <td>${i(n.role)}</td>
                <td>${i(n.apps.join(", "))}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `}function A(){document.getElementById("operation-logs").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>操作ログ</h3></div>
      <div class="filters">
        ${c("operationAppFilter","対象アプリ",["すべて",...r.data.masterData.apps,"共通"],"すべて")}
        ${c("operationTypeFilter","イベント種別",["すべて",...r.data.masterData.operationTypes],"すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>操作日時</th><th>操作者</th><th>対象アプリ</th><th>対象機能</th><th>イベント</th><th>結果</th><th>対象ID</th></tr></thead>
          <tbody id="operationLogsBody"></tbody>
        </table>
      </div>
    </article>
  `,document.querySelectorAll("#operation-logs select").forEach(e=>e.addEventListener("change",E)),E()}function E(){const e=l("operationAppFilter","すべて"),a=l("operationTypeFilter","すべて");document.getElementById("operationLogsBody").innerHTML=r.data.operationLogs.filter(s=>e==="すべて"||s.app===e).filter(s=>a==="すべて"||s.eventName===a).map(s=>`<tr><td>${s.at}</td><td>${i(s.userName)}</td><td>${i(s.app)}</td><td>${i(s.feature)}</td><td>${i(s.eventName)}</td><td>${i(s.result)}</td><td>${i(s.targetId)}</td></tr>`).join("")}function H(){document.getElementById("login-logs").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>ログインログ</h3></div>
      <div class="filters">
        ${c("loginAppFilter","対象アプリ",["すべて",...r.data.masterData.apps],"すべて")}
        ${c("loginResultFilter","結果",["すべて","成功","失敗"],"すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>ログイン日時</th><th>ユーザ名</th><th>対象アプリ</th><th>結果</th><th>IPアドレス</th><th>失敗理由</th></tr></thead>
          <tbody id="loginLogsBody"></tbody>
        </table>
      </div>
    </article>
  `,document.querySelectorAll("#login-logs select").forEach(e=>e.addEventListener("change",N)),N()}function N(){const e=l("loginAppFilter","すべて"),a=l("loginResultFilter","すべて");document.getElementById("loginLogsBody").innerHTML=r.data.loginLogs.filter(s=>e==="すべて"||s.app===e).filter(s=>a==="すべて"||s.result===a).map(s=>`<tr><td>${s.at}</td><td>${i(s.userName)}</td><td>${i(s.app)}</td><td>${i(s.result)}</td><td>${i(s.ipAddress)}</td><td>${i(s.failureReason)}</td></tr>`).join("")}function P(){document.getElementById("error-monitor").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>エラー監視</h3></div>
      <div class="filters">
        ${c("errorAppFilter","対象アプリ",["すべて",...r.data.masterData.apps,"共通"],"すべて")}
        ${c("errorSeverityFilter","重大度",["すべて",...r.data.masterData.errorSeverities],"すべて")}
        ${c("errorStatusFilter","対応状況",["すべて",...r.data.masterData.errorStatuses],"すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>発生日時</th><th>エラーID</th><th>対象アプリ</th><th>概要</th><th>重大度</th><th>対応状況</th><th>初回発生</th><th>最新発生</th><th>担当状況</th></tr></thead>
          <tbody id="errorBody"></tbody>
        </table>
      </div>
    </article>
  `,document.querySelectorAll("#error-monitor select").forEach(e=>e.addEventListener("change",S)),S()}function S(){const e=l("errorAppFilter","すべて"),a=l("errorSeverityFilter","すべて"),s=l("errorStatusFilter","すべて");document.getElementById("errorBody").innerHTML=r.data.errors.filter(t=>e==="すべて"||t.app===e).filter(t=>a==="すべて"||t.severity===a).filter(t=>s==="すべて"||t.status===s).map(t=>`<tr><td>${t.at}</td><td>${i(t.id)}</td><td>${i(t.app)}</td><td>${i(t.summary)}</td><td><span class="badge ${X(t.severity)}">${i(t.severity)}</span></td><td>${i(t.status)}</td><td>${t.firstSeenAt}</td><td>${t.lastSeenAt}</td><td>${i(t.assignment)}</td></tr>`).join("")}function V(){C(),w(),M(),T(),R(),z(),k(),O(),U(),D(),A(),H(),P()}function m(e,a){return`<div class="summary-card"><span>${e}</span><strong>${a}</strong></div>`}function g(e,a,s,t){return`<label><span>${a}</span><input id="${e}" type="${s}" value="${i(t)}" required></label>`}function c(e,a,s,t){return`
    <label>
      <span>${a}</span>
      <select id="${e}">
        ${s.map(n=>`<option value="${i(n)}" ${n===t?"selected":""}>${i(n)}</option>`).join("")}
      </select>
    </label>
  `}function X(e){return e==="Critical"?"critical":e==="Warning"?"warning":"info"}function l(e,a=""){return document.getElementById(e)?.value??a}function u(e,a=!1){const s=document.getElementById("flashMessage");s.textContent=e,s.classList.remove("hidden"),s.style.background=a?"#fcebea":"#edf8f0",s.style.color=a?"#a63c31":"#28784d",s.style.borderColor=a?"#efb4af":"#b5dfc1",window.setTimeout(()=>s.classList.add("hidden"),2800)}function i(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function h(){const e=new Date,a=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0"),n=String(e.getHours()).padStart(2,"0"),d=String(e.getMinutes()).padStart(2,"0");return`${a}-${s}-${t} ${n}:${d}`}function Z(e){return e.reduce((a,s)=>(a[s.category]||(a[s.category]=[]),a[s.category].push(s),a),{})}function _(e){return e.roles.map(a=>({...a,memberCount:e.users.filter(s=>s.role===a.name).length}))}function x(){return r.data.notifications.find(e=>e.id===f.selectedNotificationId)??r.data.notifications[0]}

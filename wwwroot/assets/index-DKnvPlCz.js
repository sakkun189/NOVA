(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const o of d.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(i){if(i.ep)return;i.ep=!0;const d=a(i);fetch(i.href,d)}})();const M={tenant:{id:"TEN-001",name:"サンプル商事株式会社",imageUrl:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 280'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%231f6f78'/%3E%3Cstop offset='1' stop-color='%23d9a441'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='480' height='280' rx='28' fill='url(%23g)'/%3E%3Ccircle cx='390' cy='70' r='46' fill='rgba(255,255,255,0.18)'/%3E%3Cpath d='M0 210c58-26 104-39 138-39 61 0 103 39 164 39 46 0 105-16 178-49v119H0Z' fill='rgba(255,255,255,0.16)'/%3E%3Ctext x='40' y='126' fill='white' font-size='28' font-family='Segoe UI,sans-serif' font-weight='700'%3ETenant Brand Image%3C/text%3E%3Ctext x='40' y='162' fill='rgba(255,255,255,0.88)' font-size='16' font-family='Segoe UI,sans-serif'%3ESample tenant visual for mock screen%3C/text%3E%3C/svg%3E",status:"利用中",contractDate:"2026-04-01",startDate:"2026-04-15",plan:"Enterprise",userLimit:200,currentUserCount:128,optionContracts:["加工モジュール","AI需要予測"],novaUsage:{appName:"NOVA",enabled:!0,statusText:"本番利用中"},gomUsage:{appName:"GOM",enabled:!0,statusText:"一部部門で利用中"},adminName:"田中 花子",adminEmail:"tenant-admin@example.com",updatedAt:"2026-06-07 18:20",updatedBy:"佐藤 次郎"},users:[{id:"USR-001",name:"山田 太郎",email:"yamada@example.com",department:"営業本部",title:"課長",apps:["NOVA"],role:"承認者",active:!0,lastLoginAt:"2026-06-07 17:55",createdAt:"2026-04-20",lastPasswordResetAt:"2026-05-28 09:10"},{id:"USR-002",name:"鈴木 一郎",email:"suzuki@example.com",department:"情報システム部",title:"主任",apps:["NOVA","GOM"],role:"管理者",active:!0,lastLoginAt:"2026-06-07 18:10",createdAt:"2026-04-15",lastPasswordResetAt:"2026-05-10 13:40"},{id:"USR-003",name:"高橋 美咲",email:"takahashi@example.com",department:"経理部",title:"担当",apps:["GOM"],role:"一般利用者",active:!1,lastLoginAt:"2026-05-30 08:42",createdAt:"2026-05-01",lastPasswordResetAt:"2026-06-07 16:48"}],roles:[{id:"ROLE-USER",name:"一般利用者",scope:"アプリ利用",description:"自分に許可されたアプリを利用し、参照中心の操作を行う基本ロール。",memberCount:1,permissionIds:["perm.app.login","perm.app.view","perm.profile.view"]},{id:"ROLE-APPROVER",name:"承認者",scope:"業務承認",description:"一般利用者権限に加え、承認対象データの確認と承認操作を実行するロール。",memberCount:1,permissionIds:["perm.app.login","perm.app.view","perm.profile.view","perm.workflow.approve","perm.report.export"]},{id:"ROLE-ADMIN",name:"管理者",scope:"テナント運用",description:"エンドユーザ登録、パスワードリセット、ログ参照などテナント内の運用管理を担うロール。",memberCount:1,permissionIds:["perm.app.login","perm.app.view","perm.profile.view","perm.user.register","perm.user.reset-password","perm.log.operation.view","perm.log.login.view","perm.error.view","perm.rbac.view"]}],permissions:[{id:"perm.app.login",category:"認証",name:"ログイン",description:"管理画面または対象アプリへログインする。"},{id:"perm.app.view",category:"アプリ利用",name:"業務データ参照",description:"許可されたアプリでデータを参照する。"},{id:"perm.profile.view",category:"プロフィール",name:"自分の利用情報参照",description:"自身のプロフィールや利用可能アプリを確認する。"},{id:"perm.workflow.approve",category:"承認",name:"承認実行",description:"申請や取引データの承認処理を実行する。"},{id:"perm.report.export",category:"帳票",name:"レポート出力",description:"レポートやCSVを出力する。"},{id:"perm.user.register",category:"ユーザ管理",name:"エンドユーザ登録",description:"テナント内ユーザを新規登録する。"},{id:"perm.user.reset-password",category:"ユーザ管理",name:"パスワードリセット",description:"対象ユーザの再設定案内を実行する。"},{id:"perm.log.operation.view",category:"監査",name:"操作ログ参照",description:"操作ログを検索、閲覧する。"},{id:"perm.log.login.view",category:"監査",name:"ログインログ参照",description:"ログイン履歴や失敗理由を確認する。"},{id:"perm.error.view",category:"監視",name:"エラー監視参照",description:"エラー一覧と重大度を確認する。"},{id:"perm.rbac.view",category:"権限管理",name:"ロール、権限定義参照",description:"RBAC の定義と割当状況を確認する。"}],notifications:[{id:"NTF-003",title:"新機能リリース: AI需要予測 初期設定ウィザード",type:"リリース",app:"NOVA",publishedAt:"2026-06-08 10:00",isRead:!1,summary:"AI需要予測の利用開始に向けて、対象部門、初期データ範囲、通知先を段階的に設定できるウィザードを追加しました。",importance:"高",body:"AI需要予測オプションを契約済みのテナント向けに、初期設定ウィザードを提供開始しました。対象部門、予測開始月、管理者通知条件を設定することで、利用開始準備を短時間で完了できます。",needsAction:!0,actionLabel:"設定を開始",wizardId:"ai-demand-forecast"},{id:"NTF-001",title:"新機能リリース: 承認フロー改善",type:"リリース",app:"NOVA",publishedAt:"2026-06-07 09:00",isRead:!1,summary:"NOVA に新しい承認ステップ設定機能を追加しました。",importance:"中",body:"承認段階を複数設定できるようになり、部門ごとの承認経路に対応しました。既存フローには影響せず、必要な場合のみ追加設定で利用できます。",needsAction:!1},{id:"NTF-002",title:"計画メンテナンスのお知らせ",type:"メンテナンス",app:"共通",publishedAt:"2026-06-06 15:30",isRead:!0,summary:"2026-06-10 22:00 からメンテナンスを実施します。",importance:"高",body:"共通基盤の保守作業に伴い、2026-06-10 22:00 から 2026-06-11 00:00 の間、一部機能が利用しづらくなる可能性があります。",needsAction:!0}],operationLogs:[{at:"2026-06-07 18:01",userName:"鈴木 一郎",screenName:"エンドユーザ登録",actionName:"ユーザ登録",result:"成功",targetId:"USR-004",detail:"営業本部の利用者を新規登録"},{at:"2026-06-07 17:25",userName:"佐藤 次郎",screenName:"テナント編集",actionName:"テナント更新",result:"成功",targetId:"TEN-001",detail:"テナント名とイメージ画像を更新"},{at:"2026-06-07 16:48",userName:"鈴木 一郎",screenName:"パスワードリセット",actionName:"パスワードリセット",result:"成功",targetId:"USR-003",detail:"対象ユーザへ再設定案内を送信"}],loginLogs:[{at:"2026-06-07 18:10",userName:"鈴木 一郎",result:"成功",ipAddress:"10.10.1.15",authMethod:"ID/パスワード",clientName:"Chrome / Windows",failureReason:"-"},{at:"2026-06-07 17:55",userName:"山田 太郎",result:"成功",ipAddress:"10.10.1.20",authMethod:"SSO",clientName:"Edge / Windows",failureReason:"-"},{at:"2026-06-07 17:42",userName:"unknown@example.com",result:"失敗",ipAddress:"10.10.9.99",authMethod:"ID/パスワード",clientName:"Chrome / macOS",failureReason:"ユーザが存在しません"}],errors:[{id:"ERR-1001",at:"2026-06-07 17:40",app:"NOVA",summary:"バッチ連携処理でタイムアウトが発生",severity:"Critical",status:"発生中",firstSeenAt:"2026-06-07 16:55",lastSeenAt:"2026-06-07 17:40",assignment:"運用確認中"},{id:"ERR-2003",at:"2026-06-07 15:20",app:"GOM",summary:"一部通知送信の遅延",severity:"Warning",status:"未対応",firstSeenAt:"2026-06-07 14:50",lastSeenAt:"2026-06-07 15:20",assignment:"未着手"},{id:"ERR-3008",at:"2026-06-07 11:05",app:"共通",summary:"ログ集計ジョブの再試行完了",severity:"Info",status:"解消済み",firstSeenAt:"2026-06-07 10:48",lastSeenAt:"2026-06-07 11:05",assignment:"対応完了"}],masterData:{apps:["NOVA","GOM"],plans:["Standard","Professional","Enterprise"],tenantStatuses:["準備中","利用中","停止中"],departments:["営業本部","情報システム部","経理部","管理部"],roles:["一般利用者","承認者","管理者"],operationTypes:["ログイン","ログアウト","テナント更新","ユーザ登録","パスワードリセット","通知配信"],managementScreens:["ダッシュボード","テナント照会","テナント編集","エンドユーザ登録","パスワードリセット","通知一覧"],errorSeverities:["Critical","Warning","Info"],errorStatuses:["発生中","未対応","解消済み"]}},r={data:structuredClone(M),userName:"モック管理者",backendAvailable:!1},l={activeWizardId:"",step:1,department:"営業本部",startMonth:"2026-07",notifyAdmins:!0},b={selectedNotificationId:"NTF-003"},k={dashboard:{title:"ダッシュボード",description:"管理状況の要約を確認します。"},"tenant-view":{title:"テナント照会",description:"契約情報、ライセンス利用状況、テナント基本情報をまとめて確認します。"},"tenant-edit":{title:"テナント編集",description:"テナント設定を更新します。"},"user-list":{title:"エンドユーザ一覧",description:"登録済みユーザの状態、ロール、利用アプリを確認します。"},"user-register":{title:"エンドユーザ登録",description:"新規利用者を登録します。"},"notification-list":{title:"通知一覧",description:"ベンダ通知を一覧確認し、詳細や設定導線を確認します。"},"role-access":{title:"ロール/権限管理",description:"RBAC に基づくロール定義と権限割当を確認します。"},"password-reset":{title:"パスワードリセット",description:"対象ユーザに再設定案内を送ります。"},"operation-logs":{title:"操作ログ",description:"主要な管理操作を追跡します。"},"login-logs":{title:"ログインログ",description:"ログイン履歴と失敗理由を確認します。"},"error-monitor":{title:"エラー監視",description:"重大度別に異常を確認します。"}};K();function K(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
          ${Object.entries(k).map(([s,a],t)=>`<button data-view="${s}" class="nav-item ${t===0?"active":""}">${a.title}</button>`).join("")}
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
  `,Q())}function Q(){const e=document.getElementById("loginForm"),s=document.getElementById("logoutButton");e?.addEventListener("submit",async a=>{a.preventDefault(),r.userName=c("loginId","モック管理者"),await N(),r.data.loginLogs.unshift({at:v(),userName:r.userName,result:"成功",ipAddress:"127.0.0.1",authMethod:"ID/パスワード",clientName:"Local Browser / Mock",failureReason:"-"}),r.data.operationLogs.unshift({at:v(),userName:r.userName,screenName:"ログイン",actionName:"ログイン",result:"成功",targetId:"SESSION-CURRENT",detail:"テナント管理画面へログイン"}),Y(),document.getElementById("currentUserName").textContent=r.userName,document.getElementById("loginView")?.classList.add("hidden"),document.getElementById("appShell")?.classList.remove("hidden")}),s?.addEventListener("click",()=>{r.data.operationLogs.unshift({at:v(),userName:r.userName,screenName:"ログアウト",actionName:"ログアウト",result:"成功",targetId:"SESSION-CURRENT",detail:"テナント管理画面からログアウト"}),document.getElementById("appShell")?.classList.add("hidden"),document.getElementById("loginView")?.classList.remove("hidden")})}async function N(){try{const e=await fetch("/api/bootstrap");if(!e.ok)throw new Error(`bootstrap failed: ${e.status}`);r.data=await e.json(),r.backendAvailable=!0}catch{r.data=structuredClone(M),r.backendAvailable=!1}}function Y(){const e=document.getElementById("viewsHost");e.innerHTML=`
    <section id="dashboard" class="view active-view"></section>
    <section id="tenant-view" class="view"></section>
    <section id="tenant-edit" class="view"></section>
    <section id="user-list" class="view"></section>
    <section id="user-register" class="view"></section>
    <section id="notification-list" class="view"></section>
    <section id="role-access" class="view"></section>
    <section id="password-reset" class="view"></section>
    <section id="operation-logs" class="view"></section>
    <section id="login-logs" class="view"></section>
    <section id="error-monitor" class="view"></section>
  `,document.querySelectorAll(".nav-item").forEach(s=>{s.onclick=()=>Z(s.dataset.view??"dashboard")}),U(),A(),T(),z(),D(),O(),j(),V(),x(),E(),H(),q()}function U(){const e=document.getElementById("backendModeBadge");e.textContent=r.backendAvailable?"C# API Connected":"Frontend Mock",e.className=`badge ${r.backendAvailable?"success":"info"}`}function Z(e){document.querySelectorAll(".view").forEach(a=>a.classList.remove("active-view")),document.getElementById(e)?.classList.add("active-view"),document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active")),document.querySelector(`[data-view="${e}"]`)?.classList.add("active");const s=k[e];document.getElementById("viewTitle").textContent=s.title,document.getElementById("viewDescription").textContent=s.description}function A(){const e=r.data,s=e.errors.filter(i=>i.severity==="Critical").length,a=e.notifications.filter(i=>!i.isRead).length,t=de();document.getElementById("dashboard").innerHTML=`
    <div class="hero">
      <div class="hero-copy">
        <div class="eyebrow">OVERVIEW</div>
        <h3>${n(e.tenant.name)}</h3>
        <p>${n(`${e.tenant.status} | 契約プラン: ${e.tenant.plan} | 現在登録数: ${e.tenant.currentUserCount}`)}</p>
        <div class="hero-stats hero-stats-inline">
          ${h("現在ログイン者数",`${t}`)}
          ${h("現在登録数",`${e.tenant.currentUserCount}`)}
          ${h("重大エラー",`${s}`)}
          ${h("未読通知",`${a}`)}
          ${h("直近ログイン",`${e.loginLogs.length}`)}
        </div>
      </div>
    </div>
    <div class="grid two-col">
      <article class="panel">
        <div class="panel-header"><h3>直近通知</h3></div>
        <div class="list">
          ${e.notifications.map(X).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>重大エラー</h3></div>
        <div class="list">
          ${e.errors.filter(i=>i.severity==="Critical").map(i=>`<div class="list-item"><h4>${n(i.id)}</h4><p>${n(i.summary)}</p><small>${i.at} | ${i.app}</small></div>`).join("")}
        </div>
      </article>
    </div>
  `,document.querySelectorAll("[data-wizard-id]").forEach(i=>{i.onclick=()=>I(i.dataset.wizardId??""),i.onkeydown=d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),I(i.dataset.wizardId??""))}})}function T(){const e=r.data.tenant,s=e.userLimit-e.currentUserCount,a=[["テナントID",e.id],["テナント名",e.name],["契約ステータス",e.status],["ベンダとの契約日",e.contractDate],["テナント利用開始日",e.startDate],["契約プラン",e.plan],["ユーザ登録上限数",`${e.userLimit}`],["現在登録数",`${e.currentUserCount}`],["オプション契約一覧",e.optionContracts.join("、")],["最終更新",`${e.updatedAt} / ${e.updatedBy}`]],t=[["NOVA利用状況",e.novaUsage.statusText],["GOM利用状況",e.gomUsage.statusText],["管理者名",e.adminName],["管理者メールアドレス",e.adminEmail]],i=r.data.masterData.apps.map(d=>({app:d,users:r.data.users.filter(o=>o.apps.includes(d)).length,status:d==="NOVA"?e.novaUsage.statusText:e.gomUsage.statusText}));document.getElementById("tenant-view").innerHTML=`
    <article class="panel tenant-overview">
      <div class="tenant-overview-hero">
        <img src="${n(e.imageUrl)}" alt="${n(e.name)} のイメージ画像" class="tenant-image">
        <div class="tenant-overview-copy">
          <div class="eyebrow">Tenant Overview</div>
          <h3>${n(e.name)}</h3>
          <p>${n(`${e.status} | 契約プラン: ${e.plan} | 現在登録数: ${e.currentUserCount}`)}</p>
          <div class="hero-stats compact">
            ${h("契約プラン",e.plan)}
            ${h("上限数",`${e.userLimit}`)}
            ${h("現在登録数",`${e.currentUserCount}`)}
            ${h("残数",`${s}`)}
          </div>
        </div>
      </div>
    </article>
    <div class="grid two-col tenant-sections">
      <article class="panel">
        <div class="panel-header"><h3>契約情報</h3></div>
        <div class="detail-grid">
          ${a.map(([d,o])=>`<div class="detail-item"><span>${d}</span><strong>${n(o)}</strong></div>`).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>利用情報</h3></div>
        <div class="detail-grid">
          ${t.map(([d,o])=>`<div class="detail-item"><span>${d}</span><strong>${n(o)}</strong></div>`).join("")}
          <div class="detail-item"><span>超過見込み</span><strong>${s<=20?"注意":"問題なし"}</strong></div>
        </div>
      </article>
    </div>
    <div class="grid contract-layout tenant-sections">
      <article class="panel">
        <div class="panel-header"><h3>オプション契約</h3></div>
        <div class="list">
          ${e.optionContracts.map(d=>`
            <div class="list-item option-item">
              <h4>${n(d)}</h4>
              <p>${d==="AI需要予測"?"初期設定ウィザードを利用して導入準備を進められます。":"対象業務向けの追加機能として契約済みです。"}</p>
              <small>${d==="AI需要予測"?"初期設定: 実施中":"初期設定: 利用中"}</small>
            </div>
          `).join("")}
        </div>
      </article>
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
              ${i.map(d=>`
                <tr>
                  <td>${n(d.app)}</td>
                  <td>${n(d.status)}</td>
                  <td>${d.users}</td>
                  <td>${Math.round(d.users/Math.max(e.currentUserCount,1)*100)}%</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  `}function z(){const e=r.data.tenant,s=document.getElementById("tenant-edit");s.innerHTML=`
    <article class="panel tenant-edit-panel">
      <div class="panel-header"><h3>テナント情報編集</h3></div>
      <form id="tenantEditForm" class="stacked-form two-up">
        ${f("tenantName","テナント名","text",e.name)}
        <label>
          <span>イメージ画像URL</span>
          <input id="tenantImageUrl" type="url" value="${n(e.imageUrl)}" placeholder="https://example.com/image.png">
        </label>
        <label class="full">
          <span>イメージ画像アップロード</span>
          <input id="tenantImageFile" type="file" accept="image/*">
          <small class="field-note">画像を選択するとプレビューへ反映されます。URL入力とアップロードのどちらでも更新できます。</small>
        </label>
        <div class="tenant-preview full">
          <img id="tenantImagePreview" src="${n(e.imageUrl)}" alt="${n(e.name)} のイメージ画像プレビュー" class="tenant-image">
        </div>
        <div class="form-actions full">
          <button type="submit" class="primary">更新</button>
        </div>
      </form>
    </article>
  `;const a=document.getElementById("tenantImageUrl"),t=document.getElementById("tenantImagePreview"),i=document.getElementById("tenantImageFile");a.oninput=()=>{t.src=a.value||e.imageUrl},i.onchange=()=>{const d=i.files?.[0];if(!d)return;const o=new FileReader;o.onload=()=>{const u=typeof o.result=="string"?o.result:"";u&&(a.value=u,t.src=u)},o.readAsDataURL(d)},document.getElementById("tenantEditForm").onsubmit=d=>{d.preventDefault(),r.data.tenant.name=c("tenantName",e.name),r.data.tenant.imageUrl=c("tenantImageUrl",e.imageUrl)||e.imageUrl,r.data.tenant.updatedAt=v(),r.data.tenant.updatedBy=r.userName,r.data.operationLogs.unshift({at:r.data.tenant.updatedAt,userName:r.userName,screenName:"テナント編集",actionName:"テナント更新",result:"成功",targetId:r.data.tenant.id,detail:"テナント名またはイメージ画像を更新"}),m("テナント情報を更新しました。"),y()}}function D(){const e=document.getElementById("user-list");e.innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>エンドユーザ一覧</h3></div>
      <div class="filters">
        ${p("userListAppFilter","利用アプリ",["すべて",...r.data.masterData.apps],"すべて")}
        ${p("userListRoleFilter","ロール",["すべて",...r.data.masterData.roles],"すべて")}
        ${p("userListStatusFilter","アカウント状態",["すべて","有効","無効"],"すべて")}
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
  `,document.querySelectorAll("#user-list select").forEach(s=>s.addEventListener("change",S)),S()}function S(){const e=c("userListAppFilter","すべて"),s=c("userListRoleFilter","すべて"),a=c("userListStatusFilter","すべて");document.getElementById("userListBody").innerHTML=r.data.users.filter(t=>e==="すべて"||t.apps.includes(e)).filter(t=>s==="すべて"||t.role===s).filter(t=>a==="すべて"||(a==="有効"?t.active:!t.active)).map(t=>`
      <tr>
        <td>${t.id}</td>
        <td>${n(t.name)}</td>
        <td>${n(t.email)}</td>
        <td>${n(t.department)}</td>
        <td>${n(t.apps.join(", "))}</td>
        <td>${n(t.role)}</td>
        <td><span class="badge ${t.active?"success":"warning"}">${t.active?"有効":"無効"}</span></td>
        <td>${t.lastLoginAt}</td>
        <td>${t.createdAt}</td>
        <td>${t.lastPasswordResetAt}</td>
      </tr>
    `).join("")}function O(){const e=r.data,s=document.getElementById("user-register");s.innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>エンドユーザ登録</h3></div>
      <form id="userForm" class="stacked-form two-up">
        ${f("userEmail","メールアドレス","email","")}
        ${f("userName","名前","text","")}
        ${p("userDepartment","部署等の所属",e.masterData.departments,e.masterData.departments[0])}
        ${f("userTitle","役職","text","")}
        <fieldset class="checkbox-group">
          <legend>利用アプリ</legend>
          <div class="checkbox-options">
            ${e.masterData.apps.map((a,t)=>`
              <label class="checkbox">
                <input id="userApp-${t}" name="userApps" type="checkbox" value="${n(a)}" ${t===0?"checked":""}>
                <span>${n(a)}</span>
              </label>
            `).join("")}
          </div>
        </fieldset>
        ${p("userRole","権限、ロール",e.masterData.roles,e.masterData.roles[0])}
        <label>
          <span>登録通知送信有無</span>
          <select id="userSendNotification">
            <option value="true">送信する</option>
            <option value="false">送信しない</option>
          </select>
        </label>
        <input id="userCsvFile" type="file" accept=".csv,text/csv" class="hidden">
        <div class="form-actions full user-register-actions">
          <button type="button" class="primary" id="userCsvImportButton">CSV</button>
          <button type="submit" class="primary">登録</button>
        </div>
      </form>
    </article>
  `,document.getElementById("userCsvImportButton").onclick=()=>{document.getElementById("userCsvFile").click()},document.getElementById("userCsvFile").onchange=async a=>{const t=a.target.files?.[0];if(!t)return;await se(t)>0&&y(),a.target.value=""},document.getElementById("userForm").onsubmit=async a=>{a.preventDefault();const t={email:c("userEmail"),name:c("userName"),department:c("userDepartment"),title:c("userTitle"),apps:ae("userApps"),role:c("userRole"),sendNotification:c("userSendNotification")==="true"};if(t.apps.length===0){m("利用アプリを1つ以上選択してください。",!0);return}if(r.backendAvailable){const d=await(await fetch("/api/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();r.data.users.unshift(d.data),m(d.message),await N()}else{const i={id:W(),name:t.name,email:t.email,department:t.department,title:t.title,apps:t.apps,role:t.role,active:!0,lastLoginAt:"-",createdAt:v().slice(0,10),lastPasswordResetAt:"-"};r.data.users.unshift(i),r.data.tenant.currentUserCount+=1,r.data.operationLogs.unshift({at:v(),userName:r.userName,screenName:"エンドユーザ登録",actionName:"ユーザ登録",result:"成功",targetId:i.id,detail:`${i.name} を登録 (${i.apps.join(", ")})`}),m("フロントモック上でユーザを登録しました。")}y(),document.getElementById("userForm").reset()}}function x(){const e=document.getElementById("password-reset");e.innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>パスワードリセット</h3></div>
      <form id="resetForm" class="stacked-form">
        <label>
          <span>対象ユーザ</span>
          <select id="resetUserSelect">${r.data.users.map(t=>`<option value="${t.id}">${n(t.name)} (${n(t.email)})</option>`).join("")}</select>
        </label>
        <div id="resetUserCard" class="mini-card"></div>
        <label class="checkbox">
          <input id="resetConfirm" type="checkbox">
          <span>再設定案内メールを送る前提で実行する</span>
        </label>
        <div class="form-actions"><button type="submit" class="primary">リセット実行</button></div>
      </form>
    </article>
  `;const s=document.getElementById("resetUserSelect"),a=()=>{const t=r.data.users.find(i=>i.id===s.value)??r.data.users[0];t&&(document.getElementById("resetUserCard").innerHTML=`
      <h4>${n(t.name)}</h4>
      <p>${n(t.email)}</p>
      <p>${n(t.department)} / ${n(t.role)}</p>
      <p>利用アプリ: ${n(t.apps.join(", "))}</p>
    `)};s.onchange=a,a(),document.getElementById("resetForm").onsubmit=async t=>{if(t.preventDefault(),!document.getElementById("resetConfirm").checked){m("確認チェックを付けてください。",!0);return}if(r.backendAvailable){const o=await(await fetch("/api/users/password-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:s.value})})).json();m(o.message),await N()}else{const d=r.data.users.find(o=>o.id===s.value);if(!d){m("対象ユーザが見つかりません。",!0);return}r.data.operationLogs.unshift({at:v(),userName:r.userName,screenName:"パスワードリセット",actionName:"パスワードリセット",result:"成功",targetId:d.id,detail:`${d.name} へ再設定案内を送信`}),m("フロントモック上でパスワードリセットを受け付けました。")}y()}}function X(e){return`
    <div class="list-item notification-card${e.wizardId?" notification-card-clickable":""}" ${e.wizardId?`data-wizard-id="${n(e.wizardId)}" role="button" tabindex="0"`:""}>
      <div class="notification-head">
        <h4>${n(e.title)}</h4>
        <span class="badge ${e.isRead?"info":"success"}">${e.isRead?"既読":"未読"}</span>
      </div>
      <p>${n(e.summary)}</p>
      <small>${e.publishedAt} | ${e.app}</small>
      ${e.actionLabel&&e.wizardId?`
        <div class="notification-actions">
          <span class="inline-action">${n(e.actionLabel)}</span>
        </div>
      `:""}
    </div>
  `}function j(){const e=document.getElementById("notification-list"),s=G();e.innerHTML=`
    <div class="grid notification-layout">
      <article class="panel">
        <div class="panel-header"><h3>通知一覧</h3></div>
        <div class="filters">
          ${p("notificationTypeFilter","通知種別",["すべて","リリース","メンテナンス"],"すべて")}
          ${p("notificationReadFilter","既読状態",["すべて","未読","既読"],"すべて")}
        </div>
        <div class="list" id="notificationListCards"></div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>通知詳細</h3></div>
        <div id="notificationDetailPanel">
          ${s?P(s):'<div class="empty-state"><h4>通知を選択してください</h4><p>左側の通知一覧から確認したい通知を選ぶと詳細が表示されます。</p></div>'}
        </div>
      </article>
    </div>
  `,document.querySelectorAll("#notification-list select").forEach(a=>a.addEventListener("change",w)),w()}function w(){const e=c("notificationTypeFilter","すべて"),s=c("notificationReadFilter","すべて"),a=document.getElementById("notificationListCards");a.innerHTML=r.data.notifications.filter(t=>e==="すべて"||t.type===e).filter(t=>s==="すべて"||(s==="未読"?!t.isRead:t.isRead)).map(t=>`
      <div class="list-item notification-row ${t.id===b.selectedNotificationId?"selected-row":""}" data-notification-id="${t.id}">
        <div class="notification-head">
          <h4>${n(t.title)}</h4>
          <span class="badge ${t.isRead?"info":"success"}">${t.isRead?"既読":"未読"}</span>
        </div>
        <p>${n(t.summary)}</p>
        <small>${t.publishedAt} | ${t.type} | ${t.app}</small>
      </div>
    `).join(""),document.querySelectorAll("[data-notification-id]").forEach(t=>{t.onclick=()=>{b.selectedNotificationId=t.dataset.notificationId??"",_(),w()}})}function _(){const e=G();document.getElementById("notificationDetailPanel").innerHTML=e?P(e):'<div class="empty-state"><h4>通知を選択してください</h4><p>左側の通知一覧から確認したい通知を選ぶと詳細が表示されます。</p></div>';const s=document.getElementById("notificationWizardButton");s&&(s.onclick=()=>I(s.dataset.wizardId??""))}function P(e){return`
    <div class="stacked-form">
      <div class="detail-grid">
        <div class="detail-item"><span>通知種別</span><strong>${n(e.type)}</strong></div>
        <div class="detail-item"><span>対象アプリ</span><strong>${n(e.app)}</strong></div>
        <div class="detail-item"><span>配信日時</span><strong>${e.publishedAt}</strong></div>
        <div class="detail-item"><span>重要度</span><strong>${n(e.importance??"-")}</strong></div>
      </div>
      <div class="detail-item detail-block">
        <span>通知概要</span>
        <strong>${n(e.summary)}</strong>
      </div>
      <div class="detail-item detail-block">
        <span>詳細内容</span>
        <p>${n(e.body??e.summary)}</p>
      </div>
      <div class="detail-item detail-block">
        <span>対応要否</span>
        <strong>${e.needsAction?"要対応":"確認のみ"}</strong>
      </div>
      ${e.wizardId&&e.actionLabel?`
        <div class="form-actions">
          <button type="button" class="primary" id="notificationWizardButton" data-wizard-id="${n(e.wizardId)}">${n(e.actionLabel)}</button>
        </div>
      `:""}
    </div>
  `}function I(e){e&&(l.activeWizardId=e,l.step=1,l.department="営業本部",l.startMonth="2026-07",l.notifyAdmins=!0,g())}function C(){l.activeWizardId="",g()}function g(){const e=document.getElementById("wizardModalHost");if(!l.activeWizardId){e.innerHTML="";return}if(e.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-modal">
        <div class="panel-header">
          <div>
            <h3>AI需要予測 初期設定ウィザード</h3>
            <p class="subtle">ステップ ${l.step} / 3</p>
          </div>
          <button type="button" class="ghost" id="wizardCloseButton">閉じる</button>
        </div>
        ${ee()}
      </div>
    </div>
  `,document.getElementById("wizardCloseButton").onclick=C,l.step===1){document.getElementById("wizardDepartment").onchange=s=>{l.department=s.target.value},document.getElementById("wizardNextStep").onclick=()=>{l.step=2,g()};return}if(l.step===2){document.getElementById("wizardStartMonth").onchange=s=>{l.startMonth=s.target.value},document.getElementById("wizardNotifyAdmins").onchange=s=>{l.notifyAdmins=s.target.checked},document.getElementById("wizardPrevStep").onclick=()=>{l.step=1,g()},document.getElementById("wizardNextStep").onclick=()=>{l.step=3,g()};return}document.getElementById("wizardPrevStep").onclick=()=>{l.step=2,g()},document.getElementById("wizardFinish").onclick=()=>{r.data.operationLogs.unshift({at:v(),userName:r.userName,screenName:"通知一覧",actionName:"通知対応",result:"成功",targetId:"NTF-003",detail:"AI需要予測 初期設定ウィザードを完了"});const s=r.data.notifications.find(a=>a.id==="NTF-003");s&&(s.isRead=!0),m("AI需要予測の初期設定ウィザードを完了しました。"),C(),A(),E()}}function ee(){return l.step===1?`
      <div class="wizard-body stacked-form">
        <div class="wizard-summary">対象部門と利用開始アプリを選択します。</div>
        <label>
          <span>対象部門</span>
          <select id="wizardDepartment">
            ${r.data.masterData.departments.map(e=>`<option value="${n(e)}" ${e===l.department?"selected":""}>${n(e)}</option>`).join("")}
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
    `:l.step===2?`
      <div class="wizard-body stacked-form">
        <div class="wizard-summary">初期データの適用期間と通知条件を設定します。</div>
        <label>
          <span>予測開始月</span>
          <input id="wizardStartMonth" type="month" value="${n(l.startMonth)}">
        </label>
        <label class="checkbox">
          <input id="wizardNotifyAdmins" type="checkbox" ${l.notifyAdmins?"checked":""}>
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
        <div class="detail-item"><span>対象部門</span><strong>${n(l.department)}</strong></div>
        <div class="detail-item"><span>対象機能</span><strong>AI需要予測</strong></div>
        <div class="detail-item"><span>予測開始月</span><strong>${n(l.startMonth)}</strong></div>
        <div class="detail-item"><span>管理者通知</span><strong>${l.notifyAdmins?"送信する":"送信しない"}</strong></div>
      </div>
      <div class="form-actions">
        <button type="button" class="ghost" id="wizardPrevStep">戻る</button>
        <button type="button" class="primary" id="wizardFinish">設定を完了</button>
      </div>
    </div>
  `}function V(){const e=document.getElementById("role-access"),s=le(r.data),a=r.data.permissions,t=oe(a);e.innerHTML=`
    <div class="grid two-col rbac-top">
      <article class="panel">
        <div class="panel-header"><h3>ロール定義</h3></div>
        <div class="list role-list">
          ${s.map(i=>`
            <div class="list-item role-card">
              <div class="role-card-head">
                <div>
                  <h4>${n(i.name)}</h4>
                  <small>${n(i.scope)}</small>
                </div>
                <span class="badge info">${i.memberCount}名</span>
              </div>
              <p>${n(i.description)}</p>
              <small>付与権限数: ${i.permissionIds.length}</small>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>権限カタログ</h3></div>
        <div class="permission-groups">
          ${Object.entries(t).map(([i,d])=>`
            <section class="permission-group">
              <h4>${n(i)}</h4>
              <div class="permission-items">
                ${d.map(o=>`
                  <div class="permission-item">
                    <strong>${n(o.name)}</strong>
                    <p>${n(o.description)}</p>
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
              ${s.map(i=>`<th>${n(i.name)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${a.map(i=>`
              <tr>
                <td>
                  <strong>${n(i.name)}</strong>
                  <div class="table-subtext">${n(i.category)}</div>
                </td>
                ${s.map(d=>`
                  <td class="matrix-cell">
                    ${d.permissionIds.includes(i.id)?'<span class="matrix-check allowed">●</span>':'<span class="matrix-check denied">-</span>'}
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
            ${r.data.users.map(i=>`
              <tr>
                <td>${n(i.name)}</td>
                <td>${n(i.email)}</td>
                <td>${n(i.department)}</td>
                <td>${n(i.role)}</td>
                <td>${n(i.apps.join(", "))}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `}function E(){document.getElementById("operation-logs").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>操作ログ</h3></div>
      <div class="filters">
        ${p("operationScreenFilter","対象画面",["すべて",...r.data.masterData.managementScreens,"ログイン","ログアウト"],"すべて")}
        ${p("operationTypeFilter","操作種別",["すべて",...r.data.masterData.operationTypes,"通知対応"],"すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>操作日時</th><th>操作者</th><th>対象画面</th><th>操作種別</th><th>対象ID</th><th>結果</th><th>操作内容</th></tr></thead>
          <tbody id="operationLogsBody"></tbody>
        </table>
      </div>
    </article>
  `,document.querySelectorAll("#operation-logs select").forEach(e=>e.addEventListener("change",B)),B()}function B(){const e=c("operationScreenFilter","すべて"),s=c("operationTypeFilter","すべて");document.getElementById("operationLogsBody").innerHTML=r.data.operationLogs.filter(a=>e==="すべて"||a.screenName===e).filter(a=>s==="すべて"||a.actionName===s).map(a=>`<tr><td>${a.at}</td><td>${n(a.userName)}</td><td>${n(a.screenName)}</td><td>${n(a.actionName)}</td><td>${n(a.targetId)}</td><td>${n(a.result)}</td><td>${n(a.detail)}</td></tr>`).join("")}function H(){document.getElementById("login-logs").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>ログインログ</h3></div>
      <div class="filters">
        ${p("loginResultFilter","結果",["すべて","成功","失敗"],"すべて")}
        ${p("loginAuthMethodFilter","認証方式",["すべて","ID/パスワード","SSO"],"すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>ログイン日時</th><th>ユーザ名</th><th>結果</th><th>認証方式</th><th>接続元</th><th>IPアドレス</th><th>失敗理由</th></tr></thead>
          <tbody id="loginLogsBody"></tbody>
        </table>
      </div>
    </article>
  `,document.querySelectorAll("#login-logs select").forEach(e=>e.addEventListener("change",F)),F()}function F(){const e=c("loginResultFilter","すべて"),s=c("loginAuthMethodFilter","すべて");document.getElementById("loginLogsBody").innerHTML=r.data.loginLogs.filter(a=>e==="すべて"||a.result===e).filter(a=>s==="すべて"||a.authMethod===s).map(a=>`<tr><td>${a.at}</td><td>${n(a.userName)}</td><td>${n(a.result)}</td><td>${n(a.authMethod)}</td><td>${n(a.clientName)}</td><td>${n(a.ipAddress)}</td><td>${n(a.failureReason)}</td></tr>`).join("")}function q(){document.getElementById("error-monitor").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>エラー監視</h3></div>
      <div class="filters">
        ${p("errorAppFilter","対象アプリ",["すべて",...r.data.masterData.apps,"共通"],"すべて")}
        ${p("errorSeverityFilter","重大度",["すべて",...r.data.masterData.errorSeverities],"すべて")}
        ${p("errorStatusFilter","対応状況",["すべて",...r.data.masterData.errorStatuses],"すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>発生日時</th><th>エラーID</th><th>対象アプリ</th><th>概要</th><th>重大度</th><th>対応状況</th><th>初回発生</th><th>最新発生</th><th>担当状況</th></tr></thead>
          <tbody id="errorBody"></tbody>
        </table>
      </div>
    </article>
  `,document.querySelectorAll("#error-monitor select").forEach(e=>e.addEventListener("change",R)),R()}function R(){const e=c("errorAppFilter","すべて"),s=c("errorSeverityFilter","すべて"),a=c("errorStatusFilter","すべて");document.getElementById("errorBody").innerHTML=r.data.errors.filter(t=>e==="すべて"||t.app===e).filter(t=>s==="すべて"||t.severity===s).filter(t=>a==="すべて"||t.status===a).map(t=>`<tr><td>${t.at}</td><td>${n(t.id)}</td><td>${n(t.app)}</td><td>${n(t.summary)}</td><td><span class="badge ${te(t.severity)}">${n(t.severity)}</span></td><td>${n(t.status)}</td><td>${t.firstSeenAt}</td><td>${t.lastSeenAt}</td><td>${n(t.assignment)}</td></tr>`).join("")}function y(){U(),A(),T(),z(),D(),O(),j(),V(),x(),E(),H(),q()}function h(e,s){return`<div class="summary-card"><span>${e}</span><strong>${s}</strong></div>`}function f(e,s,a,t){return`<label><span>${s}</span><input id="${e}" type="${a}" value="${n(t)}" required></label>`}function p(e,s,a,t){return`
    <label>
      <span>${s}</span>
      <select id="${e}">
        ${a.map(i=>`<option value="${n(i)}" ${i===t?"selected":""}>${n(i)}</option>`).join("")}
      </select>
    </label>
  `}function te(e){return e==="Critical"?"critical":e==="Warning"?"warning":"info"}function c(e,s=""){return document.getElementById(e)?.value??s}function ae(e){return Array.from(document.querySelectorAll(`input[name="${e}"]:checked`)).map(s=>s.value)}function m(e,s=!1){const a=document.getElementById("flashMessage");a.textContent=e,a.classList.remove("hidden"),a.style.background=s?"#fcebea":"#edf8f0",a.style.color=s?"#a63c31":"#28784d",a.style.borderColor=s?"#efb4af":"#b5dfc1",window.setTimeout(()=>a.classList.add("hidden"),2800)}function n(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}async function se(e){const s=await e.text(),a=re(s);if(a.length<2)return m("CSVに登録データがありません。",!0),0;const t=a[0].map(d=>ne(d)),i=[];for(const[d,o]of a.slice(1).entries()){if(o.every($=>$.trim()===""))continue;const u=ie(t,o,d);u&&i.push(u)}return i.length===0?(m("CSVの列名またはデータ形式を確認してください。",!0),0):(r.data.users.unshift(...i.reverse()),r.data.tenant.currentUserCount+=i.length,r.data.tenant.updatedAt=v(),r.data.tenant.updatedBy=r.userName,r.data.operationLogs.unshift({at:r.data.tenant.updatedAt,userName:r.userName,screenName:"エンドユーザ登録",actionName:"ユーザ登録",result:"成功",targetId:`${i.length}件(CSV)`,detail:"CSV一括取込でエンドユーザを登録"}),m(`CSVから ${i.length} 件のユーザを登録しました。`),i.length)}function ie(e,s,a){const t=(...$)=>{for(const J of $){const L=e.indexOf(J);if(L>=0)return s[L]?.trim()??""}return""},i=t("email","mail","メールアドレス"),d=t("name","名前");if(!i||!d)return null;const o=t("app","利用アプリ")||r.data.masterData.apps[0],u=t("role","権限","ロール")||r.data.masterData.roles[0];return{id:W(a),name:d,email:i,department:t("department","部署","departmentname")||r.data.masterData.departments[0],title:t("title","役職"),apps:[o],role:u,active:!0,lastLoginAt:"-",createdAt:v().slice(0,10),lastPasswordResetAt:"-"}}function ne(e){return e.trim().toLowerCase().replaceAll(" ","")}function re(e){const s=[];let a="",t=[],i=!1;for(let d=0;d<e.length;d+=1){const o=e[d],u=e[d+1];if(o==='"'){i&&u==='"'?(a+='"',d+=1):i=!i;continue}if(o===","&&!i){t.push(a),a="";continue}if((o===`
`||o==="\r")&&!i){o==="\r"&&u===`
`&&(d+=1),t.push(a),s.push(t),t=[],a="";continue}a+=o}return(a.length>0||t.length>0)&&(t.push(a),s.push(t)),s}function v(){const e=new Date,s=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),d=String(e.getMinutes()).padStart(2,"0");return`${s}-${a}-${t} ${i}:${d}`}function W(e=0){const s=r.data.users.reduce((a,t)=>{const i=Number(t.id.replace("USR-",""));return Number.isFinite(i)?Math.max(a,i):a},0);return`USR-${String(s+1+e).padStart(3,"0")}`}function de(){return new Set(r.data.loginLogs.filter(e=>e.result==="成功").map(e=>e.userName).filter(e=>e&&e!=="unknown@example.com")).size}function oe(e){return e.reduce((s,a)=>(s[a.category]||(s[a.category]=[]),s[a.category].push(a),s),{})}function le(e){return e.roles.map(s=>({...s,memberCount:e.users.filter(a=>a.role===s.name).length}))}function G(){return r.data.notifications.find(e=>e.id===b.selectedNotificationId)??r.data.notifications[0]}

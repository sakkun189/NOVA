(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(i){if(i.ep)return;i.ep=!0;const d=a(i);fetch(i.href,d)}})();const N={tenant:{id:"TEN-001",name:"サンプル商事株式会社",status:"利用中",contractDate:"2026-04-01",startDate:"2026-04-15",plan:"Enterprise",userLimit:200,currentUserCount:128,optionContracts:["加工モジュール","AI需要予測"],novaUsage:{appName:"NOVA",enabled:!0,statusText:"本番利用中"},gomUsage:{appName:"GOM",enabled:!0,statusText:"一部部門で利用中"},adminName:"田中 花子",adminEmail:"tenant-admin@example.com",updatedAt:"2026-06-07 18:20",updatedBy:"佐藤 次郎"},users:[{id:"USR-001",name:"山田 太郎",email:"yamada@example.com",department:"営業本部",title:"課長",apps:["NOVA"],role:"承認者",active:!0},{id:"USR-002",name:"鈴木 一郎",email:"suzuki@example.com",department:"情報システム部",title:"主任",apps:["NOVA","GOM"],role:"管理者",active:!0},{id:"USR-003",name:"高橋 美咲",email:"takahashi@example.com",department:"経理部",title:"担当",apps:["GOM"],role:"一般利用者",active:!1}],roles:[{id:"ROLE-USER",name:"一般利用者",scope:"アプリ利用",description:"自分に許可されたアプリを利用し、参照中心の操作を行う基本ロール。",memberCount:1,permissionIds:["perm.app.login","perm.app.view","perm.profile.view"]},{id:"ROLE-APPROVER",name:"承認者",scope:"業務承認",description:"一般利用者権限に加え、承認対象データの確認と承認操作を実行するロール。",memberCount:1,permissionIds:["perm.app.login","perm.app.view","perm.profile.view","perm.workflow.approve","perm.report.export"]},{id:"ROLE-ADMIN",name:"管理者",scope:"テナント運用",description:"エンドユーザ登録、パスワードリセット、ログ参照などテナント内の運用管理を担うロール。",memberCount:1,permissionIds:["perm.app.login","perm.app.view","perm.profile.view","perm.user.register","perm.user.reset-password","perm.log.operation.view","perm.log.login.view","perm.error.view","perm.rbac.view"]}],permissions:[{id:"perm.app.login",category:"認証",name:"ログイン",description:"管理画面または対象アプリへログインする。"},{id:"perm.app.view",category:"アプリ利用",name:"業務データ参照",description:"許可されたアプリでデータを参照する。"},{id:"perm.profile.view",category:"プロフィール",name:"自分の利用情報参照",description:"自身のプロフィールや利用可能アプリを確認する。"},{id:"perm.workflow.approve",category:"承認",name:"承認実行",description:"申請や取引データの承認処理を実行する。"},{id:"perm.report.export",category:"帳票",name:"レポート出力",description:"レポートやCSVを出力する。"},{id:"perm.user.register",category:"ユーザ管理",name:"エンドユーザ登録",description:"テナント内ユーザを新規登録する。"},{id:"perm.user.reset-password",category:"ユーザ管理",name:"パスワードリセット",description:"対象ユーザの再設定案内を実行する。"},{id:"perm.log.operation.view",category:"監査",name:"操作ログ参照",description:"操作ログを検索、閲覧する。"},{id:"perm.log.login.view",category:"監査",name:"ログインログ参照",description:"ログイン履歴や失敗理由を確認する。"},{id:"perm.error.view",category:"監視",name:"エラー監視参照",description:"エラー一覧と重大度を確認する。"},{id:"perm.rbac.view",category:"権限管理",name:"ロール、権限定義参照",description:"RBAC の定義と割当状況を確認する。"}],notifications:[{id:"NTF-003",title:"新機能リリース: AI需要予測 初期設定ウィザード",type:"リリース",app:"NOVA",publishedAt:"2026-06-08 10:00",isRead:!1,summary:"AI需要予測の利用開始に向けて、対象部門、初期データ範囲、通知先を段階的に設定できるウィザードを追加しました。",actionLabel:"設定を開始",wizardId:"ai-demand-forecast"},{id:"NTF-001",title:"新機能リリース: 承認フロー改善",type:"リリース",app:"NOVA",publishedAt:"2026-06-07 09:00",isRead:!1,summary:"NOVA に新しい承認ステップ設定機能を追加しました。"},{id:"NTF-002",title:"計画メンテナンスのお知らせ",type:"メンテナンス",app:"共通",publishedAt:"2026-06-06 15:30",isRead:!0,summary:"2026-06-10 22:00 からメンテナンスを実施します。"}],operationLogs:[{at:"2026-06-07 18:01",userName:"鈴木 一郎",app:"NOVA",feature:"エンドユーザ管理",eventName:"ユーザ登録",result:"成功",targetId:"USR-004"},{at:"2026-06-07 17:25",userName:"佐藤 次郎",app:"共通",feature:"テナント管理",eventName:"テナント更新",result:"成功",targetId:"TEN-001"},{at:"2026-06-07 16:48",userName:"鈴木 一郎",app:"GOM",feature:"認証",eventName:"パスワードリセット",result:"成功",targetId:"USR-003"}],loginLogs:[{at:"2026-06-07 18:10",userName:"鈴木 一郎",app:"NOVA",result:"成功",ipAddress:"10.10.1.15",failureReason:"-"},{at:"2026-06-07 17:55",userName:"山田 太郎",app:"GOM",result:"成功",ipAddress:"10.10.1.20",failureReason:"-"},{at:"2026-06-07 17:42",userName:"unknown@example.com",app:"NOVA",result:"失敗",ipAddress:"10.10.9.99",failureReason:"ユーザが存在しません"}],errors:[{id:"ERR-1001",at:"2026-06-07 17:40",app:"NOVA",summary:"バッチ連携処理でタイムアウトが発生",severity:"Critical",status:"発生中",firstSeenAt:"2026-06-07 16:55",lastSeenAt:"2026-06-07 17:40",assignment:"運用確認中"},{id:"ERR-2003",at:"2026-06-07 15:20",app:"GOM",summary:"一部通知送信の遅延",severity:"Warning",status:"未対応",firstSeenAt:"2026-06-07 14:50",lastSeenAt:"2026-06-07 15:20",assignment:"未着手"},{id:"ERR-3008",at:"2026-06-07 11:05",app:"共通",summary:"ログ集計ジョブの再試行完了",severity:"Info",status:"解消済み",firstSeenAt:"2026-06-07 10:48",lastSeenAt:"2026-06-07 11:05",assignment:"対応完了"}],masterData:{apps:["NOVA","GOM"],plans:["Standard","Professional","Enterprise"],tenantStatuses:["準備中","利用中","停止中"],departments:["営業本部","情報システム部","経理部","管理部"],roles:["一般利用者","承認者","管理者"],operationTypes:["ログイン","ログアウト","テナント更新","ユーザ登録","パスワードリセット","通知配信"],errorSeverities:["Critical","Warning","Info"],errorStatuses:["発生中","未対応","解消済み"]}},n={data:structuredClone(N),userName:"モック管理者",backendAvailable:!1},o={activeWizardId:"",step:1,department:"営業本部",startMonth:"2026-07",notifyAdmins:!0},S={dashboard:{title:"ダッシュボード",description:"管理状況の要約を確認します。"},"tenant-view":{title:"テナント照会",description:"契約情報と利用状況を確認します。"},"tenant-edit":{title:"テナント編集",description:"テナント設定を更新します。"},"user-register":{title:"エンドユーザ登録",description:"新規利用者を登録します。"},"role-access":{title:"ロール/権限管理",description:"RBAC に基づくロール定義と権限割当を確認します。"},"password-reset":{title:"パスワードリセット",description:"対象ユーザに再設定案内を送ります。"},"operation-logs":{title:"操作ログ",description:"主要な管理操作を追跡します。"},"login-logs":{title:"ログインログ",description:"ログイン履歴と失敗理由を確認します。"},"error-monitor":{title:"エラー監視",description:"重大度別に異常を確認します。"}};R();function R(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
          ${Object.entries(S).map(([s,a],t)=>`<button data-view="${s}" class="nav-item ${t===0?"active":""}">${a.title}</button>`).join("")}
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
            <span id="currentUserName">${n.userName}</span>
            <button id="logoutButton" class="ghost">ログアウト</button>
          </div>
        </header>
        <section id="flashMessage" class="flash hidden"></section>
        <section id="viewsHost"></section>
        <section id="wizardModalHost"></section>
      </main>
    </div>
  `,D())}function D(){const e=document.getElementById("loginForm"),s=document.getElementById("logoutButton");e?.addEventListener("submit",async a=>{a.preventDefault(),n.userName=l("loginId","モック管理者"),await g(),j(),document.getElementById("currentUserName").textContent=n.userName,document.getElementById("loginView")?.classList.add("hidden"),document.getElementById("appShell")?.classList.remove("hidden")}),s?.addEventListener("click",()=>{document.getElementById("appShell")?.classList.add("hidden"),document.getElementById("loginView")?.classList.remove("hidden")})}async function g(){try{const e=await fetch("/api/bootstrap");if(!e.ok)throw new Error(`bootstrap failed: ${e.status}`);n.data=await e.json(),n.backendAvailable=!0}catch{n.data=structuredClone(N),n.backendAvailable=!1}}function j(){const e=document.getElementById("viewsHost");e.innerHTML=`
    <section id="dashboard" class="view active-view"></section>
    <section id="tenant-view" class="view"></section>
    <section id="tenant-edit" class="view"></section>
    <section id="user-register" class="view"></section>
    <section id="role-access" class="view"></section>
    <section id="password-reset" class="view"></section>
    <section id="operation-logs" class="view"></section>
    <section id="login-logs" class="view"></section>
    <section id="error-monitor" class="view"></section>
  `,document.querySelectorAll(".nav-item").forEach(s=>{s.onclick=()=>V(s.dataset.view??"dashboard")}),B(),f(),L(),C(),M(),F(),z(),y(),k(),T()}function B(){const e=document.getElementById("backendModeBadge");e.textContent=n.backendAvailable?"C# API Connected":"Frontend Mock",e.className=`badge ${n.backendAvailable?"success":"info"}`}function V(e){document.querySelectorAll(".view").forEach(a=>a.classList.remove("active-view")),document.getElementById(e)?.classList.add("active-view"),document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active")),document.querySelector(`[data-view="${e}"]`)?.classList.add("active");const s=S[e];document.getElementById("viewTitle").textContent=s.title,document.getElementById("viewDescription").textContent=s.description}function f(){const e=n.data,s=e.errors.filter(t=>t.severity==="Critical").length,a=e.notifications.filter(t=>!t.isRead).length;document.getElementById("dashboard").innerHTML=`
    <div class="hero">
      <div>
        <div class="eyebrow">OVERVIEW</div>
        <h3>${r(e.tenant.name)}</h3>
        <p>${r(`${e.tenant.status} | 契約プラン: ${e.tenant.plan} | 現在登録数: ${e.tenant.currentUserCount}`)}</p>
      </div>
      <div class="hero-stats">
        ${v("現在登録数",`${e.tenant.currentUserCount}`)}
        ${v("重大エラー",`${s}`)}
        ${v("未読通知",`${a}`)}
        ${v("直近ログイン",`${e.loginLogs.length}`)}
      </div>
    </div>
    <div class="grid two-col">
      <article class="panel">
        <div class="panel-header"><h3>直近通知</h3></div>
        <div class="list">
          ${e.notifications.map(U).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>重大エラー</h3></div>
        <div class="list">
          ${e.errors.filter(t=>t.severity==="Critical").map(t=>`<div class="list-item"><h4>${r(t.id)}</h4><p>${r(t.summary)}</p><small>${t.at} | ${t.app}</small></div>`).join("")}
        </div>
      </article>
    </div>
  `,document.querySelectorAll("[data-wizard-id]").forEach(t=>{t.onclick=()=>$(t.dataset.wizardId??""),t.onkeydown=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),$(t.dataset.wizardId??""))}})}function L(){const e=n.data.tenant,s=[["テナントID",e.id],["テナント名",e.name],["契約ステータス",e.status],["ベンダとの契約日",e.contractDate],["テナント利用開始日",e.startDate],["契約プラン",e.plan],["ユーザ登録上限数",`${e.userLimit}`],["現在登録数",`${e.currentUserCount}`],["オプション契約一覧",e.optionContracts.join("、")],["最終更新",`${e.updatedAt} / ${e.updatedBy}`]],a=[["NOVA利用状況",e.novaUsage.statusText],["GOM利用状況",e.gomUsage.statusText],["管理者名",e.adminName],["管理者メールアドレス",e.adminEmail]];document.getElementById("tenant-view").innerHTML=`
    <div class="grid two-col tenant-sections">
      <article class="panel">
        <div class="panel-header"><h3>契約情報</h3></div>
        <div class="detail-grid">
          ${s.map(([t,i])=>`<div class="detail-item"><span>${t}</span><strong>${r(i)}</strong></div>`).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>利用情報</h3></div>
        <div class="detail-grid">
          ${a.map(([t,i])=>`<div class="detail-item"><span>${t}</span><strong>${r(i)}</strong></div>`).join("")}
        </div>
      </article>
    </div>
  `}function C(){const e=document.getElementById("tenant-edit");e.innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>テナント情報編集</h3></div>
      <div class="empty-state">
        <h4>現在、テナント側で編集できる項目はありません</h4>
        <p>契約情報および契約ステータスはベンダ側で管理します。利用情報も現時点では照会のみを対象とします。</p>
      </div>
    </article>
  `}function M(){const e=n.data,s=document.getElementById("user-register");s.innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>エンドユーザ登録</h3></div>
      <form id="userForm" class="stacked-form two-up">
        ${h("userEmail","メールアドレス","email","")}
        ${h("userName","名前","text","")}
        ${p("userDepartment","部署等の所属",e.masterData.departments,e.masterData.departments[0])}
        ${h("userTitle","役職","text","")}
        ${p("userApp","利用アプリ",e.masterData.apps,e.masterData.apps[0])}
        ${p("userRole","権限、ロール",e.masterData.roles,e.masterData.roles[0])}
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
  `,document.getElementById("userForm").onsubmit=async a=>{a.preventDefault();const t={email:l("userEmail"),name:l("userName"),department:l("userDepartment"),title:l("userTitle"),apps:[l("userApp")],role:l("userRole"),sendNotification:l("userSendNotification")==="true"};if(n.backendAvailable){const d=await(await fetch("/api/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();n.data.users.unshift(d.data),m(d.message),await g()}else{const i={id:`USR-${String(n.data.users.length+1).padStart(3,"0")}`,name:t.name,email:t.email,department:t.department,title:t.title,apps:t.apps,role:t.role,active:!0};n.data.users.unshift(i),n.data.tenant.currentUserCount+=1,n.data.operationLogs.unshift({at:b(),userName:n.userName,app:t.apps[0],feature:"エンドユーザ管理",eventName:"ユーザ登録",result:"成功",targetId:i.id}),m("フロントモック上でユーザを登録しました。")}O(),document.getElementById("userForm").reset()}}function z(){const e=document.getElementById("password-reset");e.innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>パスワードリセット</h3></div>
      <form id="resetForm" class="stacked-form">
        <label>
          <span>対象ユーザ</span>
          <select id="resetUserSelect">${n.data.users.map(t=>`<option value="${t.id}">${r(t.name)} (${r(t.email)})</option>`).join("")}</select>
        </label>
        <div id="resetUserCard" class="mini-card"></div>
        <label class="checkbox">
          <input id="resetConfirm" type="checkbox">
          <span>再設定案内メールを送る前提で実行する</span>
        </label>
        <div class="form-actions"><button type="submit" class="primary">リセット実行</button></div>
      </form>
    </article>
  `;const s=document.getElementById("resetUserSelect"),a=()=>{const t=n.data.users.find(i=>i.id===s.value)??n.data.users[0];t&&(document.getElementById("resetUserCard").innerHTML=`
      <h4>${r(t.name)}</h4>
      <p>${r(t.email)}</p>
      <p>${r(t.department)} / ${r(t.role)}</p>
      <p>利用アプリ: ${r(t.apps.join(", "))}</p>
    `)};s.onchange=a,a(),document.getElementById("resetForm").onsubmit=async t=>{if(t.preventDefault(),!document.getElementById("resetConfirm").checked){m("確認チェックを付けてください。",!0);return}if(n.backendAvailable){const c=await(await fetch("/api/users/password-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:s.value})})).json();m(c.message),await g()}else{const d=n.data.users.find(c=>c.id===s.value);if(!d){m("対象ユーザが見つかりません。",!0);return}n.data.operationLogs.unshift({at:b(),userName:n.userName,app:d.apps[0]??"共通",feature:"認証",eventName:"パスワードリセット",result:"成功",targetId:d.id}),m("フロントモック上でパスワードリセットを受け付けました。")}O()}}function U(e){return`
    <div class="list-item notification-card${e.wizardId?" notification-card-clickable":""}" ${e.wizardId?`data-wizard-id="${r(e.wizardId)}" role="button" tabindex="0"`:""}>
      <div class="notification-head">
        <h4>${r(e.title)}</h4>
        <span class="badge ${e.isRead?"info":"success"}">${e.isRead?"既読":"未読"}</span>
      </div>
      <p>${r(e.summary)}</p>
      <small>${e.publishedAt} | ${e.app}</small>
      ${e.actionLabel&&e.wizardId?`
        <div class="notification-actions">
          <span class="inline-action">${r(e.actionLabel)}</span>
        </div>
      `:""}
    </div>
  `}function $(e){e&&(o.activeWizardId=e,o.step=1,o.department="営業本部",o.startMonth="2026-07",o.notifyAdmins=!0,u())}function w(){o.activeWizardId="",u()}function u(){const e=document.getElementById("wizardModalHost");if(!o.activeWizardId){e.innerHTML="";return}if(e.innerHTML=`
    <div class="wizard-overlay">
      <div class="wizard-modal">
        <div class="panel-header">
          <div>
            <h3>AI需要予測 初期設定ウィザード</h3>
            <p class="subtle">ステップ ${o.step} / 3</p>
          </div>
          <button type="button" class="ghost" id="wizardCloseButton">閉じる</button>
        </div>
        ${H()}
      </div>
    </div>
  `,document.getElementById("wizardCloseButton").onclick=w,o.step===1){document.getElementById("wizardDepartment").onchange=s=>{o.department=s.target.value},document.getElementById("wizardNextStep").onclick=()=>{o.step=2,u()};return}if(o.step===2){document.getElementById("wizardStartMonth").onchange=s=>{o.startMonth=s.target.value},document.getElementById("wizardNotifyAdmins").onchange=s=>{o.notifyAdmins=s.target.checked},document.getElementById("wizardPrevStep").onclick=()=>{o.step=1,u()},document.getElementById("wizardNextStep").onclick=()=>{o.step=3,u()};return}document.getElementById("wizardPrevStep").onclick=()=>{o.step=2,u()},document.getElementById("wizardFinish").onclick=()=>{n.data.operationLogs.unshift({at:b(),userName:n.userName,app:"NOVA",feature:"通知",eventName:"AI需要予測 初期設定ウィザード完了",result:"成功",targetId:"NTF-003"});const s=n.data.notifications.find(a=>a.id==="NTF-003");s&&(s.isRead=!0),m("AI需要予測の初期設定ウィザードを完了しました。"),w(),f(),y()}}function H(){return o.step===1?`
      <div class="wizard-body stacked-form">
        <div class="wizard-summary">対象部門と利用開始アプリを選択します。</div>
        <label>
          <span>対象部門</span>
          <select id="wizardDepartment">
            ${n.data.masterData.departments.map(e=>`<option value="${r(e)}" ${e===o.department?"selected":""}>${r(e)}</option>`).join("")}
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
          <input id="wizardStartMonth" type="month" value="${r(o.startMonth)}">
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
        <div class="detail-item"><span>対象部門</span><strong>${r(o.department)}</strong></div>
        <div class="detail-item"><span>対象機能</span><strong>AI需要予測</strong></div>
        <div class="detail-item"><span>予測開始月</span><strong>${r(o.startMonth)}</strong></div>
        <div class="detail-item"><span>管理者通知</span><strong>${o.notifyAdmins?"送信する":"送信しない"}</strong></div>
      </div>
      <div class="form-actions">
        <button type="button" class="ghost" id="wizardPrevStep">戻る</button>
        <button type="button" class="primary" id="wizardFinish">設定を完了</button>
      </div>
    </div>
  `}function F(){const e=document.getElementById("role-access"),s=q(n.data),a=n.data.permissions,t=x(a);e.innerHTML=`
    <div class="grid two-col rbac-top">
      <article class="panel">
        <div class="panel-header"><h3>ロール定義</h3></div>
        <div class="list role-list">
          ${s.map(i=>`
            <div class="list-item role-card">
              <div class="role-card-head">
                <div>
                  <h4>${r(i.name)}</h4>
                  <small>${r(i.scope)}</small>
                </div>
                <span class="badge info">${i.memberCount}名</span>
              </div>
              <p>${r(i.description)}</p>
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
              <h4>${r(i)}</h4>
              <div class="permission-items">
                ${d.map(c=>`
                  <div class="permission-item">
                    <strong>${r(c.name)}</strong>
                    <p>${r(c.description)}</p>
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
              ${s.map(i=>`<th>${r(i.name)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${a.map(i=>`
              <tr>
                <td>
                  <strong>${r(i.name)}</strong>
                  <div class="table-subtext">${r(i.category)}</div>
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
            ${n.data.users.map(i=>`
              <tr>
                <td>${r(i.name)}</td>
                <td>${r(i.email)}</td>
                <td>${r(i.department)}</td>
                <td>${r(i.role)}</td>
                <td>${r(i.apps.join(", "))}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `}function y(){document.getElementById("operation-logs").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>操作ログ</h3></div>
      <div class="filters">
        ${p("operationAppFilter","対象アプリ",["すべて",...n.data.masterData.apps,"共通"],"すべて")}
        ${p("operationTypeFilter","イベント種別",["すべて",...n.data.masterData.operationTypes],"すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>操作日時</th><th>操作者</th><th>対象アプリ</th><th>対象機能</th><th>イベント</th><th>結果</th><th>対象ID</th></tr></thead>
          <tbody id="operationLogsBody"></tbody>
        </table>
      </div>
    </article>
  `,document.querySelectorAll("#operation-logs select").forEach(e=>e.addEventListener("change",I)),I()}function I(){const e=l("operationAppFilter","すべて"),s=l("operationTypeFilter","すべて");document.getElementById("operationLogsBody").innerHTML=n.data.operationLogs.filter(a=>e==="すべて"||a.app===e).filter(a=>s==="すべて"||a.eventName===s).map(a=>`<tr><td>${a.at}</td><td>${r(a.userName)}</td><td>${r(a.app)}</td><td>${r(a.feature)}</td><td>${r(a.eventName)}</td><td>${r(a.result)}</td><td>${r(a.targetId)}</td></tr>`).join("")}function k(){document.getElementById("login-logs").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>ログインログ</h3></div>
      <div class="filters">
        ${p("loginAppFilter","対象アプリ",["すべて",...n.data.masterData.apps],"すべて")}
        ${p("loginResultFilter","結果",["すべて","成功","失敗"],"すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>ログイン日時</th><th>ユーザ名</th><th>対象アプリ</th><th>結果</th><th>IPアドレス</th><th>失敗理由</th></tr></thead>
          <tbody id="loginLogsBody"></tbody>
        </table>
      </div>
    </article>
  `,document.querySelectorAll("#login-logs select").forEach(e=>e.addEventListener("change",A)),A()}function A(){const e=l("loginAppFilter","すべて"),s=l("loginResultFilter","すべて");document.getElementById("loginLogsBody").innerHTML=n.data.loginLogs.filter(a=>e==="すべて"||a.app===e).filter(a=>s==="すべて"||a.result===s).map(a=>`<tr><td>${a.at}</td><td>${r(a.userName)}</td><td>${r(a.app)}</td><td>${r(a.result)}</td><td>${r(a.ipAddress)}</td><td>${r(a.failureReason)}</td></tr>`).join("")}function T(){document.getElementById("error-monitor").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>エラー監視</h3></div>
      <div class="filters">
        ${p("errorAppFilter","対象アプリ",["すべて",...n.data.masterData.apps,"共通"],"すべて")}
        ${p("errorSeverityFilter","重大度",["すべて",...n.data.masterData.errorSeverities],"すべて")}
        ${p("errorStatusFilter","対応状況",["すべて",...n.data.masterData.errorStatuses],"すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>発生日時</th><th>エラーID</th><th>対象アプリ</th><th>概要</th><th>重大度</th><th>対応状況</th><th>初回発生</th><th>最新発生</th><th>担当状況</th></tr></thead>
          <tbody id="errorBody"></tbody>
        </table>
      </div>
    </article>
  `,document.querySelectorAll("#error-monitor select").forEach(e=>e.addEventListener("change",E)),E()}function E(){const e=l("errorAppFilter","すべて"),s=l("errorSeverityFilter","すべて"),a=l("errorStatusFilter","すべて");document.getElementById("errorBody").innerHTML=n.data.errors.filter(t=>e==="すべて"||t.app===e).filter(t=>s==="すべて"||t.severity===s).filter(t=>a==="すべて"||t.status===a).map(t=>`<tr><td>${t.at}</td><td>${r(t.id)}</td><td>${r(t.app)}</td><td>${r(t.summary)}</td><td><span class="badge ${P(t.severity)}">${r(t.severity)}</span></td><td>${r(t.status)}</td><td>${t.firstSeenAt}</td><td>${t.lastSeenAt}</td><td>${r(t.assignment)}</td></tr>`).join("")}function O(){B(),f(),L(),C(),M(),F(),z(),y(),k(),T()}function v(e,s){return`<div class="summary-card"><span>${e}</span><strong>${s}</strong></div>`}function h(e,s,a,t){return`<label><span>${s}</span><input id="${e}" type="${a}" value="${r(t)}" required></label>`}function p(e,s,a,t){return`
    <label>
      <span>${s}</span>
      <select id="${e}">
        ${a.map(i=>`<option value="${r(i)}" ${i===t?"selected":""}>${r(i)}</option>`).join("")}
      </select>
    </label>
  `}function P(e){return e==="Critical"?"critical":e==="Warning"?"warning":"info"}function l(e,s=""){return document.getElementById(e)?.value??s}function m(e,s=!1){const a=document.getElementById("flashMessage");a.textContent=e,a.classList.remove("hidden"),a.style.background=s?"#fcebea":"#edf8f0",a.style.color=s?"#a63c31":"#28784d",a.style.borderColor=s?"#efb4af":"#b5dfc1",window.setTimeout(()=>a.classList.add("hidden"),2800)}function r(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function b(){const e=new Date,s=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),d=String(e.getMinutes()).padStart(2,"0");return`${s}-${a}-${t} ${i}:${d}`}function x(e){return e.reduce((s,a)=>(s[a.category]||(s[a.category]=[]),s[a.category].push(a),s),{})}function q(e){return e.roles.map(s=>({...s,memberCount:e.users.filter(a=>a.role===s.name).length}))}

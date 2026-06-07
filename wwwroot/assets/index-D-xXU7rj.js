(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(i){if(i.ep)return;i.ep=!0;const d=a(i);fetch(i.href,d)}})();const b={tenant:{id:"TEN-001",name:"サンプル商事株式会社",status:"利用中",contractDate:"2026-04-01",startDate:"2026-04-15",plan:"Enterprise",novaUsage:{appName:"NOVA",enabled:!0,statusText:"本番利用中"},gomUsage:{appName:"GOM",enabled:!0,statusText:"一部部門で利用中"},adminName:"田中 花子",adminEmail:"tenant-admin@example.com",userCount:128,updatedAt:"2026-06-07 18:20",updatedBy:"佐藤 次郎"},users:[{id:"USR-001",name:"山田 太郎",email:"yamada@example.com",department:"営業本部",title:"課長",apps:["NOVA"],role:"承認者",active:!0},{id:"USR-002",name:"鈴木 一郎",email:"suzuki@example.com",department:"情報システム部",title:"主任",apps:["NOVA","GOM"],role:"管理者",active:!0},{id:"USR-003",name:"高橋 美咲",email:"takahashi@example.com",department:"経理部",title:"担当",apps:["GOM"],role:"一般利用者",active:!1}],notifications:[{id:"NTF-001",title:"新機能リリース: 承認フロー改善",type:"リリース",app:"NOVA",publishedAt:"2026-06-07 09:00",isRead:!1,summary:"NOVA に新しい承認ステップ設定機能を追加しました。"},{id:"NTF-002",title:"計画メンテナンスのお知らせ",type:"メンテナンス",app:"共通",publishedAt:"2026-06-06 15:30",isRead:!0,summary:"2026-06-10 22:00 からメンテナンスを実施します。"}],operationLogs:[{at:"2026-06-07 18:01",userName:"鈴木 一郎",app:"NOVA",feature:"エンドユーザ管理",eventName:"ユーザ登録",result:"成功",targetId:"USR-004"},{at:"2026-06-07 17:25",userName:"佐藤 次郎",app:"共通",feature:"テナント管理",eventName:"テナント更新",result:"成功",targetId:"TEN-001"},{at:"2026-06-07 16:48",userName:"鈴木 一郎",app:"GOM",feature:"認証",eventName:"パスワードリセット",result:"成功",targetId:"USR-003"}],loginLogs:[{at:"2026-06-07 18:10",userName:"鈴木 一郎",app:"NOVA",result:"成功",ipAddress:"10.10.1.15",failureReason:"-"},{at:"2026-06-07 17:55",userName:"山田 太郎",app:"GOM",result:"成功",ipAddress:"10.10.1.20",failureReason:"-"},{at:"2026-06-07 17:42",userName:"unknown@example.com",app:"NOVA",result:"失敗",ipAddress:"10.10.9.99",failureReason:"ユーザが存在しません"}],errors:[{id:"ERR-1001",at:"2026-06-07 17:40",app:"NOVA",summary:"バッチ連携処理でタイムアウトが発生",severity:"Critical",status:"発生中",firstSeenAt:"2026-06-07 16:55",lastSeenAt:"2026-06-07 17:40",assignment:"運用確認中"},{id:"ERR-2003",at:"2026-06-07 15:20",app:"GOM",summary:"一部通知送信の遅延",severity:"Warning",status:"未対応",firstSeenAt:"2026-06-07 14:50",lastSeenAt:"2026-06-07 15:20",assignment:"未着手"},{id:"ERR-3008",at:"2026-06-07 11:05",app:"共通",summary:"ログ集計ジョブの再試行完了",severity:"Info",status:"解消済み",firstSeenAt:"2026-06-07 10:48",lastSeenAt:"2026-06-07 11:05",assignment:"対応完了"}],masterData:{apps:["NOVA","GOM"],plans:["Standard","Professional","Enterprise"],tenantStatuses:["準備中","利用中","停止中"],departments:["営業本部","情報システム部","経理部","管理部"],roles:["一般利用者","承認者","管理者"],operationTypes:["ログイン","ログアウト","テナント更新","ユーザ登録","パスワードリセット","通知配信"],errorSeverities:["Critical","Warning","Info"],errorStatuses:["発生中","未対応","解消済み"]}},n={data:structuredClone(b),userName:"モック管理者",backendAvailable:!1},w={dashboard:{title:"ダッシュボード",description:"管理状況の要約を確認します。"},"tenant-view":{title:"テナント照会",description:"契約情報と利用状況を確認します。"},"tenant-edit":{title:"テナント編集",description:"テナント設定を更新します。"},"user-register":{title:"エンドユーザ登録",description:"新規利用者を登録します。"},"password-reset":{title:"パスワードリセット",description:"対象ユーザに再設定案内を送ります。"},"operation-logs":{title:"操作ログ",description:"主要な管理操作を追跡します。"},"login-logs":{title:"ログインログ",description:"ログイン履歴と失敗理由を確認します。"},"error-monitor":{title:"エラー監視",description:"重大度別に異常を確認します。"}};O();function O(){const e=document.getElementById("app");e&&(e.innerHTML=`
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
          ${Object.entries(w).map(([s,a],t)=>`<button data-view="${s}" class="nav-item ${t===0?"active":""}">${a.title}</button>`).join("")}
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
      </main>
    </div>
  `,M())}function M(){const e=document.getElementById("loginForm"),s=document.getElementById("logoutButton");e?.addEventListener("submit",async a=>{a.preventDefault(),n.userName=o("loginId","モック管理者"),await g(),C(),document.getElementById("currentUserName").textContent=n.userName,document.getElementById("loginView")?.classList.add("hidden"),document.getElementById("appShell")?.classList.remove("hidden")}),s?.addEventListener("click",()=>{document.getElementById("appShell")?.classList.add("hidden"),document.getElementById("loginView")?.classList.remove("hidden")})}async function g(){try{const e=await fetch("/api/bootstrap");if(!e.ok)throw new Error(`bootstrap failed: ${e.status}`);n.data=await e.json(),n.backendAvailable=!0}catch{n.data=structuredClone(b),n.backendAvailable=!1}}function C(){const e=document.getElementById("viewsHost");e.innerHTML=`
    <section id="dashboard" class="view active-view"></section>
    <section id="tenant-view" class="view"></section>
    <section id="tenant-edit" class="view"></section>
    <section id="user-register" class="view"></section>
    <section id="password-reset" class="view"></section>
    <section id="operation-logs" class="view"></section>
    <section id="login-logs" class="view"></section>
    <section id="error-monitor" class="view"></section>
  `,document.querySelectorAll(".nav-item").forEach(s=>{s.onclick=()=>E(s.dataset.view??"dashboard")}),N(),A(),S(),L(),B(),I(),D(),F(),T()}function N(){const e=document.getElementById("backendModeBadge");e.textContent=n.backendAvailable?"C# API Connected":"Frontend Mock",e.className=`badge ${n.backendAvailable?"success":"info"}`}function E(e){document.querySelectorAll(".view").forEach(a=>a.classList.remove("active-view")),document.getElementById(e)?.classList.add("active-view"),document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active")),document.querySelector(`[data-view="${e}"]`)?.classList.add("active");const s=w[e];document.getElementById("viewTitle").textContent=s.title,document.getElementById("viewDescription").textContent=s.description}function A(){const e=n.data,s=e.errors.filter(t=>t.severity==="Critical").length,a=e.notifications.filter(t=>!t.isRead).length;document.getElementById("dashboard").innerHTML=`
    <div class="hero">
      <div>
        <div class="eyebrow">OVERVIEW</div>
        <h3>${r(e.tenant.name)}</h3>
        <p>${r(`${e.tenant.status} | 契約プラン: ${e.tenant.plan} | 利用ユーザ数: ${e.tenant.userCount}`)}</p>
      </div>
      <div class="hero-stats">
        ${u("利用ユーザ",`${e.tenant.userCount}`)}
        ${u("重大エラー",`${s}`)}
        ${u("未読通知",`${a}`)}
        ${u("直近ログイン",`${e.loginLogs.length}`)}
      </div>
    </div>
    <div class="grid two-col">
      <article class="panel">
        <div class="panel-header"><h3>直近通知</h3></div>
        <div class="list">
          ${e.notifications.map(t=>`<div class="list-item"><h4>${r(t.title)}</h4><p>${r(t.summary)}</p><small>${t.publishedAt} | ${t.app}</small></div>`).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-header"><h3>重大エラー</h3></div>
        <div class="list">
          ${e.errors.filter(t=>t.severity==="Critical").map(t=>`<div class="list-item"><h4>${r(t.id)}</h4><p>${r(t.summary)}</p><small>${t.at} | ${t.app}</small></div>`).join("")}
        </div>
      </article>
    </div>
  `}function S(){const e=n.data.tenant,s=[["テナントID",e.id],["テナント名",e.name],["契約ステータス",e.status],["ベンダとの契約日",e.contractDate],["テナント利用開始日",e.startDate],["契約プラン",e.plan],["NOVA利用状況",e.novaUsage.statusText],["GOM利用状況",e.gomUsage.statusText],["管理者名",e.adminName],["管理者メールアドレス",e.adminEmail],["利用ユーザ数",`${e.userCount}`],["最終更新",`${e.updatedAt} / ${e.updatedBy}`]];document.getElementById("tenant-view").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>テナント情報</h3></div>
      <div class="detail-grid">
        ${s.map(([a,t])=>`<div class="detail-item"><span>${a}</span><strong>${r(t)}</strong></div>`).join("")}
      </div>
    </article>
  `}function L(){const e=n.data,s=e.tenant,a=document.getElementById("tenant-edit");a.innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>テナント情報編集</h3></div>
      <form id="tenantForm" class="stacked-form two-up">
        ${l("tenantStatus","契約ステータス",e.masterData.tenantStatuses,s.status)}
        ${p("contractDate","ベンダとの契約日","date",s.contractDate)}
        ${p("startDate","テナント利用開始日","date",s.startDate)}
        ${l("plan","契約プラン",e.masterData.plans,s.plan)}
        ${p("novaUsage","NOVA利用設定","text",s.novaUsage.statusText)}
        ${p("gomUsage","GOM利用設定","text",s.gomUsage.statusText)}
        ${p("adminName","テナント管理者名","text",s.adminName)}
        ${p("adminEmail","テナント管理者メールアドレス","email",s.adminEmail)}
        <div class="form-actions full"><button type="submit" class="primary">保存</button></div>
      </form>
    </article>
  `,document.getElementById("tenantForm").onsubmit=async t=>{t.preventDefault();const i={status:o("tenantStatus"),contractDate:o("contractDate"),startDate:o("startDate"),plan:o("plan"),novaUsage:o("novaUsage"),gomUsage:o("gomUsage"),adminName:o("adminName"),adminEmail:o("adminEmail")};if(n.backendAvailable){const c=await(await fetch("/api/tenant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json();n.data.tenant=c.data,m(c.message)}else n.data.tenant={...n.data.tenant,status:i.status,contractDate:i.contractDate,startDate:i.startDate,plan:i.plan,novaUsage:{...n.data.tenant.novaUsage,statusText:i.novaUsage},gomUsage:{...n.data.tenant.gomUsage,statusText:i.gomUsage},adminName:i.adminName,adminEmail:i.adminEmail,updatedAt:v(),updatedBy:n.userName},n.data.operationLogs.unshift({at:v(),userName:n.userName,app:"共通",feature:"テナント管理",eventName:"テナント更新",result:"成功",targetId:n.data.tenant.id}),m("フロントモック上でテナント情報を更新しました。");h(),E("tenant-view")}}function B(){const e=n.data,s=document.getElementById("user-register");s.innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>エンドユーザ登録</h3></div>
      <form id="userForm" class="stacked-form two-up">
        ${p("userEmail","メールアドレス","email","")}
        ${p("userName","名前","text","")}
        ${l("userDepartment","部署等の所属",e.masterData.departments,e.masterData.departments[0])}
        ${p("userTitle","役職","text","")}
        ${l("userApp","利用アプリ",e.masterData.apps,e.masterData.apps[0])}
        ${l("userRole","権限、ロール",e.masterData.roles,e.masterData.roles[0])}
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
  `,document.getElementById("userForm").onsubmit=async a=>{a.preventDefault();const t={email:o("userEmail"),name:o("userName"),department:o("userDepartment"),title:o("userTitle"),apps:[o("userApp")],role:o("userRole"),sendNotification:o("userSendNotification")==="true"};if(n.backendAvailable){const d=await(await fetch("/api/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();n.data.users.unshift(d.data),m(d.message),await g()}else{const i={id:`USR-${String(n.data.users.length+1).padStart(3,"0")}`,name:t.name,email:t.email,department:t.department,title:t.title,apps:t.apps,role:t.role,active:!0};n.data.users.unshift(i),n.data.tenant.userCount+=1,n.data.operationLogs.unshift({at:v(),userName:n.userName,app:t.apps[0],feature:"エンドユーザ管理",eventName:"ユーザ登録",result:"成功",targetId:i.id}),m("フロントモック上でユーザを登録しました。")}h(),document.getElementById("userForm").reset()}}function I(){const e=document.getElementById("password-reset");e.innerHTML=`
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
    `)};s.onchange=a,a(),document.getElementById("resetForm").onsubmit=async t=>{if(t.preventDefault(),!document.getElementById("resetConfirm").checked){m("確認チェックを付けてください。",!0);return}if(n.backendAvailable){const c=await(await fetch("/api/users/password-reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:s.value})})).json();m(c.message),await g()}else{const d=n.data.users.find(c=>c.id===s.value);if(!d){m("対象ユーザが見つかりません。",!0);return}n.data.operationLogs.unshift({at:v(),userName:n.userName,app:d.apps[0]??"共通",feature:"認証",eventName:"パスワードリセット",result:"成功",targetId:d.id}),m("フロントモック上でパスワードリセットを受け付けました。")}h()}}function D(){document.getElementById("operation-logs").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>操作ログ</h3></div>
      <div class="filters">
        ${l("operationAppFilter","対象アプリ",["すべて",...n.data.masterData.apps,"共通"],"すべて")}
        ${l("operationTypeFilter","イベント種別",["すべて",...n.data.masterData.operationTypes],"すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>操作日時</th><th>操作者</th><th>対象アプリ</th><th>対象機能</th><th>イベント</th><th>結果</th><th>対象ID</th></tr></thead>
          <tbody id="operationLogsBody"></tbody>
        </table>
      </div>
    </article>
  `,document.querySelectorAll("#operation-logs select").forEach(e=>e.addEventListener("change",f)),f()}function f(){const e=o("operationAppFilter","すべて"),s=o("operationTypeFilter","すべて");document.getElementById("operationLogsBody").innerHTML=n.data.operationLogs.filter(a=>e==="すべて"||a.app===e).filter(a=>s==="すべて"||a.eventName===s).map(a=>`<tr><td>${a.at}</td><td>${r(a.userName)}</td><td>${r(a.app)}</td><td>${r(a.feature)}</td><td>${r(a.eventName)}</td><td>${r(a.result)}</td><td>${r(a.targetId)}</td></tr>`).join("")}function F(){document.getElementById("login-logs").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>ログインログ</h3></div>
      <div class="filters">
        ${l("loginAppFilter","対象アプリ",["すべて",...n.data.masterData.apps],"すべて")}
        ${l("loginResultFilter","結果",["すべて","成功","失敗"],"すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>ログイン日時</th><th>ユーザ名</th><th>対象アプリ</th><th>結果</th><th>IPアドレス</th><th>失敗理由</th></tr></thead>
          <tbody id="loginLogsBody"></tbody>
        </table>
      </div>
    </article>
  `,document.querySelectorAll("#login-logs select").forEach(e=>e.addEventListener("change",y)),y()}function y(){const e=o("loginAppFilter","すべて"),s=o("loginResultFilter","すべて");document.getElementById("loginLogsBody").innerHTML=n.data.loginLogs.filter(a=>e==="すべて"||a.app===e).filter(a=>s==="すべて"||a.result===s).map(a=>`<tr><td>${a.at}</td><td>${r(a.userName)}</td><td>${r(a.app)}</td><td>${r(a.result)}</td><td>${r(a.ipAddress)}</td><td>${r(a.failureReason)}</td></tr>`).join("")}function T(){document.getElementById("error-monitor").innerHTML=`
    <article class="panel">
      <div class="panel-header"><h3>エラー監視</h3></div>
      <div class="filters">
        ${l("errorAppFilter","対象アプリ",["すべて",...n.data.masterData.apps,"共通"],"すべて")}
        ${l("errorSeverityFilter","重大度",["すべて",...n.data.masterData.errorSeverities],"すべて")}
        ${l("errorStatusFilter","対応状況",["すべて",...n.data.masterData.errorStatuses],"すべて")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>発生日時</th><th>エラーID</th><th>対象アプリ</th><th>概要</th><th>重大度</th><th>対応状況</th><th>初回発生</th><th>最新発生</th><th>担当状況</th></tr></thead>
          <tbody id="errorBody"></tbody>
        </table>
      </div>
    </article>
  `,document.querySelectorAll("#error-monitor select").forEach(e=>e.addEventListener("change",$)),$()}function $(){const e=o("errorAppFilter","すべて"),s=o("errorSeverityFilter","すべて"),a=o("errorStatusFilter","すべて");document.getElementById("errorBody").innerHTML=n.data.errors.filter(t=>e==="すべて"||t.app===e).filter(t=>s==="すべて"||t.severity===s).filter(t=>a==="すべて"||t.status===a).map(t=>`<tr><td>${t.at}</td><td>${r(t.id)}</td><td>${r(t.app)}</td><td>${r(t.summary)}</td><td><span class="badge ${U(t.severity)}">${r(t.severity)}</span></td><td>${r(t.status)}</td><td>${t.firstSeenAt}</td><td>${t.lastSeenAt}</td><td>${r(t.assignment)}</td></tr>`).join("")}function h(){N(),A(),S(),L(),B(),I(),D(),F(),T()}function u(e,s){return`<div class="summary-card"><span>${e}</span><strong>${s}</strong></div>`}function p(e,s,a,t){return`<label><span>${s}</span><input id="${e}" type="${a}" value="${r(t)}" required></label>`}function l(e,s,a,t){return`
    <label>
      <span>${s}</span>
      <select id="${e}">
        ${a.map(i=>`<option value="${r(i)}" ${i===t?"selected":""}>${r(i)}</option>`).join("")}
      </select>
    </label>
  `}function U(e){return e==="Critical"?"critical":e==="Warning"?"warning":"info"}function o(e,s=""){return document.getElementById(e)?.value??s}function m(e,s=!1){const a=document.getElementById("flashMessage");a.textContent=e,a.classList.remove("hidden"),a.style.background=s?"#fcebea":"#edf8f0",a.style.color=s?"#a63c31":"#28784d",a.style.borderColor=s?"#efb4af":"#b5dfc1",window.setTimeout(()=>a.classList.add("hidden"),2800)}function r(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function v(){const e=new Date,s=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),d=String(e.getMinutes()).padStart(2,"0");return`${s}-${a}-${t} ${i}:${d}`}

function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,h,m=!1;function p(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function g(e,t){if(m){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const s=t[n];void 0!==s.claim_order&&e.push(s)}t=e}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(r>0&&t[n[r]].claim_order<=o?r+1:p(1,r,(e=>t[n[e]].claim_order),o))-1;s[e]=n[i]+1;const a=i+1;n[a]=e,r=Math.max(a,r)}const o=[],i=[];let a=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(i[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function b(e,t,n){m&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function E(){return x(" ")}function S(){return x("")}function T(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function k(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:k(e,s,t[s])}function P(e){return Array.from(e.childNodes)}function R(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function I(e,t,n,s,r=!1){R(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function L(e,t,n,s){return I(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s(t)))}function C(e,t,n){return L(e,t,n,w)}function O(e,t,n){return L(e,t,n,y)}function U(e,t){return I(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>x(t)),!0)}function H(e){return U(e," ")}function D(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function M(e,t){const n=D(e,"HTML_TAG_START",0),s=D(e,"HTML_TAG_END",n);if(n===s)return new F(void 0,t);R(e);const r=e.splice(n,s-n+1);_(r[0]),_(r[r.length-1]);const o=r.slice(1,r.length-1);for(const t of o)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new F(o,t)}function G(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function j(e,t){e.value=null==t?"":t}function B(e,t,n,s){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function z(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=q();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(s||r&&n.contentWindow)&&r(),_(n)}}function V(e,t=document.body){return Array.from(t.querySelectorAll(e))}class K{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=y(t.nodeName):this.e=w(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(_)}}class F extends K{constructor(e,t=!1){super(t),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}}function J(e){h=e}function W(){if(!h)throw new Error("Function called outside component initialization");return h}function Y(e){W().$$.on_mount.push(e)}function Q(e){W().$$.after_update.push(e)}function X(e){W().$$.on_destroy.push(e)}const Z=[],ee=[],te=[],ne=[],se=Promise.resolve();let re=!1;function oe(e){te.push(e)}const ie=new Set;let ae=0;function ce(){const e=h;do{for(;ae<Z.length;){const e=Z[ae];ae++,J(e),le(e.$$)}for(J(null),Z.length=0,ae=0;ee.length;)ee.pop()();for(let e=0;e<te.length;e+=1){const t=te[e];ie.has(t)||(ie.add(t),t())}te.length=0}while(Z.length);for(;ne.length;)ne.pop()();re=!1,ie.clear(),J(e)}function le(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(oe)}}const ue=new Set;let de;function fe(){de={r:0,c:[],p:de}}function he(){de.r||r(de.c),de=de.p}function me(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function pe(e,t,n,s){if(e&&e.o){if(ue.has(e))return;ue.add(e),de.c.push((()=>{ue.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}function ge(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(s[e]=1);for(const e in a)r[e]||(n[e]=a[e],r[e]=1);e[o]=a}else for(const e in i)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function ve(e){return"object"==typeof e&&null!==e?e:{}}function be(e){e&&e.c()}function _e(e,t){e&&e.l(t)}function $e(e,t,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,s),i||oe((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(oe)}function we(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){-1===e.$$.dirty[0]&&(Z.push(e),re||(re=!0,se.then(ce)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(t,n,o,i,a,c,l,u=[-1]){const d=h;J(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&ye(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){m=!0;const e=P(n.target);f.fragment&&f.fragment.l(e),e.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&me(t.$$.fragment),$e(t,n.target,n.anchor,n.customElement),m=!1,ce()}J(d)}class Ee{$destroy(){we(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Se=[];function Te(t,n=e){let s;const r=new Set;function o(e){if(i(t,e)&&(t=e,s)){const e=!Se.length;for(const e of r)e[1](),Se.push(e,t);if(e){for(let e=0;e<Se.length;e+=2)Se[e][0](Se[e+1]);Se.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||e),i(t),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Ae={};var ke={owner:"NekoGamesRepo",repo:"status",sites:[{name:"Pachinko",url:"https://redirector32.valueactive.eu/Casino/Default.aspx?applicationid=4023&sext1=demo&sext2=demo&serverid=22619&gameid=Pachinko&ul=en&variant=UAT-demo",icon:"https://marketing.neko.games/img/Pachinko_Animation600x350.gif"},{name:"Showball",url:"https://redirector32.valueactive.eu/Casino/Default.aspx?applicationid=4023&sext1=demo&sext2=demo&serverid=22619&gameid=SuperShowball&ul=en&variant=UAT-demo",icon:"https://marketing.neko.games/img/SuperShowball_Animation600x350.gif"},{name:"Fu 88",url:"https://redirector32.valueactive.eu/Casino/Default.aspx?applicationid=4023&sext1=demo&sext2=demo&serverid=22619&gameid=Fu88&ul=en&variant=UAT-demo",icon:"https://marketing.neko.games/img/Fu88_Animation600x350.gif"},{name:"Bingote",url:"https://redirector32.valueactive.eu/Casino/Default.aspx?applicationid=4023&sext1=demo&sext2=demo&serverid=22619&gameid=Bingote&ul=en&variant=UAT-demo",icon:"https://marketing.neko.games/img/Bingote_Animation525x350.gif"},{name:"Golden Quest",url:"https://redirector32.valueactive.eu/Casino/Default.aspx?applicationid=4023&sext1=demo&sext2=demo&serverid=22619&gameid=1524GoldenQuest&ul=en&variant=UAT-demo",icon:"https://marketing.neko.games/img/1524GoldenQuest_Animation524x350.gif"},{name:"Immortal Romance",url:"https://redirector32.valueactive.eu/Casino/Default.aspx?applicationid=4023&sext1=demo&sext2=demo&serverid=22619&gameid=ImmortalRomanceVideoBingo&ul=en&variant=UAT-demo",icon:"https://marketing.neko.games/img/ImmortalRomanceVideoBingo_Button_Rectangle.png"}],"status-website":{baseUrl:"/status",logoUrl:"https://marketing.neko.games/img/splash.png",name:"Games Status Page",introTitle:"**Neko** Status page for neko Games",introMessage:"This is a page that show the status of neko games",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://NekoGamesRepo.github.io/status",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Ne(e,t,n){const s=e.slice();return s[1]=t[n],s}function Pe(t){let n,s,r,o=ke["status-website"]&&!ke["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=w("img"),this.h()},l(e){n=C(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){k(n,"alt",""),c(n.src,s=ke["status-website"].logoUrl)||k(n,"src",s),k(n,"class","svelte-a08hsz")},m(e,t){b(e,n,t)},p:e,d(e){e&&_(n)}}}(),i=ke["status-website"]&&!ke["status-website"].hideNavTitle&&function(t){let n,s,r=ke["status-website"].name+"";return{c(){n=w("div"),s=x(r)},l(e){n=C(e,"DIV",{});var t=P(n);s=U(t,r),t.forEach(_)},m(e,t){b(e,n,t),g(n,s)},p:e,d(e){e&&_(n)}}}();return{c(){n=w("div"),s=w("a"),o&&o.c(),r=E(),i&&i.c(),this.h()},l(e){n=C(e,"DIV",{});var t=P(n);s=C(t,"A",{href:!0,class:!0});var a=P(s);o&&o.l(a),r=H(a),i&&i.l(a),a.forEach(_),t.forEach(_),this.h()},h(){k(s,"href",ke["status-website"].logoHref||ke.path),k(s,"class","logo svelte-a08hsz")},m(e,t){b(e,n,t),g(n,s),o&&o.m(s,null),g(s,r),i&&i.m(s,null)},p(e,t){ke["status-website"]&&!ke["status-website"].hideNavLogo&&o.p(e,t),ke["status-website"]&&!ke["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&_(n),o&&o.d(),i&&i.d()}}}function Re(e){let t,n,s,r,o,i=e[1].title+"";return{c(){t=w("li"),n=w("a"),s=x(i),o=E(),this.h()},l(e){t=C(e,"LI",{});var r=P(t);n=C(r,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=P(n);s=U(a,i),a.forEach(_),o=H(r),r.forEach(_),this.h()},h(){k(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),k(n,"href",e[1].href.replace("$OWNER",ke.owner).replace("$REPO",ke.repo)),k(n,"target",e[1].target||"_self"),k(n,"class","svelte-a08hsz")},m(e,r){b(e,t,r),g(t,n),g(n,s),g(t,o)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&k(n,"aria-current",r)},d(e){e&&_(t)}}}function Ie(t){let n,s,r,o,i,a=ke["status-website"]&&ke["status-website"].logoUrl&&Pe(),c=ke["status-website"]&&ke["status-website"].navbar&&function(e){let t,n=ke["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Re(Ne(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(1&r){let o;for(n=ke["status-website"].navbar,o=0;o<n.length;o+=1){const i=Ne(e,n,o);s[o]?s[o].p(i,r):(s[o]=Re(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&_(t)}}}(t),l=ke["status-website"]&&ke["status-website"].navbarGitHub&&!ke["status-website"].navbar&&function(t){let n,s,r,o=ke.i18n.navGitHub+"";return{c(){n=w("li"),s=w("a"),r=x(o),this.h()},l(e){n=C(e,"LI",{});var t=P(n);s=C(t,"A",{href:!0,class:!0});var i=P(s);r=U(i,o),i.forEach(_),t.forEach(_),this.h()},h(){k(s,"href",`https://github.com/${ke.owner}/${ke.repo}`),k(s,"class","svelte-a08hsz")},m(e,t){b(e,n,t),g(n,s),g(s,r)},p:e,d(e){e&&_(n)}}}();return{c(){n=w("nav"),s=w("div"),a&&a.c(),r=E(),o=w("ul"),c&&c.c(),i=E(),l&&l.c(),this.h()},l(e){n=C(e,"NAV",{class:!0});var t=P(n);s=C(t,"DIV",{class:!0});var u=P(s);a&&a.l(u),r=H(u),o=C(u,"UL",{class:!0});var d=P(o);c&&c.l(d),i=H(d),l&&l.l(d),d.forEach(_),u.forEach(_),t.forEach(_),this.h()},h(){k(o,"class","svelte-a08hsz"),k(s,"class","container svelte-a08hsz"),k(n,"class","svelte-a08hsz")},m(e,t){b(e,n,t),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(e,[t]){ke["status-website"]&&ke["status-website"].logoUrl&&a.p(e,t),ke["status-website"]&&ke["status-website"].navbar&&c.p(e,t),ke["status-website"]&&ke["status-website"].navbarGitHub&&!ke["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Le(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Ce extends Ee{constructor(e){super(),xe(this,e,Le,Ie,i,{segment:0})}}var Oe={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ue(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function He(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function De(e,t){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},d=0;function f(e){var t=Oe[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(e);)s=e.substring(d,r.index),d=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ue(He(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=De(Ue(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+He(r[8])+'" alt="'+He(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+He(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+De(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+He(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Me(e,t,n){const s=e.slice();return s[3]=t[n],s}function Ge(e,t,n){const s=e.slice();return s[3]=t[n],s}function je(e,t,n){const s=e.slice();return s[8]=t[n],s}function Be(t){let n;return{c(){n=w("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){k(n,"rel","stylesheet"),k(n,"href",`${ke.path}/themes/${(ke["status-website"]||{}).theme||"light"}.css`)},m(e,t){b(e,n,t)},p:e,d(e){e&&_(n)}}}function qe(t){let n;return{c(){n=w("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){k(n,"rel","stylesheet"),k(n,"href",(ke["status-website"]||{}).themeUrl)},m(e,t){b(e,n,t)},p:e,d(e){e&&_(n)}}}function ze(t){let n,s;return{c(){n=w("script"),this.h()},l(e){n=C(e,"SCRIPT",{src:!0}),P(n).forEach(_),this.h()},h(){c(n.src,s=t[8].src)||k(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){b(e,n,t)},p:e,d(e){e&&_(n)}}}function Ve(t){let n;return{c(){n=w("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){k(n,"rel",t[3].rel),k(n,"href",t[3].href),k(n,"media",t[3].media)},m(e,t){b(e,n,t)},p:e,d(e){e&&_(n)}}}function Ke(t){let n;return{c(){n=w("meta"),this.h()},l(e){n=C(e,"META",{name:!0,content:!0}),this.h()},h(){k(n,"name",t[3].name),k(n,"content",t[3].content)},m(e,t){b(e,n,t)},p:e,d(e){e&&_(n)}}}function Fe(t){let n,s,r,o,i,a,c,u,d,f,h,m,p,v,y,x,T,A,N=De(ke.i18n.footer.replace(/\$REPO/,`https://github.com/${ke.owner}/${ke.repo}`))+"",R=(ke["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(ke["status-website"]||{}).customHeadHtml+"";return{c(){n=new F(!1),s=S(),this.h()},l(e){n=M(e,!1),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}();let I=((ke["status-website"]||{}).themeUrl?qe:Be)(t),L=(ke["status-website"]||{}).scripts&&function(e){let t,n=(ke["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=ze(je(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(0&r){let o;for(n=(ke["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=je(e,n,o);s[o]?s[o].p(i,r):(s[o]=ze(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&_(t)}}}(t),O=(ke["status-website"]||{}).links&&function(e){let t,n=(ke["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ve(Ge(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(0&r){let o;for(n=(ke["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Ge(e,n,o);s[o]?s[o].p(i,r):(s[o]=Ve(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&_(t)}}}(t),U=(ke["status-website"]||{}).metaTags&&function(e){let t,n=(ke["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ke(Me(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=S()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=S()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(0&r){let o;for(n=(ke["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Me(e,n,o);s[o]?s[o].p(i,r):(s[o]=Ke(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&_(t)}}}(t),D=ke["status-website"].css&&function(t){let n,s,r=`<style>${ke["status-website"].css}</style>`;return{c(){n=new F(!1),s=S(),this.h()},l(e){n=M(e,!1),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}(),G=ke["status-website"].js&&function(t){let n,s,r=`<script>${ke["status-website"].js}<\/script>`;return{c(){n=new F(!1),s=S(),this.h()},l(e){n=M(e,!1),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}(),j=(ke["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(ke["status-website"]||{}).customBodyHtml+"";return{c(){n=new F(!1),s=S(),this.h()},l(e){n=M(e,!1),s=S(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}();m=new Ce({props:{segment:t[0]}});const B=t[2].default,q=function(e,t,n,s){if(e){const r=l(e,t,n,s);return e[0](r)}}(B,t,t[1],null);return{c(){R&&R.c(),n=S(),I.c(),s=w("link"),r=w("link"),o=w("link"),L&&L.c(),i=S(),O&&O.c(),a=S(),U&&U.c(),c=S(),D&&D.c(),u=S(),G&&G.c(),d=S(),f=E(),j&&j.c(),h=E(),be(m.$$.fragment),p=E(),v=w("main"),q&&q.c(),y=E(),x=w("footer"),T=w("p"),this.h()},l(e){const t=V('[data-svelte="svelte-fmspuk"]',document.head);R&&R.l(t),n=S(),I.l(t),s=C(t,"LINK",{rel:!0,href:!0}),r=C(t,"LINK",{rel:!0,type:!0,href:!0}),o=C(t,"LINK",{rel:!0,type:!0,href:!0}),L&&L.l(t),i=S(),O&&O.l(t),a=S(),U&&U.l(t),c=S(),D&&D.l(t),u=S(),G&&G.l(t),d=S(),t.forEach(_),f=H(e),j&&j.l(e),h=H(e),_e(m.$$.fragment,e),p=H(e),v=C(e,"MAIN",{class:!0});var l=P(v);q&&q.l(l),l.forEach(_),y=H(e),x=C(e,"FOOTER",{class:!0});var g=P(x);T=C(g,"P",{}),P(T).forEach(_),g.forEach(_),this.h()},h(){k(s,"rel","stylesheet"),k(s,"href",`${ke.path}/global.css`),k(r,"rel","icon"),k(r,"type","image/svg"),k(r,"href",(ke["status-website"]||{}).faviconSvg||(ke["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),k(o,"rel","icon"),k(o,"type","image/png"),k(o,"href",(ke["status-website"]||{}).favicon||"/logo-192.png"),k(v,"class","container"),k(x,"class","svelte-jbr799")},m(e,t){R&&R.m(document.head,null),g(document.head,n),I.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),L&&L.m(document.head,null),g(document.head,i),O&&O.m(document.head,null),g(document.head,a),U&&U.m(document.head,null),g(document.head,c),D&&D.m(document.head,null),g(document.head,u),G&&G.m(document.head,null),g(document.head,d),b(e,f,t),j&&j.m(e,t),b(e,h,t),$e(m,e,t),b(e,p,t),b(e,v,t),q&&q.m(v,null),b(e,y,t),b(e,x,t),g(x,T),T.innerHTML=N,A=!0},p(e,[t]){(ke["status-website"]||{}).customHeadHtml&&R.p(e,t),I.p(e,t),(ke["status-website"]||{}).scripts&&L.p(e,t),(ke["status-website"]||{}).links&&O.p(e,t),(ke["status-website"]||{}).metaTags&&U.p(e,t),ke["status-website"].css&&D.p(e,t),ke["status-website"].js&&G.p(e,t),(ke["status-website"]||{}).customBodyHtml&&j.p(e,t);const n={};1&t&&(n.segment=e[0]),m.$set(n),q&&q.p&&(!A||2&t)&&function(e,t,n,s,r,o){if(r){const i=l(t,n,s,o);e.p(i,r)}}(q,B,e,e[1],A?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(B,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(me(m.$$.fragment,e),me(q,e),A=!0)},o(e){pe(m.$$.fragment,e),pe(q,e),A=!1},d(e){R&&R.d(e),_(n),I.d(e),_(s),_(r),_(o),L&&L.d(e),_(i),O&&O.d(e),_(a),U&&U.d(e),_(c),D&&D.d(e),_(u),G&&G.d(e),_(d),e&&_(f),j&&j.d(e),e&&_(h),we(m,e),e&&_(p),e&&_(v),q&&q.d(e),e&&_(y),e&&_(x)}}}function Je(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class We extends Ee{constructor(e){super(),xe(this,e,Je,Fe,i,{segment:0})}}function Ye(e){let t,n,s=e[1].stack+"";return{c(){t=w("pre"),n=x(s)},l(e){t=C(e,"PRE",{});var r=P(t);n=U(r,s),r.forEach(_)},m(e,s){b(e,t,s),g(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&G(n,s)},d(e){e&&_(t)}}}function Qe(t){let n,s,r,o,i,a,c,l,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&Ye(t);return{c(){s=E(),r=w("h1"),o=x(t[0]),i=E(),a=w("p"),c=x(d),l=E(),f&&f.c(),u=S(),this.h()},l(e){V('[data-svelte="svelte-1moakz"]',document.head).forEach(_),s=H(e),r=C(e,"H1",{class:!0});var n=P(r);o=U(n,t[0]),n.forEach(_),i=H(e),a=C(e,"P",{class:!0});var h=P(a);c=U(h,d),h.forEach(_),l=H(e),f&&f.l(e),u=S(),this.h()},h(){k(r,"class","svelte-17w3omn"),k(a,"class","svelte-17w3omn")},m(e,t){b(e,s,t),b(e,r,t),g(r,o),b(e,i,t),b(e,a,t),g(a,c),b(e,l,t),f&&f.m(e,t),b(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&G(o,e[0]),2&t&&d!==(d=e[1].message+"")&&G(c,d),e[2]&&e[1].stack?f?f.p(e,t):(f=Ye(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&_(s),e&&_(r),e&&_(i),e&&_(a),e&&_(l),f&&f.d(e),e&&_(u)}}}function Xe(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Ze extends Ee{constructor(e){super(),xe(this,e,Xe,Qe,i,{status:0,error:1})}}function et(e){let n,s,r;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&be(n.$$.fragment),s=S()},l(e){n&&_e(n.$$.fragment,e),s=S()},m(e,t){n&&$e(n,e,t),b(e,s,t),r=!0},p(e,t){const r=16&t?ge(o,[ve(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){fe();const e=n;pe(e.$$.fragment,1,0,(()=>{we(e,1)})),he()}i?(n=new i(a()),be(n.$$.fragment),me(n.$$.fragment,1),$e(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(e){r||(n&&me(n.$$.fragment,e),r=!0)},o(e){n&&pe(n.$$.fragment,e),r=!1},d(e){e&&_(s),n&&we(n,e)}}}function tt(e){let t,n;return t=new Ze({props:{error:e[0],status:e[1]}}),{c(){be(t.$$.fragment)},l(e){_e(t.$$.fragment,e)},m(e,s){$e(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(me(t.$$.fragment,e),n=!0)},o(e){pe(t.$$.fragment,e),n=!1},d(e){we(t,e)}}}function nt(e){let t,n,s,r;const o=[tt,et],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),s=S()},l(e){n.l(e),s=S()},m(e,n){i[t].m(e,n),b(e,s,n),r=!0},p(e,r){let c=t;t=a(e),t===c?i[t].p(e,r):(fe(),pe(i[c],1,1,(()=>{i[c]=null})),he(),n=i[t],n?n.p(e,r):(n=i[t]=o[t](e),n.c()),me(n,1),n.m(s.parentNode,s))},i(e){r||(me(n),r=!0)},o(e){pe(n),r=!1},d(e){i[t].d(e),e&&_(s)}}}function st(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[nt]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new We({props:o}),{c(){be(n.$$.fragment)},l(e){_e(n.$$.fragment,e)},m(e,t){$e(n,e,t),s=!0},p(e,[t]){const s=12&t?ge(r,[4&t&&{segment:e[2][0]},8&t&&ve(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(me(n.$$.fragment,e),s=!0)},o(e){pe(n.$$.fragment,e),s=!1},d(e){we(n,e)}}}function rt(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,d;return Q(l),u=Ae,d=s,W().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,i,a,c,s,l]}class ot extends Ee{constructor(e){super(),xe(this,e,rt,st,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const it=[],at=[{js:()=>Promise.all([import("./index.d75e2c6d.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.1794a49e.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.30130324.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.e8d7c9f0.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.7aad3e17.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],ct=(lt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:lt(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:lt(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var lt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ut(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function a(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))}function dt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ft,ht=1;const mt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},pt={};let gt,vt;function bt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function _t(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(gt))return null;let t=e.pathname.slice(gt.length);if(""===t&&(t="/"),!it.some((e=>e.test(t))))for(let n=0;n<ct.length;n+=1){const s=ct[n],r=s.pattern.exec(t);if(r){const n=bt(e.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:s,match:r,page:a}}}}function $t(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=dt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=_t(r);if(o){xt(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),mt.pushState({id:ft},"",r.href)}}function wt(){return{x:pageXOffset,y:pageYOffset}}function yt(e){if(pt[ft]=wt(),e.state){const t=_t(new URL(location.href));t?xt(t,e.state.id):location.href=location.href}else!function(e){ht=e}(ht+1),function(e){ft=e}(ht),mt.replaceState({id:ft},"",location.href)}function xt(e,t,n,s){return ut(this,void 0,void 0,(function*(){const r=!!t;if(r)ft=t;else{const e=wt();pt[ft]=e,ft=t=++ht,pt[ft]=n?e:{x:0,y:0}}if(yield vt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=pt[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),pt[ft]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Et(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let St,Tt=null;function At(e){const t=dt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=_t(new URL(e,Et(document)));if(t)Tt&&e===Tt.href||(Tt={href:e,promise:zt(t)}),Tt.promise}(t.href)}function kt(e){clearTimeout(St),St=setTimeout((()=>{At(e)}),20)}function Nt(e,t={noscroll:!1,replaceState:!1}){const n=_t(new URL(e,Et(document)));if(n){const s=xt(n,null,t.noscroll);return mt[t.replaceState?"replaceState":"pushState"]({id:ft},"",e),s}return location.href=e,new Promise((()=>{}))}const Pt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Rt,It,Lt,Ct=!1,Ot=[],Ut="{}";const Ht={page:function(e){const t=Te(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:Te(null),session:Te(Pt&&Pt.session)};let Dt,Mt,Gt;function jt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Bt(e){return ut(this,void 0,void 0,(function*(){Rt&&Ht.preloading.set(!0);const t=function(e){return Tt&&Tt.href===e.href?Tt.promise:zt(e)}(e),n=It={},s=yield t,{redirect:r}=s;if(n===It)if(r)yield Nt(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield qt(n,t,jt(t,e.page))}}))}function qt(e,t,n){return ut(this,void 0,void 0,(function*(){Ht.page.set(n),Ht.preloading.set(!1),Rt?Rt.$set(t):(t.stores={page:{subscribe:Ht.page.subscribe},preloading:{subscribe:Ht.preloading.subscribe},session:Ht.session},t.level0={props:yield Lt},t.notify=Ht.page.notify,Rt=new ot({target:Gt,props:t,hydrate:!0})),Ot=e,Ut=JSON.stringify(n.query),Ct=!0,Mt=!1}))}function zt(e){return ut(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Lt){const e=()=>({});Lt=Pt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Dt)}let a,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>ut(this,void 0,void 0,(function*(){const d=s[a];if(function(e,t,n,s){if(s!==Ut)return!0;const r=Ot[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,d,l,r)&&(u=!0),o.segments[c]=s[a+1],!t)return{segment:d};const f=c++;let h;if(Mt||u||!Ot[a]||Ot[a].part!==t.i){u=!1;const{default:s,preload:r}=yield at[t.i].js();let o;o=Ct||!Pt.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Dt):{}:Pt.preloaded[a+1],h={component:s,props:o,segment:d,match:l,part:t.i}}else h=Ot[a];return o[`level${f}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Vt,Kt,Ft;Ht.session.subscribe((e=>ut(void 0,void 0,void 0,(function*(){if(Dt=e,!Ct)return;Mt=!0;const t=_t(new URL(location.href)),n=It={},{redirect:s,props:r,branch:o}=yield zt(t);n===It&&(s?yield Nt(s.location,{replaceState:!0}):yield qt(o,r,jt(r,t.page)))})))),Vt={target:document.querySelector("#sapper")},Kt=Vt.target,Gt=Kt,Ft=Pt.baseUrl,gt=Ft,vt=Bt,"scrollRestoration"in mt&&(mt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{mt.scrollRestoration="auto"})),addEventListener("load",(()=>{mt.scrollRestoration="manual"})),addEventListener("click",$t),addEventListener("popstate",yt),addEventListener("touchstart",At),addEventListener("mousemove",kt),Pt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Pt;Lt||(Lt=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:Lt},level1:{props:{status:o,error:i},component:Ze},segments:r},c=bt(n);qt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;mt.replaceState({id:ht},"",t);const n=_t(new URL(location.href));if(n)return xt(n,ht,!0,e)}));export{G as A,T as B,r as C,ee as D,M as E,c as F,d as G,F as H,B as I,V as J,De as K,y as L,O as M,Nt as N,j as O,A as P,t as Q,N as R,Ee as S,ge as T,Q as U,X as V,u as W,ve as X,oe as Y,z as Z,E as a,C as b,H as c,P as d,w as e,_ as f,k as g,b as h,xe as i,fe as j,he as k,me as l,x as m,U as n,Y as o,g as p,e as q,ke as r,i as s,pe as t,S as u,$ as v,be as w,_e as x,$e as y,we as z};

import __inject_styles from './inject_styles.803b7e80.js';
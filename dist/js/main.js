(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{let o=performance.now();requestAnimationFrame((function s(a){let c=(a-o)/n;c>1&&(c=1);let l=e(c);t(l),c<1&&requestAnimationFrame(s)}))};let t=(function(e){return e},function(e){return 1-(1-e)});const n=e=>{let t=!0,n=/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,o=/\d[\d\(\)\ -]{9,11}\d$/,s=/^[а-яА-Я\ /]{2,16}$/,a=/[а-яА-Я]{3,}/gi;return e.forEach((e=>{e.classList.remove("error"),e.classList.remove("success"),"user_email"===e.name&&!0!==n.test(e.value)||"user_phone"===e.name&&!0!==o.test(e.value)||"user_name"===e.name&&!0!==s.test(e.value)||"user_message"===e.name&&!0!==a.test(e.value)?e.classList.add("error"):e.classList.add("success"),e.classList.contains("success")||(t=!1)})),t},o=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),s=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");try{if(!o)throw new Error("Форма не найдена");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),l=new FormData(o),r={};var i;l.forEach(((e,t)=>{r[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type&&+t.textContent>0?r[e.id]=t.textContent:"input"===e.type&&+t.value>0&&(r[e.id]=t.value)})),n(e)&&(s.textContent="",s.classList.add("sk-double-bounce"),a.classList.add("sk-child","sk-double-bounce-1"),c.classList.add("sk-child","sk-double-bounce-2"),o.append(s),s.append(a,c),(i=r,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(i),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>e.json()))).then((t=>{s.classList.remove("sk-double-bounce"),a.classList.remove("sk-child","sk-double-bounce-1"),c.classList.remove("sk-child","sk-double-bounce-2"),s.style.color="white",s.textContent="Спасибо! Мы с вами свяжемся",setTimeout((()=>o.removeChild(s)),1500),e.forEach((e=>{e.value="",e.classList.remove("error"),e.classList.remove("success")}))})).catch((e=>s.textContent="Ошибка...")))})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),s=document.getElementById("timer-seconds"),a=e=>e<=9?"0"+e:e,c=()=>{const e=document.querySelector(".timer-action");let c=(()=>{let e=(new Date("29 april 2022").getTime()-(new Date).getTime())/1e3;return{timerRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=a(c.days),n.textContent=a(c.hours),o.textContent=a(c.minutes),s.textContent=a(c.seconds),c.timerRemaining<=0&&(t.textContent="00",n.textContent="00",o.textContent="00",s.textContent="00",e.textContent="Акция закончилась",clearInterval(l))};c();let l=setInterval(c,1e3)})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(({target:t})=>(t.closest(".menu")||t.matches(".close-btn, menu a")||e.classList.contains("active-menu")&&!t.closest("menu"))&&void e.classList.toggle("active-menu")))})(),(()=>{const n=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),s=document.querySelector(".popup-content"),a=(n,a)=>{e({duration:n,timing:t,draw:function(e){let t=Math.abs(a-e);o.style.opacity=t,s.style.opacity=t,0==+o.style.opacity&&(o.style.display="none")}})};n.forEach((e=>{e.addEventListener("click",(()=>{screen.availWidth>=768&&a(300,0),o.style.display="block"}))})),o.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||a(300,1)}))})(),[...document.querySelectorAll("ul>li>a"),document.querySelector("main > a")].forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href").substring(1);document.getElementById(n).scrollIntoView({block:"start",behavior:"smooth"})}))})),((e,t,o,s,a="invalid",c="valid")=>{const l=/[^0-9]/,r=/[^a-zA-Z\d@-_.!*'`]/gi,i=/([^а-яА-Я0-9?!-., ])+/gi,u=/([^а-яА-Я. ])+/gi,d=(e,t)=>{document.querySelectorAll(`form input[name=${t}]`).forEach((t=>{t.addEventListener("input",(()=>{t.value=t.value.replace(e,""),(t.classList.contains(a)||t.classList.contains(c))&&n([t])})),t.addEventListener("blur",(()=>{"user_name"===t.name&&t.value&&(t.value=t.value[0].toUpperCase()+t.value.slice(1))})),t.addEventListener("invalid",(e=>{e.preventDefault(),n([e.target])}))}))},m=()=>{!function(e,t="+7 (__) --"){const n=document.querySelectorAll(e);function o(e){const n=e.keyCode,o=t,s=o.replace(/\D/g,""),a=this.value.replace(/\D/g,"");let c=0,l=o.replace(/[_\d]/g,(function(e){return c<a.length?a.charAt(c++)||s.charAt(c):e}));c=l.indexOf("_"),-1!=c&&(l=l.slice(0,c));let r=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");r=new RegExp("^"+r+"$"),(!r.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",o),e.addEventListener("focus",o),e.addEventListener("blur",o)}("form input[type=tel]","+7__________")};try{d(i,e),d(u,t),d(r,o),d(l,s),m(),document.querySelectorAll(".calc-block input").forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/\D+/,"")}))}))}catch(e){console.log(e.message)}})("user_message","user_name","user_email","user_phone","error","success"),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const o=e.target;if(o.closest(".service-header-tab")){const e=o.closest(".service-header-tab");t.forEach(((t,o)=>{t===e?(t.classList.add("active"),n[o].classList.remove("d-none")):(t.classList.remove("active"),n[o].classList.add("d-none"))}))}}))})(),((e,t,n="slide-active",o="dot-active")=>{const s=document.querySelector(e),a=document.querySelectorAll(t),c=[];let l=0,r=0;const i=(e,t,n)=>{e[t].classList.remove(n)},u=(e,t,n)=>{e[t].classList.add(n)},d=()=>{i(a,l,n),i(c,l,o),l++,l>=a.length&&(l=0),u(a,l,n),u(c,l,o)},m=(e=1500)=>{r=setInterval(d,e)};s&&a[0]&&(s.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(i(a,l,n),i(c,l,o),e.target.matches("#arrow-right")?l++:e.target.matches("#arrow-left")?l--:e.target.classList.contains("dot")&&c.forEach(((t,n)=>{e.target===t&&(l=n)})),l>=a.length&&(l=0),l<0&&(l=a.length-1),u(a,l,n),u(c,l,o))})),s.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(r)}),!0),s.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&m(2e3)}),!0),(()=>{const e=document.querySelector(".portfolio-dots");for(let t=0;t<=a.length-1;t++){const t=document.createElement("li");t.classList.add("dot"),e.append(t),c.push(t)}c[0].classList.add(o)})(),m(2e3))})(".portfolio-content",".portfolio-item","portfolio-item-active","dot-active"),(t=>{const n=document.querySelector(".calc-block"),o=n.querySelector(".calc-type"),s=n.querySelector(".calc-square"),a=n.querySelector(".calc-count"),c=n.querySelector(".calc-day"),l=document.getElementById("total");n.addEventListener("input",(n=>{n.target!==o&&n.target!==s&&n.target!==a&&n.target!==c||(()=>{const n=+o.options[o.selectedIndex].value,r=+s.value;let i=0,u=1,d=1;var m;a.value>1&&(u+=+a.value/10),c.value&&c.value<5?d=2:c.value&&c.value<10&&(d=1.5),i=o.value&&s.value?t*n*r*u*d:0,l.textContent=Math.round(i),m=i,e({duration:500,timing:e=>e,draw(e){l.textContent=Math.round(m*e)}})})()}))})(100),o({formId:"form1",someElem:[{type:"block",id:"total"}]}),o({formId:"form2",someElem:[{type:"block",id:"total"}]}),o({formId:"form3"})})();
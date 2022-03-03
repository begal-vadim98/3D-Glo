(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{let o=performance.now();requestAnimationFrame((function c(r){let a=(r-o)/n;a>1&&(a=1);let l=e(a);t(l),a<1&&requestAnimationFrame(c)}))};(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds"),r=e=>e<=9?"0"+e:e,a=()=>{const e=document.querySelector(".timer-action");let a=(()=>{let e=(new Date("29 october 2022").getTime()-(new Date).getTime())/1e3;return{timerRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=r(a.days),n.textContent=r(a.hours),o.textContent=r(a.minutes),c.textContent=r(a.seconds),a.timerRemaining<=0&&(t.textContent="00",n.textContent="00",o.textContent="00",c.textContent="00",e.textContent="Акция закончилась",clearInterval(l))};a();let l=setInterval(a,1e3)})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(({target:t})=>(t.closest(".menu")||t.matches(".close-btn, menu a")||e.classList.contains("active-menu")&&!t.closest("menu"))&&void e.classList.toggle("active-menu")))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup"),o=document.querySelector(".popup-content");t.forEach((t=>{t.addEventListener("click",(()=>{screen.availWidth>=768&&e({duration:300,timing:function(e){return e},draw:function(t){n.style.opacity=t,o.style.opacity=0,1===t&&e({duration:300,timing:function(e){return e},draw:function(e){o.style.opacity=e}})}}),n.style.display="block"}))})),n.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||e({duration:300,timing:function(e){return e},draw:function(t){n.style.opacity=1-t,o.style.opacity=0,1===t&&e({duration:300,timing:function(e){return e},draw:function(e){o.style.opacity=1-e,n.style.display="none"}})}})}))})(),[...document.querySelectorAll("ul>li>a"),document.querySelector("main > a")].forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href").substring(1);document.getElementById(n).scrollIntoView({block:"start",behavior:"smooth"})}))})),[...document.querySelectorAll('form input[placeholder="Ваше сообщение"]'),...document.querySelectorAll("form input[type=text]")].forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/([^а-яА-Я\-\ \. \,])+/gi,"")}))})),(()=>{const e=[...document.querySelectorAll("form input[type=email]")],t=/([^a-zA-Z1-9\@ \- \_ \. \! \* \' \`])+/gi;e.forEach((e=>{e.addEventListener("input",(()=>{console.log(t.test(e.value)),e.value=e.value.replace(t,"")}))}))})(),document.querySelectorAll("form input[type=tel]").forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/([^0-9\+ \( \) \-])+/gi,"")}))})),document.querySelectorAll(".calc-block input").forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/\D+/,"")}))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const o=e.target;if(o.closest(".service-header-tab")){const e=o.closest(".service-header-tab");t.forEach(((t,o)=>{t===e?(t.classList.add("active"),n[o].classList.remove("d-none")):(t.classList.remove("active"),n[o].classList.add("d-none"))}))}}))})(),((e,t,n="slide-active",o="dot-active")=>{const c=document.querySelector(e),r=document.querySelectorAll(t),a=[];let l=0,i=0;const s=(e,t,n)=>{e[t].classList.remove(n)},u=(e,t,n)=>{e[t].classList.add(n)},d=()=>{s(r,l,n),s(a,l,o),l++,l>=r.length&&(l=0),u(r,l,n),u(a,l,o)},m=(e=1500)=>{i=setInterval(d,e)};c&&r[0]&&(c.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(s(r,l,n),s(a,l,o),e.target.matches("#arrow-right")?l++:e.target.matches("#arrow-left")?l--:e.target.classList.contains("dot")&&a.forEach(((t,n)=>{e.target===t&&(l=n)})),l>=r.length&&(l=0),l<0&&(l=r.length-1),u(r,l,n),u(a,l,o))})),c.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(i)}),!0),c.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&m(2e3)}),!0),(()=>{const e=document.querySelector(".portfolio-dots");for(let t=0;t<=r.length-1;t++){const t=document.createElement("li");t.classList.add("dot"),e.append(t),a.push(t)}a[0].classList.add(o)})(),m(2e3))})(".portfolio-content",".portfolio-item","portfolio-item-active","dot-active"),(t=>{const n=document.querySelector(".calc-block"),o=n.querySelector(".calc-type"),c=n.querySelector(".calc-square"),r=n.querySelector(".calc-count"),a=n.querySelector(".calc-day"),l=document.getElementById("total");n.addEventListener("input",(n=>{n.target!==o&&n.target!==c&&n.target!==r&&n.target!==a||(()=>{const n=+o.options[o.selectedIndex].value,i=+c.value;let s=0,u=1,d=1;var m;r.value>1&&(u+=+r.value/10),a.value&&a.value<5?d=2:a.value&&a.value<10&&(d=1.5),s=o.value&&c.value?t*n*i*u*d:0,l.textContent=Math.round(s),s>0&&(m=s,e({duration:500,timing:e=>e,draw(e){l.textContent=Math.round(m*e)}}))})()}))})(100)})();
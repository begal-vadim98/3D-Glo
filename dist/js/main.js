(()=>{"use strict";const e={animate({timing:e,draw:t,duration:o}){let n=performance.now();requestAnimationFrame((function c(r){let a=(r-n)/o;a>1&&(a=1);let l=e(a);t(l),a<1&&requestAnimationFrame(c)}))}};(e=>{const t=document.getElementById("timer-days"),o=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds"),r=e=>e<=9?"0"+e:e,a=()=>{const e=document.querySelector(".timer-action");let a=(()=>{let e=(new Date("29 october 2022").getTime()-(new Date).getTime())/1e3;return{timerRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=r(a.days),o.textContent=r(a.hours),n.textContent=r(a.minutes),c.textContent=r(a.seconds),a.timerRemaining<=0&&(t.textContent="00",o.textContent="00",n.textContent="00",c.textContent="00",e.textContent="Акция закончилась",clearInterval(l))};a();let l=setInterval(a,1e3)})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(({target:t})=>(t.closest(".menu")||t.matches(".close-btn, menu a")||e.classList.contains("active-menu")&&!t.closest("menu"))&&void e.classList.toggle("active-menu")))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),n=document.querySelector(".popup-content");t.forEach((t=>{t.addEventListener("click",(()=>{screen.availWidth>=768&&(300,e.animate({duration:300,timing:function(e){return e},draw:function(t){o.style.opacity=t,n.style.opacity=0,1===t&&e.animate({duration:300,timing:function(e){return e},draw:function(e){n.style.opacity=e}})}})),o.style.display="block"}))})),o.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(o.style.display="none",o.style.opacity="",n.style.opacity="")}))})(),[...document.querySelectorAll("ul>li>a"),document.querySelector("main > a")].forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href").substring(1);document.getElementById(o).scrollIntoView({block:"start",behavior:"smooth"})}))})),[...document.querySelectorAll('form input[placeholder="Ваше сообщение"]'),...document.querySelectorAll("form input[type=text]")].forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/([^а-яА-Я\-\ \. \,])+/gi,"")}))})),(()=>{const e=[...document.querySelectorAll("form input[type=email]")],t=/([^a-zA-Z1-9\@ \- \_ \. \! \* \' \`])+/gi;e.forEach((e=>{e.addEventListener("input",(()=>{console.log(t.test(e.value)),e.value=e.value.replace(t,"")}))}))})(),document.querySelectorAll("form input[type=tel]").forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/([^0-9\+ \( \) \-])+/gi,"")}))})),document.querySelectorAll(".calc-block input").forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/\D+/,"")}))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const n=e.target;if(n.closest(".service-header-tab")){const e=n.closest(".service-header-tab");t.forEach(((t,n)=>{t===e?(t.classList.add("active"),o[n].classList.remove("d-none")):(t.classList.remove("active"),o[n].classList.add("d-none"))}))}}))})(),((e,t,o="slide-active",n="dot-active")=>{const c=document.querySelector(e),r=document.querySelectorAll(t),a=[];let l=0,s=0;const i=(e,t,o)=>{e[t].classList.remove(o)},u=(e,t,o)=>{e[t].classList.add(o)},d=()=>{i(r,l,o),i(a,l,n),l++,l>=r.length&&(l=0),u(r,l,o),u(a,l,n)},m=(e=1500)=>{s=setInterval(d,e)};c&&r[0]&&(c.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(i(r,l,o),i(a,l,n),e.target.matches("#arrow-right")?l++:e.target.matches("#arrow-left")?l--:e.target.classList.contains("dot")&&a.forEach(((t,o)=>{e.target===t&&(l=o)})),l>=r.length&&(l=0),l<0&&(l=r.length-1),u(r,l,o),u(a,l,n))})),c.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(s)}),!0),c.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&m(2e3)}),!0),(()=>{const e=document.querySelector(".portfolio-dots");for(let t=0;t<=r.length-1;t++){const t=document.createElement("li");t.classList.add("dot"),e.append(t),a.push(t)}a[0].classList.add(n)})(),m(2e3))})(".portfolio-content",".portfolio-item","portfolio-item-active","dot-active")})();
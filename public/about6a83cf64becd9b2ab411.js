(()=>{var n={243:()=>{const n=document.querySelector(".mode"),a=document.querySelector("body"),e=!!localStorage.getItem("mode")&&localStorage.getItem("mode");e&&a.classList.add("dark-mode"),n.addEventListener("click",(()=>{a.classList.toggle("dark-mode"),e?localStorage.setItem("mode",""):localStorage.setItem("mode","dark-mode")}))}},a={};function e(s){var t=a[s];if(void 0!==t)return t.exports;var o=a[s]={exports:{}};return n[s](o,o.exports,e),o.exports}(()=>{"use strict";e(243);const n=document.querySelector(".loader"),a=(document.querySelector(".countries"),document.querySelector(".show")),s=window.location.search;(async a=>{n.classList.remove("hidden");const e=await fetch(a);if(!e.ok)throw n.classList.add("hidden"),new Error("Qandaydir xatolik sodir bo`ldi");const s=await e.json();return n.classList.add("hidden"),s})(`https://restcountries.com/v3.1/name/${new URLSearchParams(s).get("country")}`).then((n=>{(n=>{const{capital:e,population:s,region:t,flags:o,tld:i,fifa:d}=n;a.innerHTML="";const c=n.name.common,r=Object.values(n.name.nativeName)[0].official,l=Object.values(n.currencies)[0].name,p=Object.values(n.languages);console.log(n),a.innerHTML=`\n    <div class="images">\n        <img src=${o.svg} alt="">\n    </div>\n    <div class="info">\n        <h1 class="info__title">${c}</h1>\n        <div class="info__data">\n            <span>Native Name:</span>\n            <p>${r}</p>\n        </div>\n        <div class="info__data">\n            <span>Population:</span>\n            <p>${s}</p>\n        </div>\n        <div class="info__data">\n            <span>Region:</span>\n            <p>${t}</p>\n        </div>\n        <div class="info__data">\n            <span>Capital:</span>\n            <p>${e}</p>\n        </div>\n        <div class="info__data">\n            <span>Top Level Domain:</span>\n            <p>${i}</p>\n        </div>\n        <div class="info__data">\n            <span>Curriencies:</span>\n            <p>${l}</p>\n        </div>\n        <div class="info__data">\n            <span>Languages:</span>\n            <p>${p}</p>\n        </div>\n        <div class="info__data">\n            <span>FIFA name:</span>\n            <p>${d}</p>\n        </div>\n    </div>\n    `})(n[0])})).catch((n=>{alert(n.message)}))})()})();
import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as l}from"./assets/vendor-71ac5ada.js";const o=document.querySelector("form"),a=document.querySelector("input"),r=document.querySelector("textarea"),n="feedback-form-state",t={email:"",message:""};o.addEventListener("input",l(u,500));o.addEventListener("submit",s);m();function u(e){t[e.target.name]=e.target.value,localStorage.setItem(n,JSON.stringify(t))}function s(e){if(e.preventDefault(),a.value===""||r.value===""){window.alert("Please, fill up every field");return}console.log(t),e.currentTarget.reset(),localStorage.clear()}function m(){const e=JSON.parse(localStorage.getItem(n));e&&(a.value=e.email,r.value=e.message)}
//# sourceMappingURL=commonHelpers2.js.map

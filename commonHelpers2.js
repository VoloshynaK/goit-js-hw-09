import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as l}from"./assets/vendor-71ac5ada.js";const o=document.querySelector("form"),a=document.querySelector("input"),r=document.querySelector("textarea"),n="feedback-form-state",t={email:"",message:""};o.addEventListener("input",l(m,500));o.addEventListener("submit",u);s();function m(e){t[e.target.name]=e.target.value.trim(),localStorage.setItem(n,JSON.stringify(t))}function u(e){if(e.preventDefault(),a.value===""||r.value===""){window.alert("Please, fill up every field");return}t.email=a.value.trim(),t.message=r.value.trim(),console.log(t),e.currentTarget.reset(),localStorage.clear()}function s(){const e=JSON.parse(localStorage.getItem(n));e&&(a.value=e.email,r.value=e.message)}
//# sourceMappingURL=commonHelpers2.js.map
const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(()=>{const t=setInterval((()=>{o.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3);e.addEventListener("click",(()=>clearInterval(t)))}));
//# sourceMappingURL=01-color-switcher.f4e70b4c.js.map

!function(){"use strict";const e={copyToClipboard(e){var n=document.createElement("input");document.body.appendChild(n),n.setAttribute("value",e),n.select(),document.execCommand("copy"),document.body.removeChild(n),console.log("copied: "+e)}},n=(document.querySelector("main"),document.querySelector(".large-property")),o=document.querySelector(".key"),t=document.querySelector(".code"),c=document.querySelector(".which"),r=document.querySelector(".e-location");document.body.onkeyup=function(e){o.innerHTML='"'+e.key+'"',t.innerHTML='"'+e.code+'"',c.innerHTML=e.which,r.innerHTML=e.location,"Space"==e.code?n.innerHTML=e.code:n.innerHTML=e.key,console.log(e)},document.querySelector(".element1").addEventListener("click",(function(){m("element1")})),document.querySelector(".element2").addEventListener("click",(function(){m("element2")})),document.querySelector(".element3").addEventListener("click",(function(){m("element3")})),document.querySelector(".element4").addEventListener("click",(function(){m("element4")}));const i=document.querySelector(".select--key"),l=document.querySelector(".select--code"),d=document.querySelector(".select--which"),u=document.querySelector(".select--location");function m(n){if("element1"==n){const n="event.key == "+o.innerHTML;i.innerHTML=n,e.copyToClipboard(o.innerHTML)}else"element2"==n?(l.innerHTML="event.code == "+t.innerHTML,e.copyToClipboard(t.innerHTML)):"element3"==n?(d.innerHTML="event.which == "+c.innerHTML,e.copyToClipboard(c.innerHTML)):"element4"==n&&(u.innerHTML="event.location == "+r.innerHTML,e.copyToClipboard(r.innerHTML))}}();
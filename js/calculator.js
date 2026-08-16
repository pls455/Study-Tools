
let ex="",deg=true;
function ev(s){s=s.replaceAll("×","*").replaceAll("÷","/").replaceAll("π","Math.PI").replaceAll("√","Math.sqrt").replaceAll("^","**").replaceAll("log","Math.log10").replaceAll("ln","Math.log");return Function("return "+s)()}
document.addEventListener("DOMContentLoaded",()=>{$$("[data-k]").forEach(b=>b.onclick=()=>{let v=b.dataset.k;if(v==="C")ex="";else if(v==="⌫")ex=ex.slice(0,-1);else if(v==="="){try{ex=String(ev(ex))}catch{ex="خطأ"}}else if(v==="DEG"){deg=!deg;b.textContent=deg?"DEG":"RAD"}else ex+=v;$("#display").textContent=ex||"0"});$("#copy")?.addEventListener("click",()=>navigator.clipboard?.writeText($("#display").textContent))})

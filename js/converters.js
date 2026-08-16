
const U={length:{m:1,km:1000,cm:.01,mm:.001},mass:{kg:1,g:.001,lb:.453592},time:{s:1,min:60,h:3600,day:86400},speed:{"m/s":1,"km/h":1/3.6,mph:.44704}};
function fillU(){let a=Object.keys(U[$("#ut").value]);$("#uf").innerHTML=$("#uu").innerHTML=a.map(x=>`<option>${x}</option>`)}
document.addEventListener("DOMContentLoaded",()=>{$("#ut")?.addEventListener("change",fillU);$("#convert")?.addEventListener("click",()=>{let u=U[$("#ut").value],v=+$("#uv").value,r=v*u[$("#uf").value]/u[$("#uu").value];$("#ur").textContent=isFinite(r)?r:"تحقق"});fillU();$("#temp")?.addEventListener("click",()=>{let x=+$("#tv").value,f=$("#tf").value,t=$("#tt").value,c=f==="C"?x:f==="F"?(x-32)*5/9:x-273.15,r=t==="C"?c:t==="F"?c*9/5+32:c+273.15;$("#trr").textContent=r.toFixed(4)})})

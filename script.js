const body = document.querySelector("#mobile");
const itemMenu = document.querySelectorAll(".atalhos");


function callback() {
  body.classList.toggle("menu-open");
  body.classList.toggle("menu-closed");
 
 
}
function target() {  
    body.classList.add("menu-closed");
    body.classList.remove("menu-open");
}
function fecha(){
  if(window.outerWidth > 759){
    body.classList.add("menu-closed");
    body.classList.remove("menu-open"); 
  }
}
itemMenu.forEach((i)=>i.addEventListener("click", target));
window.addEventListener('resize', fecha) 


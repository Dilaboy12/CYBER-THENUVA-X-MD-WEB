function toggleMenu(){
  document.querySelector("nav").classList.toggle("open");
}
function showNotice(message){
  const toast=document.getElementById("toast");
  toast.textContent=message;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),3000);
}
document.getElementById("year").textContent=new Date().getFullYear();
document.querySelectorAll("nav a").forEach(a=>{
  a.addEventListener("click",()=>document.querySelector("nav").classList.remove("open"));
});

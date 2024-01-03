var sideNav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

console.log(openBtn)

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  //sideNav.classList.add("active")
  openBtn.hidden == true
  closeBtn.hidden == false
}

function closeNav() {
  //sideNav.classList.remove("active")
  openBtn.hidden == false
  closeBtn.hidden == true
  console.log(closeBtn)
}

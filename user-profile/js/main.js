//menu show
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Active Menu
// const navLink = document.querySelectorAll('.nav__link')
// function linkAction(){
//     navLink.forEach(n => n.classList.remove('active'))
//     this.classList.add('active')

//     //Remove menu mobile
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

//Navigations
document.getElementById("up-id").onclick = function () {
  window.location.href = "index.html";
};
document.getElementById("u-info-id").onclick = function () {
  window.location.href = "user-info.html";
};
document.getElementById("order-id").onclick = function () {
  window.location.href = "order-history.html";
};

// user-info-page
document.getElementById("redirect").onclick = function () {
  window.location.href = "update.html";
};

//update validations
function validate() {
  var email, name;

  email = document.getElementById("email-id").value;
  name = document.getElementById("name-id").value;
  phone = document.getElementById("phone-id").value;

  if (name == "" || name == null) {
    alert("Name must be filled out");
    return false;
  } else if (email == "" || email == null) {
    alert("Email must be filled out");
    return false;
  } else if (phone == "" || phone == null) {
    alert("Phone no must be filled out");
    return false;
  }
}

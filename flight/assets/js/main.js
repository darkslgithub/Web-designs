/*Menu*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle-id", "nav-menu-id");

const closeTopBar = (topbarId) => {
  const close = document.getElementById(topbarId);
  close.addEventListener("click", function (event) {
    close.classList.add("close-top");
  });
};
closeTopBar("top-bar-id");

/*Animations*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".form-content", {});

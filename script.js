
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");


  const icon = menuToggle.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});


const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const icon = menuToggle.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});


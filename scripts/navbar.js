const toggleBtn = document.querySelector(".toggle-menu-btn");
const menuList = document.querySelector(".nav-menu-list");

const navBar = document.querySelector(".page-header");

const toggleMenu = () => {
  toggleBtn.classList.toggle("close");
  menuList.classList.toggle("show");
};

const showNav = () => {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    navBar.classList.add("colored");
  } else {
    navBar.classList.remove("colored");
  }
};

toggleBtn.addEventListener("click", toggleMenu);

window.addEventListener("scroll", showNav);

const toggleBtn = document.querySelector(".toggle-menu-btn");
const menuList = document.querySelector(".nav-menu-list");

const navBar = document.querySelector(".page-header");

//toggle menu (mobile)
const toggleMenu = () => {
  toggleBtn.classList.toggle("close");
  menuList.classList.toggle("show");
};

// show nav on scroll
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

//smooth scrolling when clicking a nav menu
const smoothScrolling = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const href = e.target.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

//Event Listeners
toggleBtn.addEventListener("click", toggleMenu);
window.addEventListener("scroll", showNav);
navBar.addEventListener("click", smoothScrolling);

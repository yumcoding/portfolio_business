const toggleBtn = document.querySelector(".toggle-menu-btn");
const menuList = document.querySelector(".nav-menu-list");
const toggleMenu = () => {
  toggleBtn.classList.toggle("close");
  menuList.classList.toggle("show");
};

toggleBtn.addEventListener("click", toggleMenu);

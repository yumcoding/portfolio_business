//DOM elements related to BackToTop Button
const backToTopBtn = document.querySelector(".back-to-top");

// DOM elements related to Accordion Menu
const accoList = document.querySelector(".acco-list");
const accoTitles = document.querySelectorAll(".acco-title");
const accoDescs = document.querySelectorAll(".acco-desc");

// DOM elements related to Tab Menu
const tabTitleContainer = document.querySelector(".tab-title-container");
const tabTitles = document.querySelectorAll(".tab-title");
const tabContents = document.querySelectorAll(".tab-content");

// DOM elements related to Slider
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const sliderList = document.querySelector(".slider-list");

// DOM elements related to Filter
const filterBtnContainer = document.querySelector(".btn-container");
const filterBtns = document.querySelectorAll(".btn-filter");
const projects = document.querySelectorAll(".project");

//DOM elements related to Modal
const body = document.getElementsByTagName("body")[0];
const projectContainer = document.querySelector(".project-grid-container");
const modalContainer = document.querySelector(".modal-container");
const modalContents = document.querySelectorAll(".modal-content");

//show BackToTop Button
const showBtn = () => {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    backToTopBtn.style.display = "inline";
  } else {
    backToTopBtn.style.display = "none";
  }
};
// show accordion menu
accoTitles[0].classList.add("active");
accoDescs[0].classList.add("show");

const showAcco = (e) => {
  let target = e.target;
  while (!target.classList.contains("acco-title")) {
    if (
      target.classList.contains("title-numbering") ||
      target.classList.contains("title-text")
    ) {
      target = target.parentNode;
    } else {
      target = null;
      return;
    }
  }

  const accoDesc = target.nextElementSibling;

  if (target.classList.contains("active")) {
    target.classList.remove("active");
    accoDesc.classList.remove("show");
  } else {
    accoTitles.forEach((title) => title.classList.remove("active"));
    accoDescs.forEach((desc) => desc.classList.remove("show"));

    target.classList.add("active");
    accoDesc.classList.add("show");
  }
};

// show tab menu

tabTitles[0].classList.add("active");
tabContents[0].classList.add("show");

const showTab = (e) => {
  let target = e.target;
  while (!target.classList.contains("tab-title")) {
    target = target.parentNode;

    if (target.nodeName === "BODY") {
      target = null;
      return;
    }
  }

  const tabId = target.getAttribute("data-tab");

  tabTitles.forEach((title) => {
    if (title.classList.contains("active")) {
      title.classList.remove("active");
    }
  });

  tabContents.forEach((content) => {
    if (content.classList.contains("show")) {
      content.classList.remove("show");
    }

    if (content.id === tabId) {
      content.classList.add("show");
    }
  });
  target.classList.add("active");
};

// Slider
let items = document.querySelectorAll(".slider-item");

const showPrev = () => {
  sliderList.insertBefore(items[items.length - 1], items[0]);
  items = document.querySelectorAll(".slider-item");
};

const showNext = () => {
  sliderList.appendChild(items[0]);
  items = document.querySelectorAll(".slider-item");
};

//filter elements
const filterElem = (e) => {
  //test if user clicks the space between buttons
  if (e.target.classList.contains("btn-container")) {
    return;
  }

  const targetBtn = e.target;
  const targetData = targetBtn.getAttribute("data-filter");

  // remove active class from unselected btns
  filterBtns.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });

  // add active class to selected btn
  targetBtn.classList.add("active");

  //filter selected projects
  projects.forEach((project) => {
    if (project.classList.contains(targetData)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
};

// Modal

const showModal = (e) => {
  let projectId;
  if (e.target.classList.contains("btn-project")) {
    projectId = e.target.id;
  } else {
    projectId = null;
    return;
  }

  modalContents.forEach((modal) => {
    if (modal.getAttribute("data-modal") === projectId) {
      modalContainer.style.display = "block";
      modal.style.display = "flex";
      body.classList.add("not-scroll");
    } else {
      modal.style.display = "none";
    }
  });
};

const closeModal = (e) => {
  if (e.target.classList.contains("back")) {
    modalContainer.style.display = "none";
    body.classList.remove("not-scroll");
  }
};

const closeModalBtn = (e) => {
  if (
    e.target.classList.contains("modal-close") ||
    e.target.classList.contains("fa-times")
  ) {
    modalContainer.style.display = "none";
    body.classList.remove("not-scroll");
  }
};

// Event Listeners
window.addEventListener("scroll", showBtn);

accoList.addEventListener("click", showAcco);

tabTitleContainer.addEventListener("click", showTab);

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

filterBtnContainer.addEventListener("click", filterElem);

projectContainer.addEventListener("click", showModal);
modalContainer.addEventListener("click", closeModal);
modalContainer.addEventListener("click", closeModalBtn);
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-container")) {
    modalContainer.style.display = "none";
    body.classList.remove("not-scroll");
  }
});

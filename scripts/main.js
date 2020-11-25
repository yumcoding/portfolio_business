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

// Event Listeners
accoList.addEventListener("click", showAcco);

tabTitleContainer.addEventListener("click", showTab);

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

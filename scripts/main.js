const accoList = document.querySelector(".acco-list");
const accoTitles = document.querySelectorAll(".acco-title");
const accoDescs = document.querySelectorAll(".acco-desc");

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

accoList.addEventListener("click", showAcco);

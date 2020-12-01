const landingDesc = document.querySelector(".landing-desc");
const sectionTags = document.querySelectorAll(".section-tag");
const sectionTitles = document.querySelectorAll(".section-title");
const sectionDescs = document.querySelectorAll(".section-desc");
const blockquotes = document.querySelectorAll("blockquote");
const detailIcons = document.querySelectorAll(".detail-icon");
const detailBodys = document.querySelectorAll(".detail-body");

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () => {
  if (isInViewport(landingDesc)) {
    landingDesc.classList.add("fade-in");
  }

  sectionTags.forEach((tag) => {
    if (isInViewport(tag)) {
      tag.classList.add("slide-in-left");
    }
  });

  sectionTitles.forEach((title) => {
    if (isInViewport(title)) {
      title.classList.add("slide-in-left-delay");
    }
  });

  sectionDescs.forEach((desc) => {
    if (isInViewport(desc)) {
      desc.classList.add("slide-in-left-delay");
    }
  });

  blockquotes.forEach((quote) => {
    if (isInViewport(quote)) {
      quote.classList.add("fade-in-delay");
    }
  });

  detailIcons.forEach((icon) => {
    if (isInViewport(icon)) {
      icon.classList.add("flipX");
    }
  });

  detailBodys.forEach((detail) => {
    if (isInViewport(detail)) {
      detail.classList.add("fade-in");
    }
  });
};

// Event Listeners
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);

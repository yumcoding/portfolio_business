const landingDesc = document.querySelector(".landing-desc");
const sectionTags = document.querySelectorAll(".section-tag");
const sectionTitles = document.querySelectorAll(".section-title");
const sectionDescs = document.querySelectorAll(".section-desc");
const blockquotes = document.querySelectorAll("blockquote");
const introImg = document.querySelector(".intro-img");
const detailIcons = document.querySelectorAll(".detail-icon");
const detailBodys = document.querySelectorAll(".detail-body");
const cardImgs = document.querySelectorAll(".card img");
const accoTitle = document.querySelector(".area-2.acco h2");
const tabTitle = document.querySelector(".tab-title-container");
const testimonialTitle = document.querySelector(".testimonial-title");
const testimonialDesc = document.querySelector(".testimonial-desc");
const testimonialImages = document.querySelectorAll(".testi-img");
const sectionLists = document.querySelectorAll(".section-list");
const callMeForm = document.querySelector(".call-me-form");
const projectsFilter = document.querySelector(
  ".projects-container .btn-container"
);
const teamCards = document.querySelectorAll(".team-card");
const address = document.querySelector("address");
const socials = document.querySelectorAll(".social");
const socialTitle = document.querySelector(".contact-social-title");
const contactForm = document.querySelector(".contact-form");

const breakpointLg = window.matchMedia("screen and (min-width: 992px)");

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

  if (isInViewport(introImg)) {
    introImg.classList.add("fade-in");
  }

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

  if (isInViewport(testimonialTitle)) {
    testimonialTitle.classList.add("fade-in");
  }

  if (isInViewport(testimonialDesc)) {
    testimonialDesc.classList.add("fade-in-delay");
  }

  testimonialImages.forEach((img) => {
    if (isInViewport(img)) {
      img.classList.add("fade-in-delay");
    }
  });

  sectionLists.forEach((list) => {
    if (isInViewport(list)) {
      list.classList.add("fade-in-delay");
    }
  });

  if (isInViewport(callMeForm)) {
    callMeForm.classList.add("slide-in-right");
  }

  if (isInViewport(projectsFilter)) {
    projectsFilter.classList.add("fade-in-delay");
  }

  teamCards.forEach((card, i) => {
    if (isInViewport(card)) {
      if (i % 2 === 0) {
        card.classList.add("slide-in-left");
      } else {
        card.classList.add("slide-in-right");
      }
    }
  });

  if (isInViewport(address)) {
    address.classList.add("fade-in-delay");
  }

  if (isInViewport(socialTitle)) {
    socialTitle.classList.add("fade-in-delay");
  }

  socials.forEach((social) => {
    if (isInViewport(social)) {
      social.classList.add("flipX");
    }
  });

  if (isInViewport(contactForm)) {
    contactForm.classList.add("slide-in-right-delay");
  }

  if (!breakpointLg.matches) {
    // Services Card
    cardImgs.forEach((img, i) => {
      if (isInViewport(img)) {
        const card = img.parentElement;
        if (i % 2 === 0) {
          card.classList.add("slide-in-left");
        } else {
          card.classList.add("slide-in-right");
        }
      }
    });

    //Services Accordion
    if (isInViewport(accoTitle)) {
      const accoList = accoTitle.parentElement;
      accoList.classList.add("slide-in-left");
    }

    //Services Tab
    if (isInViewport(tabTitle)) {
      const tab = tabTitle.parentElement;
      tab.classList.add("slide-in-right");
    }
  } else {
    //Services Card
    cardImgs.forEach((img, i) => {
      if (isInViewport(img)) {
        const card = img.parentElement;
        switch (i) {
          case 0:
            card.classList.add("fade-in");
            break;
          case 1:
            card.classList.add("fade-in-delay");
            break;
          case 2:
            card.classList.add("fade-in-delay-double");
            break;
        }
      }
    });

    //Services Accordion
    if (isInViewport(accoTitle)) {
      const accoList = accoTitle.parentElement;
      accoList.classList.add("slide-in-right");
    }

    //Services Tab
    if (isInViewport(tabTitle)) {
      const tab = tabTitle.parentElement;
      tab.classList.add("slide-in-left");
    }
  }
};

// Event Listeners
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);

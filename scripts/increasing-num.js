const numElems = document.querySelectorAll(".endNum");

let i = 0;

const increaseNum = (numElem, endNum) => {
  if (i <= endNum) {
    numElem.innerHTML = i;
    i++;
    setTimeout(() => {
      increaseNum(numElem, endNum);
    }, 3);
  }
};

const run2 = () => {
  numElems.forEach((numElem) => {
    if (isInViewport(numElem)) {
      const endNum = numElem.getAttribute("data-num");
      increaseNum(numElem, endNum);
    }
  });
};

window.addEventListener("scroll", run2);
window.addEventListener("load", run2);

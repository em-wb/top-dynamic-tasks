//MENU
const dropDowns = document.querySelectorAll(".drop-down");

function toggleSelected(element) {
  element.classList.toggle("selected");
}

function toggleHidden(element) {
  element.classList.toggle("hidden");
}

function handleMouseEnter(dropDown) {
  dropDown.childNodes.forEach((childNode) => {
    if (childNode.nodeName.toLowerCase() === "ul") {
      toggleHidden(childNode);
    }
    if (childNode.nodeName.toLowerCase() === "span") {
      toggleSelected(childNode);
    }
  });
}

function handleMouseLeave(dropDown) {
  dropDown.childNodes.forEach((childNode) => {
    if (childNode.nodeName.toLowerCase() === "ul") {
      toggleHidden(childNode);
    }
    if (childNode.nodeName.toLowerCase() === "span") {
      toggleSelected(childNode);
    }
  });
}

dropDowns.forEach((dropDown) => {
  dropDown.addEventListener("mouseenter", () => handleMouseEnter(dropDown));
  dropDown.addEventListener("mouseleave", () => handleMouseLeave(dropDown));
});

const menuCtr = document.getElementById("menu-ctr");
const dropDownCtr = document.getElementById("drop-down-ctr");
const sliderCtr = document.getElementById("image-slider-ctr");
menuCtr.addEventListener("click", () => {
  dropDownCtr.classList.toggle("visible");
});

//IMAGE SLIDER

function getImageList(button) {
  return button.closest(".image-slider-ctr").querySelector(".image-list");
}

function getElementArray(element) {
  return [...element.children];
}

function checkSliderRepeats(newSlideIndex, slideArray) {
  if (newSlideIndex < 0) {
    newSlideIndex = slideArray.length - 1;
  }
  if (newSlideIndex >= slideArray.length) {
    newSlideIndex = 0;
  }
  return newSlideIndex;
}

function handleActivation(list, index, activeElement) {
  list.children[index].dataset.active = true;
  delete activeElement.dataset.active;
}

function setSliderBtnsEventListener() {
  sliderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.classList.contains("next") ? 1 : -1;
      const imageList = getImageList(button);
      const activeSlide = imageList.querySelector("[data-active]");
      const slideArray = getElementArray(imageList);
      let newSlideIndex = slideArray.indexOf(activeSlide) + direction;
      newSlideIndex = checkSliderRepeats(newSlideIndex, slideArray);

      handleActivation(imageList, newSlideIndex, activeSlide);
      handleActivation(
        dotsCtr,
        newSlideIndex,
        dotsCtr.querySelector("[data-active]")
      );
    });
  });
}

function setDotsEventListener() {
  dotsButtons.forEach((dotButton, index) => {
    dotButton.addEventListener("click", () => {
      const imageList = getImageList(dotButton);
      const activeSlide = imageList.querySelector("[data-active]");
      const activeDot = dotsCtr.querySelector("[data-active]");
      handleActivation(imageList, index, activeSlide);
      handleActivation(dotsCtr, index, activeDot);
    });
  });
}

function autoTransition() {
  const imageList = document.querySelector(".image-slider-ctr .image-list");
  const dotsCtr = document.getElementById("dots-ctr");
  const slideArray = getElementArray(imageList);
  const interval = setInterval(() => {
    const activeSlide = imageList.querySelector("[data-active]");
    const activeDot = dotsCtr.querySelector("[data-active]");
    let index = slideArray.indexOf(activeSlide);
    index = index + 1;
    index = checkSliderRepeats(index, slideArray);
    handleActivation(imageList, index, activeSlide);
    handleActivation(dotsCtr, index, activeDot);
  }, 6000);
  return interval;
}

const sliderButtons = document.querySelectorAll(".slider-btns");
const dotsButtons = document.querySelectorAll(".dots");
const dotsCtr = document.getElementById("dots-ctr");

autoTransition();
setSliderBtnsEventListener();
setDotsEventListener();

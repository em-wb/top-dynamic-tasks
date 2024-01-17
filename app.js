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
menuCtr.addEventListener("click", () => {
  dropDownCtr.classList.toggle("visible");
});

// function handleScreenSizeChange() {
//   if (window.innerWidth < 720) {
//     const menuCtr = document.getElementById("menu-ctr");
//     const dropDownCtr = document.getElementById("drop-down-ctr");
//     menuCtr.addEventListener("click", () => {
//       dropDownCtr.classList.toggle("visible");
//     });
//     console.log("window");
//   }
// }

// handleScreenSizeChange();
// window.addEventListener("resize", handleScreenSizeChange);

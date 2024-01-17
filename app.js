const dropDowns = document.querySelectorAll(".drop-down");

function toggleSelected(spanElement) {
  spanElement.classList.toggle("selected");
}

function toggleHidden(ulElement) {
  ulElement.classList.toggle("hidden");
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

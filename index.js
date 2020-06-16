const PIXEL_COLOR = "#e44d4d";

const fakeCanvas = document.querySelector(".fake-canvas");
const fakeCanvasPixel = document.querySelectorAll(".fake-canvas .pixel");
const originalCanvas = document.querySelector("original-canvas");
const originalCanvasPixel = document.querySelectorAll(
  ".original-canvas .pixel"
);

originalCanvasPixel.forEach((elem, index) => {
  if (elem.classList.contains("pixel-dot")) {
    fakeCanvasPixel[index].classList.add("pixel-dot");
  }
});

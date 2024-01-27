const nextButtonNode = document.getElementById("next");
const previousButtonNode = document.getElementById("previous");

const carouselNode = document.querySelector(".carousel");
const listNode = document.querySelector(".carousel .list");
const thumbnailNode = document.querySelector(".carousel .thumbnail");

nextButtonNode.onclick = function () {
  showSlider("next");
};

previousButtonNode.onclick = function () {
  showSlider("previous");
};

const timeRunning = 3000;
const timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextButtonNode.click();
}, timeAutoNext);

function showSlider(button) {
  const itemSlider = document.querySelectorAll(".carousel .list .item");
  const itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (button === "next") {
    listNode.appendChild(itemSlider[0]);
    thumbnailNode.appendChild(itemThumbnail[0]);
    carouselNode.classList.add("next");
  } else {
    const positionLastItem = itemSlider.length - 1;
    listNode.prepend(itemSlider[positionLastItem]); //step 1: get DOM
    let nextDom = document.getElementById("next");
    let prevDom = document.getElementById("prev");

    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    let timeDom = document.querySelector(".carousel .time");

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.onclick = function () {
      showSlider("next");
    };

    prevDom.onclick = function () {
      showSlider("prev");
    };
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      next.click();
    }, timeAutoNext);
    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
      let thumbnailItemsDom = document.querySelectorAll(
        ".carousel .thumbnail .item"
      );

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        next.click();
      }, timeAutoNext);
    }
    thumbnailNode.prepend(itemThumbnail[positionLastItem]);
    carouselNode.classList.add("previous");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselNode.classList.remove("next");
    carouselNode.classList.remove("previous");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextButtonNode.click();
  }, timeAutoNext);
}

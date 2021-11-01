const techItems = document.querySelector("#firstobserver");
const allTechItems = document.querySelectorAll(".techicon");

let i = 0;
let annimationActive = false;

const startAnimation = () => {
  setTimeout(() => {
    if (i < allTechItems.length) {
      allTechItems[i].classList.add("techanimate");
      i++;

      startAnimation();
    }
  }, 300);
};

const callback = (entries, observer) => {
  console.log("ovserver called");
  if (entries[0].isIntersecting && !annimationActive) {
    i = 0;
    annimationActive = true;
    console.log("now visible");
    console.log(annimationActive);

    startAnimation();
    annimationActive = false;
    return;
  }
  if (!entries[0].isIntersecting) {
    i = 0;
    allTechItems.forEach((item) => {
      item.classList.remove("techanimate");
    });
    return;
  }
};

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
observer.observe(techItems);

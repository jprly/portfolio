console.log("connected");
const techItems = document.querySelector("#firstobserver");
const allTechItems = document.querySelectorAll(".techicon");
console.log(techItems);
let i = 0;

const callback = (entries, observer) => {
  if (entries[0].isIntersecting) {
    console.log("now visible");
    console.log(entries);
    const startAnimation = () => {
      setTimeout(() => {
        if (i < allTechItems.length) {
          allTechItems[i].classList.add("techanimate");
          startAnimation();
          i++;
        }
      }, 300);
    };
    startAnimation();
  }
  if (!entries[0].isIntersecting) {
    i = 0;
    allTechItems.forEach((item) => {
      item.classList.remove("techanimate");
    });
  }
};

let options = {
  root: null,

  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
observer.observe(techItems);

console.log("connected");
const techItems = document.querySelector("#firstobserver");
const allTechItems = document.querySelectorAll(".techicon");
console.log(techItems);

const callback = (entries, observer) => {
  if (entries[0].isIntersecting) {
    let i = 0;
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
    allTechItems.forEach((item) => {
      item.classList.remove("techanimate");
    });
  }
};

let options = {
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
observer.observe(techItems);

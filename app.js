console.log("connected");
const techItems = document.querySelector("#firstobserver");
const allTechItems = document.querySelectorAll(".techicon");
console.log(techItems);

const callback = (entries, observer) => {
  //   console.log("visible", entries, observer);
  if (entries[0].isIntersecting) {
    console.log("it is actually visible");
    // techItems.classList.add("techanimate");
    // allTechItems.forEach((item) => {
    //   setTimeout(() => {
    //     item.classList.add("techanimate");
    //   }, 1000);
    // });
    // for (let i = 0; i < allTechItems.length; i++) {
    //   console.log(allTechItems[i]);
    // }
    let i = 0;
    const startAnimation = () => {
      setTimeout(() => {
        if (i < allTechItems.length) {
          console.log(i);
          allTechItems[i].classList.add("techanimate");
          startAnimation();
          i++;
        }
        // console.log(i);
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

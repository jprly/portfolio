console.log("connected");
const techItems = document.querySelector("#firstobserver");
console.log(techItems);

const callback = () => {
  console.log("visible");
};

let options = {
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
observer.observe(techItems);

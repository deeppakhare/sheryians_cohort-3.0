// const five = document.querySelector("#five");
// const main = document.querySelector("main");

// five.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// main.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// let random = Math.random() * 10;
// let r = Math.ceil(random);

// console.log(r);

const main = document.querySelector("main");
const overlay = document.querySelector("#overlay");

const btn = document.querySelector("button");
const timer = document.querySelector("#timer");
const scoree = document.querySelector("#score");

const box = document.createElement("div");
box.classList.add("box");

let interval;
let time = 0;
let score = 0;

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

const randomBox = () => {
  box.style.backgroundColor = randomColor();
  main.append(box);

  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWidth - box.offsetWidth;

  const rY = Math.random() * mainH;
  const rX = Math.random() * mainW;

  box.style.top = `${rY}px`;
  box.style.left = `${rX}px`;
};

btn.addEventListener("click", () => {
  clearInterval(interval);

  interval = setInterval(() => {
    randomBox();
    time += 1;
    timer.textContent = time;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    overlay.style.display = "flex";
  }, 10000);
});

box.addEventListener("click", () => {
  score += 1;
  scoree.textContent = score;
});


// localStorage.setItem("name", "Nitin gadkari");

// localStorage.setItem("song", "tera mera khatam");

// let lsd = localStorage.getItem("name");

// let song = localStorage.getItem("song");
// console.log(lsd);
// console.log("song->", song);

// let data = [
//   {
//     name: "piyush",
//     age: 69,
//     address: "saket nagar",
//     pincode: 462022,
//   },
//   {
//     name: "Aryan kelvin",
//     age: 69,
//     address: "saket nagar",
//     pincode: 462022,
//   },
//   {
//     name: "Bhuvan bam",
//     age: 69,
//     address: "Mumbai",
//     pincode: 462022,
//   },
// ];

// let newData = ["polo"];

// localStorage.setItem("fam-people", JSON.stringify(data));

// const lsd = localStorage.getItem("fam-people");

// let value = JSON.parse(lsd);

// console.log(value);
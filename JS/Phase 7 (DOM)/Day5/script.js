const createBtn = document.querySelector("#create");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector("#close");

const productDiv = document.querySelector(".products");

const form = document.querySelector("form");

const productsArr = JSON.parse(localStorage.getItem("products")) || [];
console.log(productsArr);

let updateIndex = null;

let ui = () => {
  productDiv.innerHTML = "";
  productsArr.forEach((elem, index) => {
    productDiv.innerHTML += `<div class="product-card">
          <div class="img">
            <img
              src="${elem.image}"
              alt=""
            />
          </div>

          <div class="text">
            <h3>${elem.productName}</h3>
            <p>${elem.description}</p>
            <p>${elem.price}</p>
          </div>

          <div class="btns">
            <button onclick="updateProduct('${elem.productName}')" id="update">Update</button>
            <button onclick="deleteProduct(${index})" id="delete">Delete</button>
          </div>
        </div>`;
  });
};

ui();

createBtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let productName = event.target[0].value;
  let description = event.target[1].value;
  let price = event.target[2].value;
  let image = event.target[3].value;

  if (
    productName.trim() === "" ||
    description.trim() === "" ||
    price.trim() === "" ||
    image === ""
  ) {
    alert("please fill all the fields");
    return;
  }

  let obj = {
    productName,
    description,
    price,
    image,
  };

  if (updateIndex !== null) {
    productsArr[updateIndex] = obj;
    updateIndex = null;
    localStorage.setItem("products", JSON.stringify(productsArr));
  } else {
    productsArr.push(obj);
    localStorage.setItem("products", JSON.stringify(productsArr));
  }

  ui();
  console.log(productsArr);

  form.reset();

  formDiv.style.display = "none";
});

const updateProduct = (name) => {
  formDiv.style.display = "flex";
  let product = productsArr.find((elem) => elem.productName === name);
  updateIndex = productsArr.findIndex((elem) => elem.productName === name);

  form[0].value = product.productName;
  form[1].value = product.description;
  form[2].value = product.price;
  form[3].value = product.image;
};

const deleteProduct = (index) => {
  productsArr.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productsArr));
  ui();
};

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
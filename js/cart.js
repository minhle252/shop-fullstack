const productNumbers = localStorage.getItem("cartNumbers");
const counter = document.querySelector("#cart p");
counter.innerText = productNumbers;

let carts = JSON.parse(localStorage.getItem("carts")) ?? [];
// function cart counter
function getCartCounter(carts) {
  function cartCounter(accumulator, currentValue) {
    return accumulator + currentValue.quantity;
  }
  const cartNumber = carts.reduce(cartCounter, 0);
  counter.innerText = cartNumber;
}

//  function get total cart
function getCartTotal(carts) {
  function getTotal(accumulator, currentValue) {
    return accumulator + currentValue.products.price * currentValue.quantity;
  }

  var totalCoin = carts.reduce(getTotal, 0);

  const totalNumber = document.querySelector("#cart-total");
  if (totalNumber) {
    totalNumber.innerText = totalCoin;
  }
}
// getCartTotal();
// var quantitySingleProduct = document.querySelector(
//   "#quantitySingleProduct"
// ).value;
// function add to cart
async function addToCart(id) {
  if (localStorage.getItem("accessToken")) {
    // addtocart
    const products = await getProductById(id);
    // console.log(products);
    let item = carts.find((c) => c.products._id == id);

    if (item) {
      // quantitySingleProduct
      //   ? (item.quantity += parseInt(quantitySingleProduct))
      //   : (item.quantity += 1);
      item.quantity += 1;
    } else {
      await carts.push({ products, quantity: 1 });
    }
    localStorage.setItem("carts", JSON.stringify(carts));

    // counter

    getCartCounter(carts);
  } else {
    window.location.href = "./login.html";
  }
}
// cart counter
function cartCounter(accumulator, currentValue) {
  return accumulator + currentValue.quantity;
}
const cartNumber = carts.reduce(cartCounter, 0);
counter.innerText = cartNumber;
// get cart
function getCart(carts) {
  let showCart = document.querySelector("#showCart");

  let listCart = carts.map((item) => {
    return `
         
          <div class="col-6">
            <div class="row justify-content-center">
                <div class="col-xl-2 mt-3 col-3 ">
                    <img src="${item.products.image}" class="w-100" alt="">
                </div>
                <div class="col my-5 text-center"><p>${item.products.name}</p></div>
                <div class="col-3 my-5 text-center">${item.quantity}</div>
            </div>
          </div>
          <div class="col-3 my-5 text-center"><p>$${item.products.price}</p></div>
          <div class="col-3 my-5"><button class="btn btn-primary" onclick="removeItem('${item.products._id}')"><i class="fa-solid fa-trash"></i> Remove</button></div>
    `;
  });
  if (showCart) {
    showCart.innerHTML = listCart.join("");
  }
  getCartCounter(carts);
  getCartTotal(carts);
}
const removeItem = (id) => {
  const item = carts.filter((item) => item.products._id != id);
  localStorage.setItem("carts", JSON.stringify(item));
  getCart(item);
  // getCartTotal();
};

getCart(carts);
// cart-number

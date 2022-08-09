function start() {
  getApi(renderProduct);
}
start();
const url = "http://localhost:5000/api/product";
const fetchApi = async (url, option) => {
  const res = await fetch(url, option);

  return res.json();
  // return res.then((response) => response.json()).then((product) => product);
};

// get product by id
const getProductById = async (id) => {
  const productsUrl = url + "/single-product/" + id;
  // console.log(productsUrl);
  const option = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return await fetch(productsUrl, option)
    .then((response) => response.json())
    .then((products) => products.product);
};
async function getApi(callback) {
  await fetch("http://localhost:5000/api/product/get-all-products", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then(callback);
}
function renderProduct(products) {
  const listProduct = document.querySelector("#product-list");
  //   console.log(products.product);
  const list = products.product;
  var htmls = list.map(function (product, index) {
    return `
    <div class="col-md-4 text-center  col-6 my-3"   key="${index}">
      <a class="product" onclick="saveSingleProduct('${product._id}')" >
        <div class="card-body p-0 card-borders">
          <img
            src="${product.image}"
            class="w-100"
            alt=""
          />
        </div>
        <p class="item d-block">${product.name}</p>
        <p class="Money">$${product.price} USD</p>
      </a>
      <button  class="btn btn-add-to-cart btn-pay border bg-light text-black my-2" onclick="addToCart('${product._id}')">
        Add to cart
      </button>
    </div>
            `;
  });

  if (listProduct) {
    listProduct.innerHTML = htmls.join("");
  }
}
async function getUserById() {
  const productsUrl = "http://localhost:5000/api/user-profile";
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  return await fetch(productsUrl, option)
    .then((response) => response.json())
    .then((profile) => profile.data);
}
// get address by user
async function getAddressByUserId() {
  const productsUrl = "http://localhost:5000/api/address/get-address";
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  return await fetch(productsUrl, option)
    .then((response) => response.json())
    .then((address) => address.data);
}

// add address by user
async function addAddress(data) {
  const productsUrl = "http://localhost:5000/api/address/add-address";
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(data),
  };
  return await fetch(productsUrl, option)
    .then((response) => response.json())
    .then((address) => address.data);
}
// update address by user
async function updateAddress(data) {
  const productsUrl = "http://localhost:5000/api/address/update-address";
  const option = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(data),
  };
  return await fetch(productsUrl, option)
    .then((response) => response.json())
    .then((address) => address.data);
}
// order by user
async function addOrder(data) {
  const productsUrl = "http://localhost:5000/api/order/add-order";
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(data),
  };
  return await fetch(productsUrl, option)
    .then((response) => response.json())
    .then((address) => address.data);
}
async function register(data) {
  const productsUrl = "http://localhost:5000/api/register";
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return await fetch(productsUrl, option)
    .then((response) => response.json())
    .then((address) => address.data);
}
// get order by user
async function getOrderByUser() {
  const productsUrl = "http://localhost:5000/api/order/get-order-by-user";
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  return await fetch(productsUrl, option)
    .then((response) => response.json())
    .then((address) => address.data);
}

// get all orders by user
async function getAllOrderByUser() {
  const productsUrl = "http://localhost:5000/api/order/get-all-order-by-user";
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  return await fetch(productsUrl, option)
    .then((response) => response.json())
    .then((address) => address.data);
}
// get product by category
async function getProductByCategory(slug) {
  const productsUrl = `http://localhost:5000/api/product/get-product-by-categories/${slug}`;
  const option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await fetch(productsUrl, option)
    .then((response) => response.json())
    .then((address) => address.data);
}

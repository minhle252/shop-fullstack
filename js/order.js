const checkout = document.querySelector("#checkout");

if (checkout) {
  checkout.onclick = async () => {
    if (!carts || carts == "") {
      alert("cart is not found");
    } else {
      submitFormInfo();
      const carts = localStorage.getItem("carts");
      const cartOrder = JSON.parse(carts);
      const order = cartOrder.map((item) => {
        return { _id: item.products._id, quantity: item.quantity };
      });
      await addOrder(order);
      localStorage.removeItem("carts");
      window.location.href = "./orderDetails.html";
    }
  };
}
// set value in cart if getAddress == null
const setValueInCart = async () => {
  const fullName = document.querySelector("#fullname");
  const phoneNumber = document.querySelector("#phoneNumber");
  const address = document.querySelector("#address");
  const city = document.querySelector("#city");

  const getAddress = await getAddressByUserId();

  if (getAddress != null) {
    fullName.setAttribute("value", `${getAddress.fullName}`);
    phoneNumber.setAttribute("value", `${getAddress.phoneNumber}`);
    address.setAttribute("value", `${getAddress.address}`);
    city.setAttribute("value", `${getAddress.city}`);
  }
};
setValueInCart();
//  add or update info of user
const submitFormInfo = async () => {
  const fullName = document.querySelector("#fullname").value;
  const phoneNumber = document.querySelector("#phoneNumber").value;
  const address = document.querySelector("#address").value;
  const city = document.querySelector("#city").value;
  const data = {
    fullName,
    address,
    phoneNumber,
    city,
  };

  const getAddress = await getAddressByUserId();

  if (getAddress == null) {
    console.log("add: ");
    console.log(await addAddress(data));
  } else {
    console.log("update: ");
    console.log(await updateAddress(data));
  }
};

// get order deltail
const getOrder = async () => {
  const listOrderItems = document.querySelector("#listOrderItems");
  const list = await getOrderByUser();

  //   console.log(productQuantity);
  if (listOrderItems) {
    const productList = list.product_list.map(
      (items) =>
        `
    <div class="row justify-content-center my-4 align-items-center">
        <div class="col-xl-2  col-3 ">
            <img src="${items._id.image}" class="w-100" alt="">
        </div>
        <div class="col text-center ">${items._id.name}</div>
        <div class="col-1 text-center"> ${items.quantity} </div>
        <div class="col-3 text-center"> ${items._id.price}$ </div>
    </div>
    `
    );
    listOrderItems.innerHTML = productList.join("");
  }
};
// get total order

const getOrderTotal = async () => {
  const orderToltal = document.querySelector("#orderToltal");
  if (orderToltal) {
    const list = await getOrderByUser();
    const productList = list.product_list.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue._id.price;
      },
      0
    );
    orderToltal.innerHTML = `Total: ${productList}$`;
  }
};

getOrderTotal();
const getOrderInfo = async () => {
  const infoOrder = document.querySelector("#infoOrder");

  if (infoOrder) {
    const profile = await getUserById();
    const address = await getAddressByUserId();

    const htmls = `
    <div class="row">
        <div class="col-xl-3 col-4 my-2">Full-Name:</div>
        <div class="col my-2">${address.fullName}</div>
    </div>
    <div class="row">
        <div class="col-xl-3 col-4 my-2">Email:</div>
        <div class="col my-2">${profile.email}</div>
    </div>
    <div class="row">
        <div class="col-xl-3 col-4 my-2">Address:</div>
        <div class="col my-2">${address.address}</div>
    </div>
    <div class="row">
        <div class="col-xl-3 col-4 my-2">Phone Number:</div>
        <div class="col my-2">${address.phoneNumber}</div>
    </div>
  `;

    infoOrder.innerHTML = htmls;
  }
};
getOrderInfo();
getOrder();

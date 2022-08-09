const getListOrder = async () => {
  const listOrderItem = document.querySelector("#listOrderItem");

  const list = await getAllOrderByUser();

  const u = list.map(
    (item) =>
      `
        ${item.product_list
          .map(
            (product, index) =>
              `
            <div class="row my-2 align-items-center">
            <div class="col-sm-1 col-12">${index + 1}</div>
                <div class="col-xl-1 col-md-2  col-sm-3">
                    <img src="${product._id.image}" class="w-100" alt="">
                </div>
                <div class="col">${product._id.name}</div>
                <div class="col-1">${product.quantity}</div>
                <div class="col-sm-3 col-12">${product._id.price}$</div>
          </div>
              `
          )
          .join("")}
      <div class="row justify-content-between ">
        <div class="col-4 pb-2 pt-3  text-secondary">${item.createdAt}</div>
        <div class="col-4 pb-2 pt-3 text-center ">Status: <span class="text-success">${
          item.status
        }</span></div>
        <div class="col-4  pb-2 pt-3  "><h6 class="ms-5 ps-3">Total: ${item.product_list.reduce(
          (acc, crr) => {
            return acc + crr.quantity * crr._id.price;
          },
          0
        )}$</h6></div>
      </div>
      <hr>
        `
  );

  listOrderItem.innerHTML = u.join("");
};
getListOrder();

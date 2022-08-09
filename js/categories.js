const category = document.querySelectorAll(".category");

const categories = localStorage.getItem("categories");
category.forEach((e) => {
  e.onclick = () => {
    const value = e.getAttribute("value");
    console.log(value);
    localStorage.setItem("categories", value);
    window.location.href = "./product-in-categories.html";
  };
});

async function getProListWithCategories() {
  const productListWithCategory = document.querySelector(
    "#productListWithCategory"
  );
  const locals = localStorage.getItem("categories");
  const data = await getProductByCategory(locals);
  const htmls = data.map(function (product, index) {
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

  if (productListWithCategory) {
    productListWithCategory.innerHTML = htmls.join("");
  }
}
getProListWithCategories();

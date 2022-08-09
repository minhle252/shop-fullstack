let singleP = JSON.parse(localStorage.getItem("singleP"));

async function saveSingleProduct(id) {
  const products = await getProductById(id);
  localStorage.setItem("singleP", JSON.stringify(products._id));
  window.location.href = "./info.html";
}

async function getsingleProduct() {
  const products = await getProductById(singleP);
  const inforSingleProduct = document.querySelector("#inforSingleProduct");
  // console.log(products);

  if (inforSingleProduct) {
    inforSingleProduct.innerHTML = `
  <!-- img -->
  <div class="col-7">
      <div class="row">
        <div class="col-12">
          <img src="${products.image}" alt="" class="w-100">
        </div>
        <div class="col-6"><img src="${products.image}" alt="" class="w-100"></div>
        <div class="col-6"><img src="./plugins/images/logo-shirt.png" alt="" class="w-100"></div>
      </div>
  </div>
  <!-- infomation -->
  <div class="col-5">
    <p class="title">${products.name}</p>
    <p>$${products.price} USD</p>
    <p class="message-bottom">Tax includes</p>
    <p class="message-bottom">Color</p>
    <div class="d-flex">
      <button class="btn border border-circle">Black</button>
      <button class="btn bg-black text-white mx-2  border-circle">White</button>
    </div>
    <p class="message-bottom mt-4">Size</p>
    <div class="d-flex">
      <button class="btn bg-black text-white  border-circle btn-size">S</button>
      <button class="btn border  border-circle btn-size mx-2">M</button>
      <button class="btn border  border-circle btn-size mx-2">L</button>
      <button class="btn border  border-circle btn-size mx-2">XL</button>
    </div>
    <p class="message-bottom mt-4">Quantity</p>
    <input type="number" id="quantitySingleProduct" value="1" placeholder="1" class="form-control my-2 w-50">
    <button class="btn btn-pay border bg-white text-black my-2" onclick="addToCart('${products._id}')" >Add to cart</button>
    <button class="btn btn-pay text-white my-2">Buy it now</button>
    <p class="item w-75">${products.description}</p>
    <h5>Size guide</h5>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">S</th>
          <th scope="col">M</th>
          <th scope="col">L</th>
          <th scope="col">XL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            Length <br>
            (worldwide)<br>
            (inches)
          </th>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td>31</td>
        </tr>
        <tr>
          <th scope="row">
            Width<br>
            (worldwide)<br>
            (inches)
          </th>
          <td>18</td>
          <td>20</td>
          <td>22</td>
          <td>24</td>
        </tr>
        <tr>
          <th scope="row">
            Length<br>
            (East Asia)<br>
            (inches)
          </th>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
        </tr>
        <tr>
          <th scope="row">
            Width<br>
            (worldwide)<br>
            (inches)
          </th>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>22</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  `;
  }
}
getsingleProduct();

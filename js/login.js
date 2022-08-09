// login
const login = async (data) => {
  const loginURL = "http://localhost:5000/api/login";
  // console.log(productsUrl);
  const option = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return await fetch(loginURL, option)
    .then((response) => {
      //   console.log(response);
      //   response.json();
      if (response.ok) {
        return response.json();
      }
      throw Error(response.status);
    })
    .then((data) => {
      localStorage.setItem("accessToken", data.accessToken);
      window.location.href = "./index.html";
    })
    .catch((error) => {
      loginValidate(error);
    });
};

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btnLogin = document.querySelector("#btnLogin");
var inValid = document.querySelector("#error");

let user = localStorage.getItem("accessToken");
// singup
async function postLogin(e) {
  const data = {
    username: username.value,
    password: password.value,
  };

  // console.log(data);

  await login(data);
  loginsuccess();

  //   const users = await login(data);
  //   await user.push({ users });

  //   localStorage.setItem("user", JSON.stringify(user));
  //   console.log(user);
}
if (btnLogin) {
  btnLogin.onclick = (e) => {
    e.preventDefault();
    loginValidate();
    postLogin();
  };
}

function loginValidate(error) {
  if (username.value == "" || password.value == "") {
    inValid.innerText = "missing username or password";
  } else if (error) {
    inValid.innerHTML = "Incorrect username or password </br>" + error;
  } else {
    inValid.innerText = "";
  }
}

async function loginsuccess() {
  const locals = localStorage.getItem("accessToken");
  const iconLogin = document.querySelector("#loginController");

  const product = await getUserById();

  product ? product : "";
  if (locals) {
    iconLogin.innerHTML = ` 
    <a class="nav-link dropdown-toggle login" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <span>${product.username}</span>
    </a>
    <ul class="dropdown-menu dropdown-profile" aria-labelledby="navbarDropdownMenuLink">
      <li><a class="dropdown-item" href="./profile.html">Profile</a></li>
      <li><a class="dropdown-item" href="./history.html">History</a></li>
      <li><a class="dropdown-item" onclick="logOut()" href="#">Log out</a></li>
    </ul>`;
  } else {
    iconLogin.innerHTML = `<a href="./login.html" class="item me-2"
    ><i class="fa-solid fa-user f-20 mt-4"></i
  ></a>`;
  }
}
loginsuccess();

const logOut = () => {
  localStorage.removeItem("accessToken");
  window.location.href = "./login.html";

  // push("./login.index");
  loginsuccess();
};

const btnSingup = document.querySelector("#btnSingup");

btnSingup.onclick = async () => {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const error = document.querySelector("#error");

  const data = {
    username,
    password,
    email,
  };

  console.log(data);
  if (username == "" || password == "" || email == "") {
    return (error.innerText = "username, password, email is required");
  } else {
    error.innerText = "";
    await register(data);
    alert(`success ${username}`);
    window.location.href = "./login.html";
  }
};
// const signupValidate = (username, password, email) => {
//   const error = document.querySelector("#error");
//   if (username == "" || password == "" || email == "") {
//     return (error.innerText = "username, password, email is required");
//   } else {
//     return (error.innerText = "");
//   }
// };

const getProfile = async () => {
  const profileId = document.querySelector("#profile");
  const profile = await getUserById();
  const address = await getAddressByUserId();
  console.log(address);
  const rendersHtmls = `
  <div class="row justify-content-center my-2">
      <div class=" col-xl-3 col text-start">
        Full name:
      </div>
      <div class="col-xl-3 col text-start">${address.fullName}</div>
      <div class="col-xl-3 col text-end"><a href="#">Edit</a></div>

  </div>
  <div class="row justify-content-center my-2">
      <div class=" col-xl-3 col text-start">
        Email:
      </div>
      <div class=" col-xl-3 col text-start">${profile.email}</div>
      <div class="col-xl-3 col text-end"><a href="#">Edit</a></div>
  </div>
  <div class="row justify-content-center my-2">
      <div class=" col-xl-3 col text-start">
        Address:
      </div>
      <div class=" col-xl-3 col text-start">${address.address}</div>
      <div class="col-xl-3 col text-end"><a href="#">Edit</a></div>
  </div>
  <div class="row justify-content-center my-2">
      <div class=" col-xl-3 col text-start">
        City:
      </div>
      <div class=" col-xl-3 col text-start">${address.city}</div>
      <div class="col-xl-3 col text-end"><a href="#">Edit</a></div>
  </div>
  <div class="row justify-content-center my-2">
      <div class=" col-xl-3 col text-start">
        Phone Number:
      </div>
      <div class=" col-xl-3 col text-start">${address.phoneNumber}</div>
      <div class="col-xl-3 col text-end"><a href="#">Edit</a></div>
  </div>
  
  `;

  if (profileId) {
    profileId.innerHTML = rendersHtmls;
  }
};
getProfile();

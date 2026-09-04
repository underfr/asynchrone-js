let username = document.getElementById("user-name");
let email = document.getElementById("user-email");
let phone = document.getElementById("user-phone");
let address = document.getElementById("user-address");
let country = document.getElementById("user-country");
let picture = document.getElementById("user-picture");
let refresh = document.getElementById("refresh-btn");
const fetchUser = () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      username.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;
      email.textContent = data.results[0].email;
      phone.textContent = data.results[0].phone;
      address.textContent = `${data.results[0].location.street.number}, ${data.results[0].location.street.name} `;
      country.textContent = `${data.results[0].location.city}, ${data.results[0].location.country} `;
      picture.src = data.results[0].picture.large;
    });
};
fetchUser();

refresh.addEventListener("click", fetchUser);

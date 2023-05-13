import { dataProducts } from "./data.js";

const productData = JSON.parse(dataProducts);
const productBox = document.querySelector(".pricing__list");

productData.forEach(({ heading, users, price }) => {
  const productEl = `
  <li class="pricing__list__item">
    <article>
      <h3 class="pricing__list__title">${heading}</h3>
      <div class="pricing__list__content-top">up&nbsp;to&nbsp;${users}&nbsp;users</div>
      <div class="pricing__list__content-bottom">
        <p class="pricing__text">$ <span>${price}</span></p>
        <p class="pricing__text2">per month</p>
      </div>
      <button class="btn2">Order</button>
    </article>
  </li>`;
  productBox.insertAdjacentHTML("beforeend", productEl);
});

const slaider = document.querySelector(".pricing__list");
slaider.scrollLeft = 247;

function slaiderScrollLeft() {
  var w = window.innerWidth;
  if (w < 1180) {
    slaider.scrollLeft = 247;
  }
}

window.addEventListener("resize", function () {
  slaiderScrollLeft();
});

const form = document.querySelector(".form__authorization");

form.addEventListener("submit", (e) => {
  const userPassFirst = document.querySelector("#password1");
  const userPassSecond = document.querySelector("#password2");

  if (userPassFirst.value !== userPassSecond.value) {
    userPassFirst.style = "border: 1px solid red";
    userPassSecond.style = "border: 1px solid red";
    e.preventDefault();
  } else {
    userPassFirst.style = "border: 1px solid green";
    userPassSecond.style = "border: 1px solid green";
  }
});

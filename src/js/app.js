import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  var product = document.querySelectorAll('.product');
  var price = document.querySelector('.price');
  product.dataset.price = price.innerText;
});

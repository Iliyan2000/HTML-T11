import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  var _product = document.querySelectorAll('.product');
  var _price = document.querySelector('.price');
  _product.dataset.price = _price.innerText;
});

import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  var product = document.querySelector('.product');
  var price = document.querySelector('.price');
  product.attr("data-price", price.innerText);
});

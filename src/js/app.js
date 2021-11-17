import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  var product = document.getElementsByClassName("product");
  var price = document.getElementsByClassName("price");
  product.attr("data-price", price.innerText);
});

import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  var product = document.getElementsByClassName("product");
  var attr = document.createAttribute("date-price");
  var price = document.getElementsByClassName("price");
  attr.value = price.innerText;
  product.setAttributeNode(attr);
});

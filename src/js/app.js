import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  var _product = document.getElementsByClassName("product");
  var _price = document.getElementsByClassName("price");
  //var att = document.createAttribute("data-price");
  //att.value = _price.innerText;
  //_product.setAttributeNode(att);
  _product[0].setAttribute("data-price", _price.innerText);
  //_product.dataset.price = _price.innerText; - not working
});

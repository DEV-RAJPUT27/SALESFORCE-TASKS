let qtyInput = document.querySelector(".qty");
let priceTag = document.querySelector(".price");
let variantSelect = document.getElementById("variant");
let totalText = document.getElementById("total");
let removeButton = document.querySelector(".remove-btn");
let itemBox = document.querySelector(".item");

function updateTotal() {
  let quantity = parseInt(qtyInput.value);
  let selectedPrice = parseInt(variantSelect.value);

  if (!isNaN(quantity) && quantity > 0) {
    priceTag.innerText = selectedPrice;
    totalText.innerText = selectedPrice * quantity;
  } else {
    totalText.innerText = "0";
  }
}

qtyInput.addEventListener("input", updateTotal);
variantSelect.addEventListener("change", updateTotal);

removeButton.addEventListener("click", function () {
  itemBox.remove();
  totalText.innerText = "0";
});
updateTotal();

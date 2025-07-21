function increaseQty() {
  var qty = document.getElementById("qty");
  qty.value = parseInt(qty.value) + 1;
}

function decreaseQty() {
  var qty = document.getElementById("qty");
  if (parseInt(qty.value) > 1) {
    qty.value = parseInt(qty.value) - 1;
  }
}

function changeImage(imgElement) {
  var mainImg = document.getElementById("mainImg");
  mainImg.src = imgElement.src;
}

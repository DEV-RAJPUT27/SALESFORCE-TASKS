function addToCart(productName) {
  showMessage(productName + " has been added to your cart!");
}

function showMessage(msg) {
  const msgBox = document.getElementById("msgBox") || createMsgBox();
  const msgItem = document.createElement("div");
  msgItem.className = "msgItem";
  msgItem.textContent = msg;
  msgBox.appendChild(msgItem);

  setTimeout(() => {
    msgItem.remove();
  }, 3000);
}
function createMsgBox() {
  const box = document.createElement("div");
  box.id = "msgBox";
  document.body.appendChild(box);
  return box;
}
function scrollToFeatured() {
  const featured = document.querySelector("#featured");
  if (featured) {
    featured.scrollIntoView({ behavior: "smooth" });
  }
}

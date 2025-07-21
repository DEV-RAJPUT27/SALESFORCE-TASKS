function showLightbox(src) {
  var lightbox = document.getElementById("lightbox");
  var img = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  img.src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

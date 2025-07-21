const stars = document.querySelectorAll(".star");
let rating = 0;

stars.forEach(star => {
  star.addEventListener("click", function () {
    rating = this.getAttribute("data-value");
    updateStars(rating);
  });
});

function updateStars(rating) {
  stars.forEach(star => {
    if (star.getAttribute("data-value") <= rating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
}

document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (rating == 0) {
    alert("Please select a star rating!");
    return;
  }

  document.getElementById("thankYouMsg").innerText =
    "Thank you " + name + "!\n Your feedback is submitted with a rating of " + rating + " star(s).";


  this.reset();
  updateStars(0);
});

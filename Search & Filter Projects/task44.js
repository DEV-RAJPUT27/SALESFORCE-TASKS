function toggleAnswer(questionElement) {
  let answer = questionElement.nextElementSibling;
  answer.style.display = (answer.style.display === "block") ? "none" : "block";
}

document.getElementById("searchInput").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let faqBoxes = document.getElementsByClassName("faq-box");

  for (let i = 0; i < faqBoxes.length; i++) {
    let question = faqBoxes[i].getElementsByClassName("question")[0];
    let text = question.textContent.toLowerCase();

    if (text.includes(filter)) {
      faqBoxes[i].style.display = "block";
    } else {
      faqBoxes[i].style.display = "none";
    }
  }
});

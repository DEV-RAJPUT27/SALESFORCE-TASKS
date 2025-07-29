let inputBox = document.getElementById("searchInput");
let students = document.getElementById("studentList").getElementsByTagName("li");

inputBox.addEventListener("keyup", function() {
  let filter = inputBox.value.toLowerCase();

  for (let i = 0; i < students.length; i++) {
    let name = students[i].textContent.toLowerCase();
    if (name.includes(filter)) {
      students[i].style.display = "list-item";
    } else {
      students[i].style.display = "none";
    }
  }
});

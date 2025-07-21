function addSkill() {
    var skill = document.getElementById("new-skill").value;
    if (skill.trim() !== "") {
        var ul = document.getElementById("skills-list");
        var li = document.createElement("li");
        li.textContent = skill;
        ul.appendChild(li);
        document.getElementById("new-skill").value = "";
    }
}

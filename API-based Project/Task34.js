function getUser() {
  let user = document.getElementById("username").value.trim();
  if (user === "") {
    alert("Please enter a GitHub username.");
    return;
  }

  fetch(`https://api.github.com/users/${user}`)
    .then(res => {
      if (!res.ok) throw new Error("User not found");
      return res.json();
    })
    .then(data => {
      document.getElementById("avatar").src = data.avatar_url;
      document.getElementById("name").innerText = data.name || "No name available";
      document.getElementById("bio").innerText = data.bio || "No bio provided";
      document.getElementById("followers").innerText = "Followers: " + data.followers;
      document.getElementById("reposCount").innerText = "Public Repositories: " + data.public_repos;
      document.getElementById("profileLink").href = data.html_url;

      document.getElementById("profile").style.display = "block";
      loadRepos(user);
    })
    .catch(error => {
      alert("GitHub user not found!");
      document.getElementById("profile").style.display = "none";
    });
}

function loadRepos(username) {
  fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`)
    .then(res => res.json())
    .then(repos => {
      const reposList = document.getElementById("reposList");
      reposList.innerHTML = "";
      repos.forEach(repo => {
        let item = document.createElement("div");
        item.className = "repo-item";
        item.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        reposList.appendChild(item);
      });
    });
}

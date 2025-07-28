const apiKey = "pub_f3b9e6fa242d4bb0a8de5d89c992c450";

function loadNews() {
  const query = document.getElementById("searchInput").value || "";
  const category = document.getElementById("categorySelect").value;

  let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=en`;

  if (query) {
    url += `&q=${query}`;
  }

  if (category) {
    url += `&category=${category}`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const newsBox = document.getElementById("newsBox");
      newsBox.innerHTML = "";

      if (!data.results || data.results.length === 0) {
        newsBox.innerHTML = "<p>No news found for the selected filters.</p>";
        return;
      }

      data.results.forEach(news => {
        const card = document.createElement("div");
        card.className = "news-card";

        const image = document.createElement("img");
        image.src = news.image_url || "";

        const content = document.createElement("div");
        content.className = "news-content";

        content.innerHTML = `
          <h3>${news.title}</h3>
          <p>${news.description || "No description available."}</p>
          <a href="${news.link}" target="_blank">Read more</a>
        `;

        card.appendChild(image);
        card.appendChild(content);
        newsBox.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error fetching news:", err);
      alert("Failed to load news.");
    });
}

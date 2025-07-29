let movies = [
  { title: "Inception", genre: "Sci-Fi", year: 2010 },
  { title: "The Matrix", genre: "Action", year: 1999 },
  { title: "Interstellar", genre: "Sci-Fi", year: 2014 },
  { title: "The Dark Knight", genre: "Action", year: 2008 },
  { title: "Forrest Gump", genre: "Drama", year: 1994 },
  { title: "Avengers: Endgame", genre: "Superhero", year: 2019 },
  { title: "Titanic", genre: "Romance", year: 1997 },
  { title: "Jurassic Park", genre: "Adventure", year: 1993 },
  { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
  { title: "Gladiator", genre: "Historical", year: 2000 }
];

let listContainer = document.getElementById("movieList");
let searchInput = document.getElementById("searchBar");

function displayMovies(filter = "") {
  listContainer.innerHTML = "";

  let filtered = movies.filter((movie) => {
    let keyword = filter.toLowerCase();
    return (
      movie.title.toLowerCase().includes(keyword) ||
      movie.genre.toLowerCase().includes(keyword) ||
      movie.year.toString().includes(keyword)
    );
  });

  if (filtered.length === 0) {
    listContainer.innerHTML = "<li>No movies found.</li>";
    return;
  }

  filtered.forEach((movie) => {
    let li = document.createElement("li");
    li.className = "movie-item";

    li.innerHTML = `
      <div class="movie-title">${movie.title}</div>
      <div class="movie-details">Genre: ${movie.genre} | Year: ${movie.year}</div>
    `;

    listContainer.appendChild(li);
  });
}

displayMovies();

searchInput.addEventListener("keyup", function () {
  displayMovies(this.value);
});

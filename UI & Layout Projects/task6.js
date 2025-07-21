function filterListings() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var cards = document.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        var content = cards[i].innerText.toLowerCase();
        if (content.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

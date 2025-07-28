const apiKey = "oaI6gLnY0+mi0LWJm4wAzw==1QWdA4GQ3yMrjxrc";

function fetchQuote() {
  const quoteText = document.getElementById("quoteText");
  const authorText = document.getElementById("authorText");

  quoteText.textContent = "Loading quote...";
  authorText.textContent = "";

  fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: { "X-Api-Key": apiKey }
  })
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        quoteText.textContent = `"${data[0].quote}"`;
        authorText.textContent = `- ${data[0].author}`;
      } else {
        quoteText.textContent = "No quote found.";
        authorText.textContent = "- Unknown";
      }
    })
    .catch(error => {
      console.error(error);
      quoteText.textContent = "Something went wrong.";
      authorText.textContent = "- Error";
    });
}

function copyQuote() {
  const quote = document.getElementById("quoteText").innerText;
  const author = document.getElementById("authorText").innerText;
  const fullQuote = `${quote}\n${author}`;
  navigator.clipboard.writeText(fullQuote).then(() => {
    alert("Quote copied to clipboard!");
  });
}

const apiKey = "437c2352748a38b7103deac8";
const fromDropdown = document.getElementById("fromCurrency");
const toDropdown = document.getElementById("toCurrency");

const currencies = ["USD", "EUR", "INR", "GBP", "JPY", "AUD", "CAD", "CHF"];

currencies.forEach(curr => {
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  option1.value = option1.text = curr;
  option2.value = option2.text = curr;
  fromDropdown.add(option1);
  toDropdown.add(option2);
});

fromDropdown.value = "USD";
toDropdown.value = "INR";

function convertCurrency() {
  let amount = document.getElementById("amount").value;
  let from = fromDropdown.value;
  let to = toDropdown.value;

  if (amount === "") {
    alert("Please enter amount");
    return;
  }

  let url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.result === "success") {
        document.getElementById("resultBox").innerText =
          `${amount} ${from} = ${data.conversion_result} ${to}`;
      } else {
        document.getElementById("resultBox").innerText =
          "Error in conversion. Try again.";
      }
    })
    .catch(error => {
      document.getElementById("resultBox").innerText =
        "Something went wrong. Please check API key or network.";
      console.error(error);
    });
}

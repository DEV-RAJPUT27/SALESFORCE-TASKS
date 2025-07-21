function calculateTip() {
    var bill = document.getElementById("billAmount").value;
    var tip = document.getElementById("tipPercent").value;

    if (bill === "" || tip === "") {
        alert("Please enter both fields!");
        return;
    }

    var billValue = parseFloat(bill);
    var tipValue = parseFloat(tip);

    var tipAmount = billValue * (tipValue / 100);
    var totalAmount = billValue + tipAmount;

    document.getElementById("tipAmount").innerText = "Tip: ₹" + tipAmount.toFixed(2);
    document.getElementById("totalAmount").innerText = "Total: ₹" + totalAmount.toFixed(2);
}

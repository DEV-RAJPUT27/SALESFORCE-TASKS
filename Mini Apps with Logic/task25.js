function convert() {
    var input = document.getElementById("inputValue").value;
    var type = document.getElementById("conversionType").value;

    if (input === "") {
        alert("Please enter a value!");
        return;
    }

    var value = parseFloat(input);
    var result = 0;
    var unit = "";

    if (type === "cmToInch") {
        result = value / 2.54;
        unit = " inches";
    } else if (type === "kgToLb") {
        result = value * 2.20462;
        unit = " lbs";
    } else if (type === "cToF") {
        result = (value * 9/5) + 32;
        unit = " °F";
    } else if (type === "inchToCm") {
        result = value * 2.54;
        unit = " cm";
    } else if (type === "lbToKg") {
        result = value / 2.20462;
        unit = " kg";
    } else if (type === "fToC") {
        result = (value - 32) * 5/9;
        unit = " °C";
    }

    document.getElementById("resultText").innerText = "Result: " + result.toFixed(2) + unit;
}

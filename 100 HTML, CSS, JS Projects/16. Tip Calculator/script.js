const billInp = document.getElementById("billAmount");
const tipInp = document.getElementById("tipPercentage");
const calcTotal = document.getElementById("total");
const calcBtn = document.getElementById("calculate");

calcBtn.addEventListener("click", () => {
    const billValue = billInp.value;
    const tipValue = tipInp.value;
    const totalValue = billValue * (1 + tipValue / 100);
    calcTotal.innerHTML = `&#36;${totalValue.toFixed(2)}`;
});
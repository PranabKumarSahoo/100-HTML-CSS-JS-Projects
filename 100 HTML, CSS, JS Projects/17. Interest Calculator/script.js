const principalInp = document.getElementById("principal");
const rateInp = document.getElementById("rate");
const timeInp = document.getElementById("time");
const calcBtn = document.getElementById("calculate");
const pricipalAmount = document.getElementById("pricipalAmount");
const totalInterest = document.getElementById("totalInterest");
const totalAmount = document.getElementById("totalAmount");
const resultBox = document.querySelector(".result");

calcBtn.addEventListener("click", () => {
    let p = Number(principalInp.value);
    let r = Number(rateInp.value);
    let t = Number(timeInp.value);

    if (p == "" || r == "" || t == "") {
        resultBox.style.display = "none";
    } else {
        let simpleInterest = (p * r * t) / 100;
        let amount = p + simpleInterest;

        pricipalAmount.innerHTML = `Principal Amount: <b>$${p.toFixed(2)}</b>`;
        totalInterest.innerHTML = `Total Interest: <b>$${simpleInterest.toFixed(2)}</b>`;
        totalAmount.innerHTML = `Total Amount: <b>$${amount.toFixed(2)}</b>`;
        
        resultBox.style.display = "block";
    }
});

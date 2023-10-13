const getColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("colorCode").innerHTML = randomColor;
}

btn.addEventListener("click", getColor);
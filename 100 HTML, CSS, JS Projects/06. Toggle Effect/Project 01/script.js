function toggleClick() {
    const toggleDiv = document.getElementById("toggleDiv");
    if (toggleDiv.style.display == "none") {
        toggleDiv.style.display = "block";
        toggleDiv.style.transition = "all 2s";
    }
    else {
        toggleDiv.style.display = "none";
    }
}
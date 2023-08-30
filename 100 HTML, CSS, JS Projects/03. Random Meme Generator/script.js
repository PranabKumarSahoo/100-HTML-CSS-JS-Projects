var generateBtn = document.getElementById("generate-btn");
var memeTitle = document.getElementById("meme-title");
var memeImg = document.getElementById("meme-img");
var memeAuthor = document.getElementById("meme-author");

function updateDetails(url, title, author) {
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by @${author}`;
}

function GenerateMeme() {
    fetch("https://meme-api.com/gimme")
        .then((response) => response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author);
        })
}

function bodyLoad() {
    GenerateMeme();
}
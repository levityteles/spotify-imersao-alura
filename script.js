const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");

console.log(searchInput.value);

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
  // hidePlaylists();
  playlistContainer.classList.add("hidden");
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  result.forEach((element) => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });
  resultArtist.classList.remove('hidden');
}

// function hidePlaylists() {
//   playlistContainer.classList.add("hidden");
// }

document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    playlistContainer.classList.remove("hidden");
    resultArtist.classList.add("hidden");
    return;
  }
  requestApi(searchTerm);
})

// COLORS CSS **********************************************************************

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".footer").classList.remove("show");
});


document.addEventListener("DOMContentLoaded", function () {
    // Lista de cores disponíveis na paleta
    const colorPalette = ["#687EFF", "#80B3FF", "#98E4FF", "#B6FFFA"];
  
    // Seleciona todos os elementos com a classe "card"
    const cards = document.querySelectorAll(".cards");
  
    // Aplica uma cor aleatória a cada card
    cards.forEach(function (card) {
      const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      card.style.backgroundColor = randomColor;
    });
  });
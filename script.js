const jokepara = document.getElementById("jokepara");

const urls = {
  random:
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single",
  programming:
    "https://v2.jokeapi.dev/joke/programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single",
  dark: "https://v2.jokeapi.dev/joke/dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single",
  pun: "https://v2.jokeapi.dev/joke/pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single",
  misc: "https://v2.jokeapi.dev/joke/miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single",
};

document.addEventListener("click", (e) => getJoke(e));

function getJoke(e) {
  switch (e.target.name) {
    case "random":
      featchJoke(urls.random);
      break;
    case "programming":
      featchJoke(urls.programming);
      break;
    case "dark":
      featchJoke(urls.dark);
      break;
    case "pun":
      featchJoke(urls.pun);
      break;
    case "misc":
      featchJoke(urls.misc);
      break;
  }
}

function featchJoke(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      jokepara.textContent = json.joke;
    });
}

featchJoke(urls.random);

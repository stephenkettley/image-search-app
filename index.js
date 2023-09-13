const accessKey = "vi1ASPVICbiuDc9xi1th-aojAiV-fCsDKd_hVRFADQc";

const formElement = document.querySelector("form");
const searchButtonElement = document.getElementById("search-button");
const formInputElement = document.getElementById("search-input");

const searchResultsElement = document.querySelector(".search-results");
const showMoreButtonElement = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = formInputElement.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  searchImages();
});

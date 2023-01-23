// Info om fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// Fake JSON API
// https://jsonplaceholder.typicode.com/users/1

// The fetch() requires only one parameter which is the URL of the resource
// that you want to fetch:



// Övning

// 1: Gör en fetch mot "https://jsonplaceholder.typicode.com/users/"

// 2: Hantera fallen när det gått bra och när det har gått dåligt.

// 3: Lägg till en input där användaren får välja en siffra. Denna siffra motsvara en person-id.

// 4: Skapa en tillhärande knapp som gör söken.

// 5: Skriv ut personens namn på din hemsida (inte i konsolen).

// 6: Under tiden fetchen SVGMarkerElement, skriv ut ordet "Laddar"  på hemsidan

// Först lyssnar vi om en ny Id har skrivits in (om värdet har alltså ändrats)
const input = document.querySelector(".inputChange");
input.addEventListener("change", inputChange);

function inputChange(event) {
  getPersonData(event.target.value);
}

function getPersonData(id) {
  showLoader();
  let fetchPromise = createFetch(id);
  fetchPromise
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      createElementWithText(json.name);
    })
    .catch(function (error) {
      console.log("Det blev fel!");
    })
    .finally(function (data) {
      hideLoader();
    });
}

function createElementWithText(name) {
  const parentDiv = document.getElementById("placeholder");
  const newElement = document.createElement("div");
  const newTextContent = document.createTextNode(name);
  newElement.appendChild(newTextContent);

  parentDiv.innerHTML = "";

  parentDiv.appendChild(newElement);
}

let loader = document.querySelector(".loader");

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

function createFetch(id) {
  return fetch("https://jsonplaceholder.typicode.com/users/" + id);
}

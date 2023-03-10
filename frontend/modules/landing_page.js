import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    let response = await fetch(config.backendEndpoint + "/cities");
    let json = await response.json();
    return json;
  } catch (err) {
    return null;
  }
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let dataDiv = document.getElementById('data');
  let cardDiv = document.createElement('div');
  cardDiv.setAttribute('class', 'col-sm-6 col-lg-3 mb-4');
  cardDiv.innerHTML = `<a href="pages/adventures/?city=${id}" id=${id}>
    <div class="tile">
      <div class="tile-text text-center">
        <h5>${city}</h5>
        <p>${description}</p>
      </div>
      <img src=${image} alt=${city} class="img-responsive">
    </div>
  </a>
`;
  dataDiv.appendChild(cardDiv);
}

export { init, fetchCities, addCityToDOM };

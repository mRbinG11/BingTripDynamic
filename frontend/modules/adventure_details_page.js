import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  let params = new URLSearchParams(search);

  // Place holder for functionality to work in the Stubs
  return params.get("adventure");
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try {
    let response = await fetch(
      config.backendEndpoint + "/adventures/detail?adventure=" + adventureId
    );
    let json = await response.json();
    // Place holder for functionality to work in the Stubs
    return json;
  } catch (err) {
    return null;
  }
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  let {
    id,
    name,
    subtitle,
    images,
    content,
    available,
    reserved,
    costPerHead,
  } = { ...adventure };

  let nameEle = document.getElementById("adventure-name");
  nameEle.textContent = name;

  let subtitleEle = document.getElementById("adventure-subtitle");
  subtitleEle.textContent = subtitle;

  let imagesEle = document.getElementById("photo-gallery");
  images.forEach((image) => {
    let imgDiv = document.createElement("div");
    let imgEle = document.createElement("img");
    imgEle.src = image;
    imgEle.className = "activity-card-image";
    imgDiv.appendChild(imgEle);
    imagesEle.appendChild(imgDiv);
  });

  let contentEle = document.getElementById("adventure-content");
  contentEle.textContent = content;
}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let imagesEle = document.getElementById("photo-gallery");
  imagesEle.innerHTML = `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators" id="cIndicators">
      
    </div>
    <div class="carousel-inner" id="cInner">
    
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  let cIndicators = document.getElementById("cIndicators");
  let cInner = document.getElementById("cInner");
  let i = 0;
  images.forEach((image) => {
    let btnClass = "";
    let divClass = "carousel-item";
    if (i === 0) {
      btnClass += "active";
      divClass += " active";
    }
    cIndicators.innerHTML += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="${btnClass}"></button>`;
    let imgDiv = document.createElement("div");
    imgDiv.className = divClass;
    let imgEle = document.createElement("img");
    imgEle.src = image;
    imgEle.className = "activity-card-image";
    imgDiv.appendChild(imgEle);
    cInner.appendChild(imgDiv);
    i++;
  });
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.
}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field
}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't
}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};

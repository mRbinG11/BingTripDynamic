import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try {
    let response = await fetch(config.backendEndpoint + "/reservations/");
    let json = await response.json();
    return json;
  } catch (err) {
    // Place holder for functionality to work in the Stubs
    return null;
  }
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table

  //Conditionally render the no-reservation-banner and reservation-table-parent
  if (reservations.length) {
    document.getElementById("no-reservation-banner").style.display = "none";
    document.getElementById("reservation-table-parent").style.display = "block";
  } else {
    document.getElementById("no-reservation-banner").style.display = "block";
    document.getElementById("reservation-table-parent").style.display = "none";
  }
  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */
  let tableEle = document.getElementById("reservation-table");
  reservations.forEach((reservation) => {
    // console.log(reservation);
    let dateParts = reservation.date.split("-");
    let date = new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]);
    let time = new Date(reservation.time);
    let timeStr = time.toLocaleString("en-IN", {
      dateStyle: "long",
      timeStyle: "medium",
    });
    timeStr = timeStr.replace(" at", ",");
    let tRow = document.createElement("tr");
    tRow.innerHTML = `<td scope="col">${reservation.id}</td>
      <td scope="col">${reservation.name}</td>
      <td scope="col">${reservation.adventureName}</td>
      <td scope="col">${reservation.person}</td>
      <td scope="col">${date.toLocaleDateString("en-IN")}</td>
      <td scope="col">${reservation.price}</td>
      <td scope="col">${timeStr}</td>
      <td scope="col" id='${reservation.id}'>
        <a href='../detail/?adventure=${reservation.adventure}'>
          <button type='button' class='reservation-visit-button'>
            Visit Adventure
          </button>
        </a>
      </td>`;
    tableEle.appendChild(tRow);
  });
}

export { fetchReservations, addReservationToTable };

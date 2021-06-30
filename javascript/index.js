// Display tomorrow's date for scheduling
function getTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    $('#day').append(tomorrow.getDate());
    $('#month').append(tomorrow.getMonth() + 1);
    $('#year').append(tomorrow.getFullYear());
}

// API call to get all aircraft (only one)
function getAllAircraft() {
    $.ajax(`https://infinite-dawn-93085.herokuapp.com/aircrafts`)
    .done(function(aircraftList) {
        console.log(aircraftList);
        // display aircraft in left sidebar
        aircraftList.data.forEach(function(nameItem) {
            $('#aircraftContainer').append(`<div class='col-12 border-black content center'>${nameItem.ident}</div>`);
            $('#aircraftName').append(`${nameItem.ident}`)
        })
    });
}
// array for flights in rotation list
const rotationList = [];

function renderRotationList() {
    // clear flight list in UI
    $('#rotationContainer').empty();
    // loop and append sorted list to UI
    rotationList.forEach(function(x) {
        $('#rotationContainer').append(`<div id='flight${x.id}' class='col-12 content border-black rotation-item'>
            <div class='flight-box flex'>
                <h3 class='rotation-title'>Flight: <span>${x.id}</span></h3>
                </div> 
                <div class='flight-info flex'>
                    <div class='flight-info-display'><span>${x.origin}</span><span>${x.readable_departure}</span></div>
                    <span><i class='bi bi-arrow-right'></i></span>
                    <div class='flight-info-display'><span>${x.destination}</span><span>${x.readable_arrival}</span></div>
                </div>
                <div class='btn remove'>Remove Flight -</div>
            </div>
        </div>`);
        // click handler for removal of flight from list
        $(`#flight${x.id} > .remove`).click(x, removeFlightHandler);
    });
}

// on click of +, flight is selected
function selectFlightHandler(flightItemEvent) {
    let flightItem = flightItemEvent.data;
    console.log(flightItem);
    // rule: flights must be in order in rotation list
    // added flights go into rotationList array
    rotationList.push(flightItem);
    // sort the array
    rotationList.sort(function(flightItem1, flightItem2) {
        if (flightItem1.departuretime < flightItem2.departuretime) {
            return -1;
          }
          if (flightItem1.departuretime > flightItem2.departuretime) {
            return 1;
          }
          return 0;
    });
    // display list in UI
    renderRotationList();
}

// on click of -, flight will disappear from center rotation list
function removeFlightHandler(flightItemEvent) {
    let flightItem = flightItemEvent.data;
    console.log(flightItem);
    // selected flight is removed from rotationList array
    rotationList.pop(flightItem);
    // display list in UI
    renderRotationList();
}

// API call to get available flights
function getAllFlights() {
    $.ajax(`https://infinite-dawn-93085.herokuapp.com/flights`)
    .done(function(flightList) {
        console.log(flightList);
        // display available flights in right sidebar
        flightList.data.forEach(function(flightItem) {
            $('#flightContainer').append(`<div id='flight${flightItem.id}' class='col-12 border-black center content content-inner'><div class='flight-box flex center'><span>${flightItem.id}</span></div> 
            <div class="flight-info center flex">
                 <div><span>${flightItem.origin}</span><span>${flightItem.readable_departure}</span></div>
                 <div><span>${flightItem.destination}</span><span>${flightItem.readable_arrival}</span></div>
            </div>
            <div class='add btn'>Add Flight +</div>
         </div>`);
         $(`#flight${flightItem.id} > .add`).click(flightItem, selectFlightHandler);
        })
    });
}

// display utilization % for selected aircraft (only one aircraft) in left sidebar

    // % will change based on the time the aircraft is on scheduled service per 24 hours


// enforce rules

    // all aircraft must be on the ground at midnight GMT
        // if a flight is in the air during midnight GMT, either display as unavailable (greyed out) or do not display flight option at all (first option for auditing purposes)

        // enforce turnaround time (minimum time between the end of a flight and the beginning of the next one) as 20 minutes or more

        // aircraft must depart from last arrival location (ex. if first flight is JFK > LDN, then next flight must depart from LDN no matter what)


// display aircraft timeline

    // timeline shows a period of 24 hours

    // scheduled service in green, turnaround time in purple, idle time in grey
        // these will change dynamically as flights are added and/or subtracted from the rotation list


// document.ready - execute program!
$(document).ready(function() {
    getTomorrow();
    getAllAircraft();
    getAllFlights();
});
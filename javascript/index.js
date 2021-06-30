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
        aircraftList.results.forEach(function(nameItem) {
            $('#aircraftContainer').append(`<div class='col-12 border-black border-bottom content'>${nameItem.data[i].ident}</div>`);
        })
    });
}

// API call to get available flights for selected aircraft (only one aircraft)
function getAllFlights() {
    $.ajax(`https://infinite-dawn-93085.herokuapp.com/flights`)
    .done(function(flightList) {
        console.log(flightList);
        // display available flights in right sidebar
        aircraftList.results.forEach(function(flightItem) {
            $('#rotationContainer').append(`<div class='col-12 border-black content'><div class='flight-box flex'><h3 class='rotation-title'>Flight: <span>${flightItem.data[i].id}</span></h3></div> 
            <div class="flight-info flex">
                 <div><span>${flightItem.data[i].origin}</span><span>${flightItem.data[i].readable_departure}</span></div>
                 <i class="arrow-right"></i>
                 <div><span>${flightItem.data[i].destination}</span><span>${flightItem.data[i].readable_arrival}</span></div>
            </div>
         </div>`);
        })
    });
}

// on click, flight is selected: background becomes gray, + sign appears for user to add to rotation

// on click of +, flight appears in center rotation list and disappears from right sidebar (flights in center rotation list will have a - icon to remove flight and place it back in the right flights sidebar)


// display selected flights in center rotation list

    // flights must be in order

    // on click of -, flight will disappear from center rotation list and reappear in the right flights sidebar


// display utilization % for selected aircraft (only one aircraft) in left sidebar

    // % will change based on # of flights in the rotation/the time the aircraft is on scheduled service per 24 hours


// enforce rules

    // all aircraft must be on the ground at midnight GMT
        // if a flight is in the air during midnight GMT, either display as unavailable (greyed out) or do not display flight option at all (first option for auditing purposes)

        // enforce turnaround time (minimum time between the end of a flight and the beginning of the next one) as 20 minutes or more

        // aircraft must depart from last arrival location (ex. if first flight is JFK > LDN, then next flight must depart from LDN no matter what)


// display aircraft timeline

    // timeline shows a period of 24 hours

    // scheduled service in green, turnaround time in purple, idle time in grey
        // these will change dynamically as flights are added and/or subtracted from the rotation list


// document.ready - execute!
$(document).ready(function() {
    getTomorrow();
    getAllAircraft();
    getAllFlights();

});
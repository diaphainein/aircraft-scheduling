# aircraft-scheduling

## Installation and Viewing
To view, clone repository into the folder of your choosing. Then, `cd` into the `aircraft-scheduling` folder. From there, run `npm install` - this will allow you to see the beautiful Bootstrap icons I have included in the UI. 

After you've run `npm install`, simply open `index.html` in the browser of your choice.

## Usage and Functionality
This is an app that will allow the user to schedule an aircraft's flight schedule for tomorrow. It will display the entire list of flights that an aircraft, in this case _GABCD_, can schedule for the next day's flight rotation. All available flights will be displayed in the far righthand sidebar, titled 'Flights'.

**To Add a Flight to the Schedule**
1. Find the flight you wish to add in the righthand column
2. Click on the button that says 'Add Flight +'
3. Ta-da! The flight will appear in the center column. You've added a flight to tomorrow's rotation for this aircraft!

Now that you've added some flights, you may need to remove them. Don't worry, removal of flights is easy.

**To Remove a Flight from the Schedule**
1. Find the flight you wish to remove in the center column
2. Click on the button that says 'Remove Flight -'
3. The flight will disappear from the center column

Flights will appear in the center column in order of departure time (earliest to latest), regardless of the order in which they are added to the center column.

## To-Dos and Wishlist
Due to time constraints, I was not able to add every requested functionality to the app, nor was I able to add any functionality that I thought would improve the app. 

**To Do List**
* Addition of dynamic utilization percentage of aircraft, based on the percentage of time the aircraft is actively flying in a 24 hour period. 
    * This addition would be displayed in the left hand column, directly underneath the aircraft name, and would dynamically update every time a flight is added or removed from the center rotation column.
* Addition of color-coded timeline at the bottom of the center column
    * This addition would color code the active time, turnaround time, and idle time of the aircraft over a 24 hour period
    * This addition would update dynamically every time a flight is added or removed from the center rotation column
* Enforcement of remaining rules
    * All aircraft must be on the air at midnight GMT: any flights that would have aircraft in the air when the time is midnight GMT would still display in the right column, however, they would be greyed out or 'unavailable' to be clicked on by the user
    * Enforce a turnaround time of 20 minutes or more: a minimum of 20 minutes **must** pass before the aircraft can depart for another destination
    * To finalize a schedule, aircraft must depart from last arrival location (ex. if first flight is JFK > LDN, then next flight must depart from LDN no matter what). Aircraft cannot operate 'empty' or 'teleport'. 

**Wishlist**: This is a list of features that are "nice-to-haves" or features I would have liked to have implemented if I had more time
* Mobile and tablet styling - app is currently only optimized for desktop
* A button to 'finalize' the schedule
    * This button would catch any broken rules/errors and display them plainly for the user for each item so that they can correct them
* Unit tests
* iframe type styling with a scrollbar for the right column
    * would improve the UI and UX 
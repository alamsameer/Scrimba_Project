const meter = document.getElementById("meter")


// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!
 function loader() {
     meter.value=new Date().getDate()
 }
 loader()
// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.

const house = document.getElementById("house")
const decoration=document.querySelectorAll(".decoration")
const decorator = document.getElementById("decorator")
decorator.addEventListener("click", deckTheHalls)
decorator.checked=false
function deckTheHalls() {
    decoration.forEach((e)=>{
        e.classList.toggle("hide-house-decoration")
    })
  // Task:
  // Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled. 
}

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.

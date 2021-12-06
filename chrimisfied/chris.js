const greeting = document.getElementById("greeting")
const audioSelect=document.querySelector(".audioPlay")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {
   // Task:
  // - Add christmassify class to greeting.
  greeting.classList.toggle("christmassified")
    playmusic()
   removeChrismas()
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
function playmusic(){
    let source=`<source src="jingle-bells-11295.mp3" type="audio/mpeg">`
    audioSelect.innerHTML=source
}
// - Remove the Christmas class after a given time.
function removeChrismas(){
    setTimeout(()=>{
        greeting.classList.remove("christmassified")
    },5000)
}

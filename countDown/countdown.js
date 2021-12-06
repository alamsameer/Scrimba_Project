const countdownDisplay=document. document.getElementById("countdown-display")
function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
   let currentDate=new Date().getDate()
      let remainingDay=christmas-currentDate;
     countdownDisplay.innerHTML=remainingDay
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
   return remainingDay
}

renderCountdown()

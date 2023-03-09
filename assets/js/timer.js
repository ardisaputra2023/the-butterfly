// set local storage
function reset() {
  localStorage.TIMER_TBFT = new Date().getTime() + 60 * 60 * 1000;
  localStorage.DATE_TBFT = new Date().toLocaleString().split(', ')[0];
}

// reset local storage
if (!localStorage.TIMER_TBFT) {
  reset();
}

// Update the countdown every second
const timer = setInterval(() => {  
  // Get the current date and time
  const now = new Date().getTime();
  
  // Calculate the distance between now and the countdown date
  const distance = localStorage.TIMER_TBFT - now;
  
  // Calculate hours, minutes, and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the HTML
  if (distance >= 0 && localStorage.DATE_TBFT == new Date().toLocaleString().split(', ')[0]) {
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
  } else {
    reset();
  }
}, 1000);

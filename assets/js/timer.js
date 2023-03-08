// local storage
const STORAGE_KEY = "TIMER_TBFT";

// Get the countdown date and time
const countdownDate = new Date().getTime() + 60 * 60 * 1000;

// Update the countdown every second
const timer = setInterval(() => {
  // Saving data as key/value pair
  localStorage.setItem(STORAGE_KEY, [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ]);

  // // Get the data by key
  // let name = localStorage.getItem(STORAGE_KEY);
  // console.log("This is - ", name);
  // let color = localStorage.getItem("color");
  // console.log("Value of color is - ", color);

  // // Get key on a given position
  // let key1 = localStorage.key(1);
  // console.log(key1);

  // // Get number of stored items
  // let items = localStorage.length;
  // console.log("Total number of items is ", items);

  // // Remove key with its value
  // localStorage.removeItem("color");

  // // Delete everything
  // localStorage.clear();


  
  // Get the current date and time
  const now = new Date().getTime();
  
  // Calculate the distance between now and the countdown date
  const distance = countdownDate - now;
  
  // Calculate hours, minutes, and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the countdown in the HTML
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
}, 1000);

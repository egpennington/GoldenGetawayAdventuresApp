document.querySelector(".menu-btn").addEventListener("click", () => 
  document.querySelector(".main-menu").classList.toggle("show"))


// Get a reference to the hidden button
const hiddenButton = document.getElementById('hidden-button');

// Function to show the button after a delay
function showButton() {
  hiddenButton.style.display = 'block';
}

// Use setTimeout to call the function after 3 seconds (3000 milliseconds)
setTimeout(showButton, 3000);
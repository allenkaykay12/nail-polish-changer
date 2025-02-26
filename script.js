// initialize an array with five colors
const nailColors = ["red", "blue", "green", "black", "orange"];

// This function will help us rotate the colors of the nails
function rotateColors() {
  const lastColor = nailColors.pop(); //retrieve the last color
  nailColors.unshift(lastColor); //unshift method adds the lastcolor to the beginning of the array
}

// Function to apply colors to nails
function applyNailPolish() {
  const nails = document.querySelectorAll(".nails"); //retrive all the nails

  //loop through all the nails
  // for each nail set its color as the color of the previous finger nail
  nails.forEach((nail, index) => {
    nail.style.fill = nailColors[index % nailColors.length];
  });
}

// Function to handle nail click
function changeNailPolish() {
  rotateColors(); // Move all the colors up by one position
  applyNailPolish(); // Apply updated colors to nails
}

// add the event listeners to listen DOM content being loaded and nail click
document.addEventListener("DOMContentLoaded", () => {
  //we retrieve all the nails
  // on clicking any of the nails, we change the colors
  document.querySelectorAll(".nails").forEach((nail) => {
    nail.addEventListener("click", changeNailPolish);
  });
});

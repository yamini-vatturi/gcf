let signal = "red";

switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid signal");
}

// Intentional fall-through — shared behaviour for multiple cases
let month = 4; // April
switch (month) {
  case 1: case 3: case 5: case 7:
  case 8: case 10: case 12:
    console.log("31 days");
    break;
  case 4: case 6: case 9: case 11:
    console.log("30 days");
    break;
  case 2:
    console.log("28 or 29 days");
    break;
}

function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }

  
function openSnackbar() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

   // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  //get text to show
  document.getElementById("snackbar").innerHTML = getText();
}

function getText(){
  var textArray = [
    "Why...",
    "I appreciate the thought",
    "Don't be silly",
    "Questionable choice"
  ]
  var phrase = textArray[Math.floor(Math.random()*textArray.length)];
  return phrase
}
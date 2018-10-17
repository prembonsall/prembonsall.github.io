function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }

  
function openSnackbar() {
  // Get the css for the pop-up
  var x = document.getElementById("snackbar");
  x.className = "show";
  // Hide after duration
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2500);

  //Get text to show
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
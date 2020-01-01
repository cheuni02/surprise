// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  console.log("x : " + x.length);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  console.log("myIndex before : " + myIndex); 
  if (myIndex > x.length) {myIndex = 1}   
  console.log("myIndex after : " + myIndex); 
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}
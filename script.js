/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  let x = document.getElementById("mytab");
  if (x.className === "tab") {
    x.className += " responsive";
  } else {
    x.className = "tab";
  }
}

/* Footer script */
n =  new Date();
y = n.getFullYear();
document.getElementById("year").innerHTML = y;
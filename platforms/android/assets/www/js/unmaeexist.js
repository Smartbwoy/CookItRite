

function userexist(){
alert("yes");
  var str = document.getElementById("nameexist").value;
	
  var xhttp;
 
  if (str.length == 0) { 
    document.getElementById("namehint").innerHTML = "no name";
    return;
  }
  xhttp = new XMLHttpRequest();
 
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 || xhttp.status == 200) {
      document.getElementById("namehint").innerHTML = xhttp.responseText;
    }
  }
  xhttp.open("GET", "php/nameexist.php?UserName="+str, true);
  xhttp.send();
}
/**

function missingValue(){
	var xhttp;
	if (str.length == 0) { 
    document.getElementById("namehint").innerHTML = "no name";
    return;
  }
  xhttp = new XMLHttpRequest();
 
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 || xhttp.status == 200) {
      document.getElementById("namehint").innerHTML = xhttp.responseText;
    }
  }
  xhttp.open("GET", "php/nameexist.php?UserName="+str, true);
  xhttp.send();	
}**/
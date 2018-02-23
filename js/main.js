console.log("hello World");


var icon = document.querySelector('.icon');
var highlight =document.querySelector('.highlight');


icon.onclick = function (){
  console.log();
	style.fill = "FDD08C";
}




icon.forEach(icon => icon.addEventListener('click', logThisIcon));

icon.addEventListener('click', highlight);
}

}) ();

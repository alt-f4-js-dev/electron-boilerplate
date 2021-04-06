document.addEventListener('DOMContentLoaded', function(event) {
	document.querySelector("cn2-master-head").setAttribute("agency","logo.png");
});

function showhelp(){
	let modal = document.querySelector(".modal");
	modal.style.display = "block";
}

function hideHelp(){
	let modal = document.querySelector(".modal");
	modal.style.display = "none"; 
}
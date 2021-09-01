function updateSlider(value){
	document.getElementById("flagViewSliderValue").innerHTML = value;
	let continentList = document.getElementsByClassName("continentList");
	continentList[0].style.gridTemplateColumns = "repeat(auto-fill, minmax(calc(100% / "+value+"), 1fr))";
}
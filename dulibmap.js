

var init = function() {
	// Add map container
	document.getElementById("dulibmap").innerHTML = "<div id='map-container'></div>";
	var container = document.getElementById("map-container");

	// Add upper level
	var top_floor = document.createElement("DIV");
	top_floor.setAttribute("id", "top-floor");
	top_floor.setAttribute("class", "base-map");
	container.appendChild(top_floor);

	addBaseImages();
}

var addBaseImages = function() {
	var top_floor = document.getElementById("top-floor"),
		top_base = document.createElement("IMG");

	top_base.setAttribute("id", "top_base");
	top_base.setAttribute("class", "map-base");
	top_base.setAttribute("src", "./assets/img/map/top_base.png");
	top_floor.appendChild(top_base);

	var testImg = document.createElement("IMG");
	testImg.setAttribute("id", "test-img");
	testImg.setAttribute("class", "map-slide");
	testImg.setAttribute("src", "./assets/img/map/top_frr.gif");
	top_floor.appendChild(testImg);
}

var onSelectRoom = function() {

}

$(document).ready(function() {
	init();
});
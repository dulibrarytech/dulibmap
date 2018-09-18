

var init = function() {
	// Add map container
	var main = document.getElementById("dulibmap").innerHTML = "<div id='map-container'></div>";
	var container = document.getElementById("map-container");
	var selected_list = [];

	addLegend(container);
	addFloorSelectMenu(container);

	// addFloors()?
	// Add upper level
	var top_floor = document.createElement("DIV");
	top_floor.setAttribute("id", "top-floor");
	top_floor.setAttribute("class", "base-map");
	top_floor.style.display = "block";
	container.appendChild(top_floor);

	// Add main level
	var main_floor = document.createElement("DIV");
	main_floor.setAttribute("id", "main-floor");
	main_floor.setAttribute("class", "base-map");
	main_floor.style.display = "none";
	container.appendChild(main_floor);

	// Add lower level
	var bottom_floor = document.createElement("DIV");
	bottom_floor.setAttribute("id", "bottom-floor");
	bottom_floor.setAttribute("class", "base-map");
	bottom_floor.style.display = "none";
	container.appendChild(bottom_floor);

	addBaseImages();
	addSlideSelectMenu();

}

var addLegend = function(mapContainer) {
	var legend = document.createElement("DIV"),
		legendHeader = document.createElement("H3"),
		legendImage = document.createElement("IMG");

	legend.setAttribute("id", "legend");
	legendHeader.innerHTML = "Legend";
	legendImage.setAttribute("src", "./assets/img/map/icons/" + config.legend_image)
	legend.appendChild(legendHeader);
	legend.appendChild(legendImage);
	mapContainer.appendChild(legend);
}

var addFloorSelectMenu = function(mapContainer) {
	var menu = document.createElement("DIV"),
		list = document.createElement("UL"),
		floor = document.createElement("LI");

	floor.setAttribute("id", "top-floor-select");
	floor.setAttribute("class", "floor-option");
	floor.classList.add("active");
	floor.setAttribute("onclick", "onSelectFloor(this)");
	floor.innerHTML = "Top Floor";
	list.appendChild(floor);
	floor = document.createElement("LI");
	floor.setAttribute("id", "main-floor-select");
	floor.setAttribute("class", "floor-option");
	floor.setAttribute("onclick", "onSelectFloor(this)");
	floor.innerHTML = "Main Floor";
	list.appendChild(floor);
	floor = document.createElement("LI");
	floor.setAttribute("id", "bottom-floor-select");
	floor.setAttribute("class", "floor-option");
	floor.setAttribute("onclick", "onSelectFloor(this)");
	floor.innerHTML = "Bottom Floor";
	list.appendChild(floor);

	menu.setAttribute("class", "floor-select");
	menu.appendChild(list);
	mapContainer.appendChild(menu);
}

var addBaseImages = function() {
	var top_floor = document.getElementById("top-floor"),
		top_base = document.createElement("IMG");

	top_base.setAttribute("id", "top_base");
	top_base.setAttribute("class", "map-base");
	top_base.setAttribute("src", config.base_url + "/assets/img/map/base/" + config.map_base.top);
	top_floor.appendChild(top_base);
}

// Add each floor here, hide all but main on default
var addSlideSelectMenu = function() {

	// Top floor
	var menu = document.createElement("DIV");
	menu.setAttribute("class", "select-menu");
	document.getElementById("top-floor").appendChild(menu);
	var select_form = document.createElement("FORM");
	select_form.setAttribute("id", "top-floor-select");
	select_form.setAttribute("class", "floor-select");

	var slide, img;
	select_form.innerHTML += ("<h3>Room Select</h3>");

	for(var key in config.slides["top_floor"]) {

		slide = document.createElement("INPUT");
		slide.setAttribute("type", "checkbox");
		name = key.replace(" ", "").toLowerCase();
		slide.setAttribute("name", name);
		slide.setAttribute("value", key);
		slide.setAttribute("onclick", "onSelectGroup(this, 'top-floor')");
		select_form.appendChild(slide);
		select_form.innerHTML += (key + "<br />");
	}
	menu.appendChild(select_form);
	
	// Main floor

	// Bottom floor
}

var onSelectFloor = function(floor) {
	var floors = document.getElementsByClassName("floor-option");
	for(var i=0; i<floors.length; i++) {
		floors[i].classList.remove("active");
	}
	floor.classList.add("active");
}

var onSelectGroup = function(selection, floor) {
	console.log("TEST grp");
	var slides = [], map, rooms, overlay, path,
	    group = selection.getAttribute("value"),
	    groupName = selection.getAttribute("name"),
	    map = document.getElementById(floor);
		rooms = config.slides[floor.replace("-", "_")][group];

	if(selection.checked) {
		for(var key in rooms) {
			id = key + "-overlay";
			path = config.base_url + "/assets/img/map/slide/" + key + ".gif";
			overlay = document.createElement("IMG");
			overlay.setAttribute("id", id);
			overlay.setAttribute("class", "map-slide");
			overlay.setAttribute("src", path);
			map.appendChild(overlay);
		}
	}
	else {
		for(var key in rooms) {
			id = key + "-overlay";
			overlay = document.getElementById(id);
			map.removeChild(overlay);
		}	
	}
}

$(document).ready(function() {
	init();
});
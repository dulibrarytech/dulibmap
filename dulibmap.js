

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
		floor,
		id;

	for(var key in config.maps) {
		id = key.replace("_", "-") + "-select";
		floor = document.createElement("LI");
		floor.setAttribute("id", id);
		floor.setAttribute("class", "floor-option");
		floor.setAttribute("onclick", "onSelectFloor(this)");
		floor.innerHTML = config.map_labels[key];
		if(config.default_map == key) {
			floor.classList.add("active");
		}
		list.appendChild(floor);
	}

	menu.setAttribute("class", "floor-select");
	menu.appendChild(list);
	mapContainer.appendChild(menu);
}

var addBaseImages = function() {
	var top_floor = document.getElementById("top-floor"),
		top_base = document.createElement("IMG"),
		main_floor = document.getElementById("main-floor"),
		main_base = document.createElement("IMG"),
		bottom_floor = document.getElementById("bottom-floor"),
		bottom_base = document.createElement("IMG");

	top_base.setAttribute("id", "top-base");
	top_base.setAttribute("class", "map-base");
	top_base.setAttribute("src", config.base_url + "/assets/img/map/base/" + config.map_base.top_floor);
	top_floor.appendChild(top_base);

	main_base.setAttribute("id", "main-base");
	main_base.setAttribute("class", "map-base");
	main_base.setAttribute("src", config.base_url + "/assets/img/map/base/" + config.map_base.main_floor);
	main_floor.appendChild(main_base);

	bottom_base.setAttribute("id", "bottom-base");
	bottom_base.setAttribute("class", "map-base");
	bottom_base.setAttribute("src", config.base_url + "/assets/img/map/base/" + config.map_base.bottom_floor);
	bottom_floor.appendChild(bottom_base);
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

	for(var key in config.maps["top_floor"]) {
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
	// Update the menuitem as selected
	var floors = document.getElementsByClassName("floor-option");
	for(var i=0; i<floors.length; i++) {
		floors[i].classList.remove("active");
	}
	floor.classList.add("active");

	// Hide all maps
	var maps = document.getElementsByClassName("base-map");
	for(i=0; i<maps.length; i++) {
		maps[i].style.display = "none";
	}

	// Set the selected map as visible
	var floorID = floor.getAttribute("id").replace("-select", ""),
		map = document.getElementById(floorID);
		map.style.display = "block";
}

var onSelectGroup = function(selection, floor) {
	var slides = [], map, rooms, overlay, path,
	    group = selection.getAttribute("value"),
	    groupName = selection.getAttribute("name"),
	    map = document.getElementById(floor);
		rooms = config.maps[floor.replace("-", "_")][group];

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
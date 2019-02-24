

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
	addClickMap(container, "top-floor");
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

var addClickMap = function(mapContainer, floor) {
	var map = document.createElement("MAP");
	map.setAttribute("id", floor + "-clickmap");
	map.setAttribute("name", floor + "-clickmap");
	map.setAttribute("class", "clickmap");
	mapContainer.appendChild(map);
}

var removeClickMaps = function(mapContainer) {
	var maps = document.getElementsByClassName("clickmap");
	for(var i = 0; i < maps.length; i++) {
		mapContainer.removeChild(maps[i]);
	}
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
	top_base.setAttribute("src", "./assets/img/map/base/" + config.map_base.top_floor);
	top_floor.appendChild(top_base);

	main_base.setAttribute("id", "main-base");
	main_base.setAttribute("class", "map-base");
	main_base.setAttribute("src", "./assets/img/map/base/" + config.map_base.main_floor);
	main_floor.appendChild(main_base);

	bottom_base.setAttribute("id", "bottom-base");
	bottom_base.setAttribute("class", "map-base");
	bottom_base.setAttribute("src", "./assets/img/map/base/" + config.map_base.bottom_floor);
	bottom_floor.appendChild(bottom_base);
}

// Add each floor here, hide all but main on default
var addSlideSelectMenu = function(floor) {

	var menu, select_form, slide, img, label, checkbox;
	for(var map in config.maps) {
		menu = document.createElement("DIV"),
		mapID = map.replace("_", "-");
		menu.setAttribute("class", "select-menu");
		document.getElementById(mapID).appendChild(menu);
		select_form = document.createElement("FORM");
		select_form.setAttribute("id", mapID + "-select");
		select_form.setAttribute("class", "floor-select");

		//var slide, img;
		select_form.innerHTML += ("<h3>Room Select</h3>");

		for(var key in config.maps[map]) {
			label = document.createElement("LABEL");
			label.setAttribute("class", "container");
			label.innerHTML = key;
			slide = document.createElement("INPUT");
			slide.setAttribute("type", "checkbox");
			checkbox = document.createElement("SPAN");
			checkbox.setAttribute("class", "checkmark");
			name = key.replace(" ", "").toLowerCase();
			slide.setAttribute("name", name);
			slide.setAttribute("value", key);
			slide.setAttribute("onclick", "onSelectGroup(this, '" + mapID + "')");
			label.appendChild(slide);
			label.appendChild(checkbox);
			select_form.appendChild(label);
			//select_form.innerHTML += (key + "<br />");
		}
		menu.appendChild(select_form);
	}
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

	var container = document.getElementById("map-container");
	removeClickMaps(container);
	addClickMap(container, floorID);
}

var onSelectGroup = function(selection, floor) {
	var slides = [], map, rooms, overlay, path,
	    group = selection.getAttribute("value"),
	    groupName = selection.getAttribute("name"),
	    map = document.getElementById(floor),
		rooms = config.maps[floor.replace("-", "_")][group];

	if(selection.checked) {
		for(var key in rooms) {
			id = key + "-overlay";
			path = "./assets/img/map/slide/" + key + ".gif";
			overlay = document.createElement("IMG");
			overlay.setAttribute("id", id);
			overlay.setAttribute("class", "map-slide");
			overlay.setAttribute("src", path);
			overlay.setAttribute("usemap", floor + "-clickmap");
			map.appendChild(overlay);
			addAreaToClickMap(key, floor);
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

var addAreaToClickMap = function(roomID, floor) {

	let area,
		clickMap = document.getElementById(floor + "-clickmap"),
		areas = config.room_clickmaps[floor][roomID];

	for(let area in areas) {
		if(areas[area]) {
			area = document.createElement("AREA");
			area.setAttribute("id", roomID + "-area");
			area.setAttribute("shape", "poly");
			area.setAttribute("onclick", "onSelectRoom(this.id)");
			area.setAttribute("coords", config.room_clickmaps[floor][roomID]);
			// area.setAttribute("title", "title");
			clickMap.appendChild(area);
		}
	}

	addHoverDisplays();
}

var onSelectRoom = function(areaID) {
	var roomID = areaID.replace("-area", ""),
		overlayID = roomID + "-overlay",
		overlay = document.getElementById(overlayID),
		action;

	if(typeof config.room_action[roomID] == 'undefined') {
		console.log("No action has been set for this room");
	}
	// Make sure the room slide is visible.  If not, do not execue the action
	else if(overlay) {
		action = config.room_action[roomID].type;
		if(action == "internal") {
			// Load stored html (for this room) in a modal dialog?
		}
		else if(action == "external") {
			// Open the external link for this room in a new browser window
			window.open(config.room_action[roomID].value);
		}
	}
}

var addHoverDisplays = function() {
	var container = document.getElementById("map-container");
	var areaElement;

	for(var key in config.hover_displays) {
		areaElement = document.getElementById(key + "-area");
		if(areaElement) {
			areaElement.setAttribute("title", config.hover_displays[key].text);
		}
	}
}

$(document).ready(function() {
	init();
});


var init = function() {
	var main = document.getElementById("map").innerHTML = "<div id='map-container'></div>";
	var container = document.getElementById("map-container");
	var selected_list = [], floor;

	addLegend(container);
	addFloorSelectMenu(container);
	addFloors(container);
	addBaseImages();
	addGroupSelectMenus(config.default_map);
}

var addLegend = function(mapContainer) {
	var legend = document.createElement("DIV"),
		legendImage = document.createElement("IMG"),
		legendHeader;

	// If the legend has been set in the configuration
	if(1) {
		legendHeader = document.createElement("H3");
		legendHeader.innerHTML = "Legend";
		legend.appendChild(legendHeader);
	}

	legend.setAttribute("id", "legend");
	legendImage.setAttribute("src", "./assets/img/map/icons/" + config.legend_image)
	legend.appendChild(legendImage);

	document.getElementById("map-legend").appendChild(legend);
}

var addFloorSelectMenu = function(mapContainer) {
	var menu = document.createElement("DIV"),
		list = document.createElement("UL"),
		floor,
		id;

	for(var key in config.maps) {
		id = key + "-select";
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
	document.getElementById("map-select-menu").appendChild(menu);
}

var addFloors = function(container) {
	for(var key in config.maps) {
		floor = document.createElement("DIV");
		floor.setAttribute("id", key);
		floor.setAttribute("class", "base-map");
		if(key == config.default_map) {
			floor.style.display = "block";
			addClickMap(container, key);
			addStaticAreas(key);
		}
		else {
			floor.style.display = "none";
		}
		container.appendChild(floor);
	}
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
	var floor, base;
	for(key in config.map_base) {
		floor = document.getElementById(key);
		base = document.createElement("IMG");

		base.setAttribute("id", key + "-base");
		base.setAttribute("class", "map-base");
		base.setAttribute("src", "./assets/img/map/base/" + config.map_base[key]);
		base.setAttribute("usemap", key + "-clickmap");
		floor.appendChild(base);
	}
}

// Add each floor here, hide all but main on default
var addGroupSelectMenus = function(floor="") {
	var menu, select_form, slide, img, label, checkbox;
	for(var map in config.maps) {
		menu = document.createElement("DIV"),
		menu.setAttribute("class", "select-menu");
		menu.setAttribute("id", map + "-group-select");
		if(map != floor) {
			menu.style.display = "none";
		}
		document.getElementById(map).appendChild(menu);
		select_form = document.createElement("FORM");
		select_form.setAttribute("class", "floor-group-select");
		select_form.innerHTML += ("<h3>Show Rooms</h3>");

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
			slide.setAttribute("onclick", "onSelectGroup(this, '" + map + "')");
			label.appendChild(slide);
			label.appendChild(checkbox);
			select_form.appendChild(label);
		}
		menu.appendChild(select_form);
		document.getElementById("item-select-menu").appendChild(menu);
	}
}

var onSelectFloor = function(floor) {
	// Update the menuitem as selected
	var floors = document.getElementsByClassName("floor-option");
	for(var i=0; i<floors.length; i++) {
		floors[i].classList.remove("active");
	}
	floor.classList.add("active"),
	floorID = floor.id.replace("-select", "");

	// Hide all maps
	var maps = document.getElementsByClassName("base-map");
	for(i=0; i<maps.length; i++) {
		maps[i].style.display = "none";
	}

	// Hide all group selects, show the menu for this floor
	var groups = document.getElementsByClassName("select-menu");
	for(i=0; i<groups.length; i++) {
		groups[i].style.display = "none";
	}
	document.getElementById(floorID + "-group-select").style.display = "block";
		console.log(document.getElementById(floorID + "-group-select"));

	// Set the selected map as visible
	var floorID = floor.getAttribute("id").replace("-select", ""),
		map = document.getElementById(floorID);
		map.style.display = "block";

	var container = document.getElementById("map-container");
	removeClickMaps(container);
	addClickMap(container, floorID);
	addStaticAreas(floorID);
	updateFloorSelectedGroups(floorID);
}

var onSelectGroup = function(selection, floor) {
	var slides = [], map, rooms, overlay, path, area,
	    group = selection.getAttribute("value"),
	    groupName = selection.getAttribute("name"),
	    map = document.getElementById(floor),
		rooms = config.maps[floor][group];

	if(selection.checked) {
		for(var key in rooms) {
			id = key + "-overlay";
			path = "./assets/img/map/slide/" + key + "." + config.mapSlideFileType;
			overlay = document.createElement("IMG");
			overlay.setAttribute("id", id);
			overlay.setAttribute("class", "map-slide");
			overlay.setAttribute("src", path);
			overlay.setAttribute("usemap", floor + "-clickmap");

			// Add map pin class if specified in the filename.  These will have elevated z-index applied
			if(key.search("_pin") > -1) {
				overlay.classList.add("map-pin");
			}

				console.log("TEST adding overlay", overlay);
			map.appendChild(overlay);
			addAreaToClickMap(key, floor);
		}
	}
	else {
		var clickmap = document.getElementById(floor + "-clickmap");
		for(var key in rooms) {
			overlay = document.getElementById(key + "-overlay");
			area = document.getElementById(key + "-area");
			if(area) {
					console.log("TEST removing overlay", overlay);
				map.removeChild(overlay);
				clickmap.removeChild(area);
			}
		}	
	}
}

var updateFloorSelectedGroups = function(floor) {

	// Get the group for the current floor
	var floorGroup = document.getElementById(floor + "-group-select");

	// Iterate room groups in the list for this floor
	for(let i = 0; i < floorGroup.children.length; i++) {

	  // Get the children of each room group	
	  if(floorGroup.children[i].tagName == "LABEL") {

	  	// Iterate the children of each room group item
	  	let lineItems = floorGroup.children[i].children;
	  	for(let j = 0; j < lineItems.length; j++) {

	  		// Check for selected attribute on the input element, select the slides in that group
	  		if(lineItems[j].tagName == "INPUT") {
	  			if(lineItems[j].checked) {
	  				onSelectGroup(lineItems[j], floor);
	  			}
	  		}
	  	}
	  }
	}
}

var addAreaToClickMap = function(roomID, floor) {
		console.log("TEST adding area to clickmap", roomID, floor);
	let area,
		clickMap = document.getElementById(floor + "-clickmap"),
		areas = config.room_clickmaps[floor][roomID];
			console.log("TEST clickmap", clickMap);
			console.log("TEST areas");
	for(let area in areas) {
		if(areas[area]) {
			area = document.createElement("AREA");
			area.setAttribute("id", roomID + "-area");
			area.setAttribute("shape", "poly");
			area.setAttribute("onclick", "onSelectRoom(this.id)");
			area.setAttribute("coords", config.room_clickmaps[floor][roomID]);
			if(typeof config.room_action[roomID] != 'undefined') {
				area.setAttribute("class", "click-area");
			}
				console.log("Adding area", area);
			clickMap.appendChild(area);
		}
	}

	addHoverDisplays();
}

var addStaticAreas = function(floor) {
	let area,
		clickMap = document.getElementById(floor + "-clickmap"),
		areas = config.room_clickmaps[floor + "_static"];

	for(let key in areas) {
		if(areas[key]) {
			area = document.createElement("AREA");
			area.setAttribute("id", key + "-area");
			area.setAttribute("shape", "poly");
			area.setAttribute("onclick", "onSelectRoom(this.id, true)");
			area.setAttribute("coords", config.room_clickmaps[floor + "_static"][key]);
			if(typeof config.room_action[key] != 'undefined') {
				area.setAttribute("class", "click-area");
			}
			clickMap.appendChild(area);
		}
	}

	addHoverDisplays();
}

var onSelectRoom = function(areaID, static=false) {
	var roomID = areaID.replace("-area", ""),
		overlayID = roomID + "-overlay",
		overlay = document.getElementById(overlayID),
		action;

	if(typeof config.room_action[roomID] == 'undefined') {
		console.log("No action has been set for this room");
	}
	// Make sure the room slide is visible.  If not, do not execue the action
	else if(overlay || static) {
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
				console.log("TEST added title to element", areaElement);
		}
	}
}

$(document).ready(function() {
	init();
});
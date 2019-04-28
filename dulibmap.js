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

var addSvgContainer = function(mapContainer, floor) {
	var overlays = document.getElementById(floor.id).appendChild(document.createElement("DIV"));
	overlays.setAttribute("id", floor.id + "-overlays");
	overlays.setAttribute("class", "map-overlays");

	var width = config.map_width;
    var height = config.map_height;
    var id = "#" + mapContainer.id;
    var svg = d3.select("#" + floor.id + "-overlays")
       .append("svg")
       .attr("width", width)
       .attr("height", height)
       .attr("id", floor.id + "-overlay-svg")
       .attr("class", "overlay-svg");
}

var addLegend = function(mapContainer) {
	if(config.legend_image != "") {
		var legend = document.createElement("DIV"),
		legendImage = document.createElement("IMG"),
		header;

		if(config.legend_header != "") {
			header = document.createElement("H3");
			header.innerHTML = config.legend_header;
			document.getElementById("map-legend").appendChild(header);
		}

		legend.setAttribute("id", "legend");
		legend.setAttribute("class", "sidebar-menu");
		legendImage.setAttribute("src", "./assets/img/map/icons/" + config.legend_image)
		legend.appendChild(legendImage);

		document.getElementById("map-legend").appendChild(legend);
	}
}

var addFloorSelectMenu = function(mapContainer) {
	var menu = document.createElement("DIV"),
		list = document.createElement("SELECT"),
		header, floor, id;

	if(config.map_select_header != "") {
		header = document.createElement("H3");
		header.innerHTML = config.map_select_header;
		document.getElementById("map-select-menu").appendChild(header);
	}

	list.setAttribute("onchange", "onSelectFloor(this)");
	list.setAttribute("class", "form-control");
	for(var key in config.maps) {
		id = key + "-select";
		floor = document.createElement("OPTION");
		floor.setAttribute("id", id);
		floor.setAttribute("class", "floor-option");
		//floor.setAttribute("onclick", "onSelectFloor(this)");
		floor.innerHTML = config.map_labels[key];
		if(config.default_map == key) {
			//floor.classList.add("active");
			floor.selected = true;
		}
		list.appendChild(floor);
	}

	menu.setAttribute("id", "floor-menu");
	menu.setAttribute("class", "floor-select");
	menu.classList.add("form-group");
	menu.classList.add("sidebar-menu");
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
		}
		else {
			floor.style.display = "none";
		}
		container.appendChild(floor);
		addSvgContainer(container, floor);
		addRoomOverlays(container, floor);
		//addIconOverlays(container, floor);
	}
}

var addRoomOverlays = function(container, floor) {

    d3.json("./config/data.json", function(data) {
    	try {

    		// Add rooms and areas
    		var overlay = d3.select("#" + floor.id + "-overlay-svg").selectAll("g");
    		var tmp = overlay.data(data.overlays[floor.id])
	        .enter();

	        var tmp2 = tmp.append("g");
	        tmp2.attr("id", function(d) {
	          return d.name;
	        })
	        .classed("overlay", true)
	        .classed("clickable", function(d) {
	        	return d.link ? true : false;
	        })
	        .attr("display", function(d) {
	        	return d.visibility == "hidden" ? "none" : "block";
	        })
	        .attr("onclick", function(d) {
	        	return d.link ? "javascipt:window.open('" + d.link + "')" : "";
	        });

	        var tmp3 = tmp2.append("path")
	        .attr("fill", function(d) {
	          return d.color;
	        })
	        .attr("d", function(d) {
	          return d.svgPath;
	        })
	        .append("title")
	        .html(function(d) {
	        	return d.hover;
	        });

	        // Add room and area labels
	        tmp2.append("text")
	        .attr("x", function(d) {
	        	return d.labelX || 0;
	        })
	        .attr("y", function(d) {
	        	return d.labelY || 0;
	        })
	        .attr("font-family", config.room_labels.fontFamily)
	        .attr("font-size", function(d) {
	        	return d.labelFontSize || config.room_labels.fontSize;
	        })
	        .attr("font-color", config.room_labels.fontColor)
	        .html(function(d) {
	        	var html = "", tspan = "";
	        	for(var i=0; i<d.label.length; i++) {
	        		var X = d.labelX || 0;
	        		tspan = '<tspan x="' + X + '" dy="' + config.room_labels.line_spacing + '">' + d.label[i] + '</tspan>';
	        		html += tspan; 
	        	}
	        	return html;
	        })
	        .append("title")
	        .html(function(d) {
	        	return d.hover;
	        });

	        // Icons with multiple paths
	        overlay.data(data.icon_overlays["top-floor"])
	        .enter()
	        .append("g")
		    .attr("id", function(d) {
	       		return d.name;
	        })
	        .each(function(d, i) {
	       		d3.select(this).selectAll('path')
	       		.data(d.paths)
	       		.enter().append('path')
	       		.attr("d", function(d, j) {
	       			return d.svgPath;
	       		})
	        });
    	}
    	catch(e) {
    		console.log("Error retrieving floor data: ", floor.id, "Error:", e);
    	}
    });
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
	var menu, select_form, slide, img, label, checkbox, header;
	if(config.group_select_header != "") {
		header = document.createElement("H3");
		header.innerHTML = config.group_select_header;
		document.getElementById("item-select-menu").appendChild(header);
	}
	for(var map in config.maps) {
		menu = document.createElement("DIV"),
		menu.setAttribute("class", "select-menu");
		menu.classList.add("sidebar-menu");
		menu.setAttribute("id", map + "-group-select");
		if(map != floor) {
			menu.style.display = "none";
		}
		document.getElementById(map).appendChild(menu);
		select_form = document.createElement("FORM");
		select_form.setAttribute("class", "floor-group-select");

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

var onSelectFloor = function(floorList) {
	floor = floorList[floorList.selectedIndex];
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

	// Set the selected map as visible
	var floorID = floor.getAttribute("id").replace("-select", ""),
		map = document.getElementById(floorID);
		map.style.display = "block";

	var container = document.getElementById("map-container");
	updateFloorSelectedGroups(floorID);
}

var onSelectGroup = function(selection, floor) {
	var slides = [], map, rooms, overlay, path, area,
	    group = selection.getAttribute("value"),
	    groupName = selection.getAttribute("name"),
	    map = document.getElementById(floor),
		rooms = config.maps[floor][group];

	for(var key in rooms) {
		if(document.getElementById(key) && selection.checked) {
			document.getElementById(key).style.display = "block";
		}
		else if(document.getElementById(key) && selection.checked == false) {
			document.getElementById(key).style.display = "none";
		}
	}
}

var updateFloorSelectedGroups = function(floor) {

	// TODO remove all existing map slides?

	// Get the group for the current floor
	var floorGroup = document.getElementById(floor + "-group-select").children[0];	// The form

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

// var onSelectRoom = function(floorID, roomID, static=false) {
// 	if(typeof config.room_action[roomID] == 'undefined') {
// 		console.log("No action has been set for this room");
// 	}
// 	// Make sure the room slide is visible.  If not, do not execue the action
// 	else if(static) {
// 		action = config.room_action[roomID].type;
// 		if(action == "internal") {
// 			// Load stored html (for this room) in a modal dialog?
// 		}
// 		else if(action == "external") {
// 			// Open the external link for this room in a new browser window
// 			window.open(config.room_action[roomID].value);
// 		}
// 	}
// }

// var onSelectRoom = function(floorID, roomID, static=false) {
// 	if(typeof config.room_action[roomID] == 'undefined') {
// 		console.log("No action has been set for this room");
// 	}
// 	// Make sure the room slide is visible.  If not, do not execue the action
// 	else if(static) {
// 		action = config.room_action[roomID].type;
// 		if(action == "internal") {
// 			// Load stored html (for this room) in a modal dialog?
// 		}
// 		else if(action == "external") {
// 			// Open the external link for this room in a new browser window
// 			window.open(config.room_action[roomID].value);
// 		}
// 	}
// }

var addHoverDisplays = function() {
	for(var key in config.hover_displays) {
		room = document.getElementById(key);
		if(room) {
			room.setAttribute("title", config.hover_displays[key].text);
		}
	}
}

$(document).ready(function() {
	init();
});
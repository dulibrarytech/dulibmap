

var init = function() {
	// Add map container
	var main = document.getElementById("dulibmap").innerHTML = "<div id='map-container'></div>";
	var container = document.getElementById("map-container");

	var selected_list = [];

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

	var slide, img;
	for(var floor in config.slides) {
		for(var key in config.slides[floor]) {

			// Insert label and hr
			select_form.innerHTML += ("<h3>" + key + "</h3>");

			// Loop rooms in the section, add under the current section label
			for(var room in config.slides[floor][key]) {
				img = config.slides[floor][key][room];
				slide = document.createElement("INPUT");
				slide.setAttribute("type", "checkbox");
				slide.setAttribute("name", room);
				slide.setAttribute("value", room);
				slide.setAttribute("onclick", "onSelectSlide(this)");
				select_form.appendChild(slide);
				select_form.innerHTML += (img + "<br />");
			}
			select_form.innerHTML += "<br><br>";
		}
	}
	menu.appendChild(select_form);

	// Main floor

	// Bottom floor
}

// Used by page menu
var showFloor = function(floor) {
	// TODO get 'floor' element, set display to block, set display of other floors to hidden
}

var onSelectSlide = function(slide) {
	var map = document.getElementById("top-floor"), 
		overlay,
		list = document.getElementById("list"),
		listitem,
		val = slide.getAttribute("value"),
		id = val + "-overlay",
		lid = val + "-list",
		path = config.base_url + "/assets/img/map/slide/" + val + ".gif";

	if(slide.checked) {
		overlay = document.createElement("IMG");
		overlay.setAttribute("id", id);
		overlay.setAttribute("class", "map-slide");
		overlay.setAttribute("src", path);
		map.appendChild(overlay);

		// listitem = document.createElement("LI");
		// listitem.setAttribute("id", lid);
		// listitem.innerHTML = config.slides[val];

		// var swath;
		// if(config.slide_colors[val]) {
		// 	swath = document.createElement("SPAN");
		// 	swath.style.marginLeft = "15px";
		// 	swath.style.backgroundColor = config.slide_colors[val];
		// 	swath.innerHTML = "&nbsp&nbsp&nbsp";
		// 	listitem.appendChild(swath);
		// }

		//list.appendChild(listitem);
	}
	else {
		overlay = document.getElementById(id);
		// listitem = document.getElementById(lid);
		// list.removeChild(listitem);
		map.removeChild(overlay);
	}
}

$(document).ready(function() {
	init();
});
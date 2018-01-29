

var init = function() {
	// Add map container
	var main = document.getElementById("dulibmap").innerHTML = "<div id='map-container'></div><div id='select-menu'></div><div id='selected-list'><ul id='list'></ul></div>";
	var container = document.getElementById("map-container");

	var selected_list = [];

	// Add upper level
	var top_floor = document.createElement("DIV");
	top_floor.setAttribute("id", "top-floor");
	top_floor.setAttribute("class", "base-map");
	container.appendChild(top_floor);

	addBaseImages();
	addSlideSelectMenu();
}

var addBaseImages = function() {
	var top_floor = document.getElementById("top-floor"),
		top_base = document.createElement("IMG");

	top_base.setAttribute("id", "top_base");
	top_base.setAttribute("class", "map-base");
	top_base.setAttribute("src", "./assets/img/map/base/top_base.png");
	top_floor.appendChild(top_base);
}

var addSlideSelectMenu = function() {
	var menu = document.getElementById("select-menu");
		select_form = document.createElement("FORM");

	var slide;
	for(var key in config.slides) {
		slide = document.createElement("INPUT");
		slide.setAttribute("type", "checkbox");
		slide.setAttribute("name", key);
		slide.setAttribute("value", key);
		slide.setAttribute("onclick", "onSelectSlide(this)");
		select_form.appendChild(slide);
		slide.innerHTML = config.slides[key];
	}
	menu.appendChild(select_form);
}

var onSelectSlide = function(slide) {
	var map = document.getElementById("top-floor"), 
		overlay,
		list = document.getElementById("list"),
		listitem,
		val = slide.getAttribute("value"),
		id = val + "-overlay",
		lid = val + "-list",
		path = "./assets/img/map/slide/" + val + ".gif";

	if(slide.checked) {
		overlay = document.createElement("IMG");
		overlay.setAttribute("id", id);
		overlay.setAttribute("class", "map-slide");
		overlay.setAttribute("src", path);
		map.appendChild(overlay);

		listitem = document.createElement("LI");
		listitem.setAttribute("id", lid);
		listitem.innerHTML = config.slides[val];

		var swath;
		if(config.slide_colors[val]) {
			swath = document.createElement("SPAN");
			swath.style.marginLeft = "15px";
			swath.style.backgroundColor = config.slide_colors[val];
			swath.innerHTML = "&nbsp&nbsp&nbsp";
			listitem.appendChild(swath);
		}

		list.appendChild(listitem);
	}
	else {
		overlay = document.getElementById(id);
		listitem = document.getElementById(lid);
		list.removeChild(listitem);
		map.removeChild(overlay);
	}
}

$(document).ready(function() {
	init();
});
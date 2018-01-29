

var init = function() {
	// Add map container
	var main = document.getElementById("dulibmap").innerHTML = "<div id='map-container'></div><div id='select-menu'></div><div id='selected-list'></div>";
	var container = document.getElementById("map-container");

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
		val = slide.getAttribute("value"),
		id = val + "-overlay",
		path = "./assets/img/map/slide/" + val + ".gif";

	if(slide.checked) {
		overlay = document.createElement("IMG");
		overlay.setAttribute("id", id);
		overlay.setAttribute("class", "map-slide");
		overlay.setAttribute("src", path);
		map.appendChild(overlay);
	}
	else {
		overlay = document.getElementById(id);
		map.removeChild(overlay);
	}
}

$(document).ready(function() {
	init();
});
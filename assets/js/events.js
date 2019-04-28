var selectFloor = function(selected) {
	var floors = document.getElementsByClassName("floor-option");
	for(var floor of floors) {
		floor.classList.remove("active");
		if(floor.id == selected + "-floor") {
			floor.classList.add("active");
		}
	}

	// TODO Hide other maps/lists, show selected floor map
}
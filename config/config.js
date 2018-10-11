var config = {

	"base_url": "http://localhost/dulibmap",
	"legend_image": "Legend-H-wide.png",

	"map_base": {

		"top_floor": "top_base_tech_900.png",
		"main_floor": "main_base_900.png",
		"bottom_floor": "bottom_base_900.png"
	},

	"default_map": "top_floor",

	"map_labels": {
		
		"top_floor": "Top Floor",
		"main_floor": "Main Floor",
		"bottom_floor": "Bottom Floor"
	},

	"maps": {

		"top_floor" : {

			"Study Rooms" : {

				"top_sgs"			: "Small Group Study",
				"top_lgs"			: "Large Group Study"
			},

			"Reading Rooms" : {

				"top_frr"			: "Faculty Reading Room",
				"top_euc"			: "Extended Use Carrels",
				"top_gr"			: "Gottesfeld Room",
				"top_qrr"			: "Quinette Reading Room",
				"top_dfra"			: "Deline Family Reading Area"

			},

			"Meeting Rooms" : {

				"top_loft"			: "The Loft",
				"top_wtr"			: "Wohlauer Teleconference Room"
			},

			"Offices" : {

				"top_ds"			: "Dean's Suite",
				"top_cfwlc"			: "Center for World Languages and Cultures",
				"top_wpf"			: "Writing Program Faculty",
				"top_otl" 			: "Office of Teaching and Learning"
			}
		},

		"main_floor" : {

		},

		"bottom_floor" : {
			
		}
	},

	"room_clickmaps" : {
		"top_ds": [
			"620,45,820,45,820,244,710,244,710,150,620,150"
		]
	},

	"room_action": {
		"top_ds": {
			"type": "external",
			"value": "https://library.du.edu/contact/department-directory.html"
		}
	},

	"slide_colors": {

		"top_frr"   : "#93d9f9",
		"top_cfwlc" : "#c1ffd8",
		"top_euc"   : "#e0f992",
		"top_gr"	: "#e8c9fb",
		"top_qrr"	: "#f3c5c5",
		"top_loft"	: "#fdde89",
		"top_dfra"	: "#eed8fb",
		"top_sgs" 	: "#cecfae",
		"top_sgs" 	: "#afcc93",
		"top_wtr"	: "#e0f992",
		"top_otl" 	: "#eed8fb",
		"top_wpf" 	: "#e0f992",
		"top_ds"	: "#f3c5c5"
	},

	"labels" : {
		"top_floor": "Upper Level"
	}
}
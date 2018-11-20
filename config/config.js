var config = {

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

			"Classrooms" : {
				"top_loft"			: "The Loft",
				"top_euc"			: "Extended Use Carrels",
				"top_frr"			: "Faculty Reading Room",
				"top_gr"			: "Gottesfeld Room",
				"top_qrr"			: "Quinette Reading Room",
				"top_dfra"			: "Deline Family Reading Area"
			},

			"Centers and Services" : {
				"top_ds"			: "Dean's Suite",
				"top_wtr"			: "Wohlauer Teleconference Room",
				"top_cfwlc"			: "Center for World Languages and Cultures",
				"top_wpf"			: "Writing Program Faculty",
				"top_otl" 			: "Office of Teaching and Learning"
			}
		},

		"main_floor" : {
			"Technology Services" : {
				"main_uts"			: "University Technology Services"
			},

			"Centers and Services" : {
				"main_wc"			: "Writing Center",
				"main_mc"			: "Math Center",
				"main_lc"			: "Language Center",
				"main_sec"			: "Science and Engineering Center",
				"main_rc"			: "Research Center",
				"main_dmc"			: "Digital Media Center",
				"main_er"			: "Events Room"
			},

			"Classrooms" : {
				"main_cc"			: "Chan Classroom",
				"main_hr"			: "Herold Room"
			}
		},

		"bottom_floor" : {
			"Study Rooms" : {
				"bottom_gfeuc"		: "Gilbertson Family Extended Use Carrels",
				"bottom_fgs"		: "Family Group Study",
				"bottom_sgs" 		: "Small Group Study",
				"bottom_lgs"		: "Large Group Study"	
			},

			"Classrooms" : {
				"bottom_frr"		: "Fogel Reading Room",
				"bottom_ssr"		: "Schayer Seminar Room"
			},

			"Centers and Services" : {
				"bottom_sc"			: "Special Collections",
				"bottom_vcs"		: "Video Creation Studio"
			}
		}
	},

	"room_clickmaps" : {
		"top_sgs": [
			"80,335,190,335,190,370,80,370"
		],
		"top_otl": [
			"620,330,820,330,820,490,745,490,745,460,650,460,650,410,620,410"
		]
	},

	"room_action": {
		"top_sgs": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_otl": {
			"type": "external",
			"value": "http://otl.du.edu"
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
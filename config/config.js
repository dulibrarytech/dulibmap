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
				"top_sgs_391"		: "Small Group Study 391",
				"top_sgs_392"		: "Small Group Study 392",
				"top_sgs_393"		: "Small Group Study 393",
				"top_sgs_394"		: "Small Group Study 394",
				"top_sgs_395"		: "Small Group Study 395",
				"top_sgs_396"		: "Small Group Study 396",
				"top_lgs"			: "Large Group Study",
				"top_fsa"			: "Gilbert Frank / Recent Grad Study Area"
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
				"top_otl" 			: "Office of Teaching and Learning",
				"top_ults"			: "University Libraries Technical Services"
			}
		},

		"main_floor" : {
			"Study Rooms" : {
				"main_nsr"		: "Nikki's Study Room"	
			},

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
		"top_sgs_391": [
			"160,330,193,330,193,370,160,370"
		],
		"top_sgs_392": [
			"120,330,155,330,155,370,120,370"
		],
		"top_sgs_393": [
			"85,330,116,330,116,370,85,370"
		],
		"top_sgs_394": [
			"60,467,97,467,97,514,60,514"
		],
		"top_sgs_395": [
			"105,467,135,467,135,514,105,514"
		],
		"top_sgs_396": [
			"143,467,173,467,173,514,143,514"
		],
		"top_otl": [
			"620,330,820,330,820,490,745,490,745,460,650,460,650,410,620,410"
		],
		"top_dfra": [
			"80,40,270,40,270,240,65,240,65,60,80,60"
		]
	},

	"room_action": {
		"top_sgs_391": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_392": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_393": {
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

	"hover_displays": {
		"top_sgs_391": {
			"text": "Washington DC Study Room"
		},
		"top_sgs_392": {
			"text": "Twin Cities Study Room"
		},
		"top_sgs_393": {
			"text": "Northern California Study Room"
		},
		"top_sgs_394": {
			"text": "Newman Study Room"
		},
		"top_sgs_395": {
			"text": "Boston Study Room"
		},
		"top_sgs_396": {
			"text": "New York Study Room"
		},
		"top_dfra": {
			"text": "The Deline Family Reading Area provides views of the downtown Denver skyline and front-range mountains beyond, with exhibit displays and various seating options."
		}
	},

	"labels": {
		"top_floor": "Upper Level"
	}
}
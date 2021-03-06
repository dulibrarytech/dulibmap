var config = {

	"mapSlideFileType": "gif",

	"legend_image": "Legend-V2.png",

	"map_base": {
		"top-floor": "top_base_750.png",
		"main-floor": "main_base_750.png",
		"bottom-floor": "bottom_base_750.png"
	},

	"map_height": "750",
	"map_width": "750",

	"default_map": "main-floor",

	"map_names": {
		"top-floor": "Top Floor",
		"main-floor": "Main Floor",
		"bottom-floor": "Bottom Floor"
	},

	"map_labels": {
		"fontFamily": "arial",
		"fontSize": "13px",
		"fontColor": "black",
		"line_spacing": "1.2em"
	},

	"room_labels": {
		"fontFamily": "arial",
		"fontSize": "14px",
		"fontColor": "black",
		"line_spacing": "1.2em"
	},

	"map_select_header": "Maps",
	"group_select_header": "Rooms",

	"legend_header": "Legend",
	"legend_data": [
		{
			"image": "assets/img/legend/tech-alcove.png",
			"label": "Tech Alcove"
		},
		// {
		// 	"image": "assets/img/legend/black-and-white-printer.png",
		// 	"label": "Black and White Printer"
		// },
		{
			"image": "assets/img/legend/color-printer.png",
			"label": "Black and White / Color Printer"
		},
		{
			"image": "assets/img/legend/scanner.png",
			"label": "Scanner"
		},
		{
			"image": "assets/img/legend/copier.png",
			"label": "Copier"
		},
		{
			"image": "assets/img/legend/stairs_new.png",
			"label": "Stairs"
		},
		{
			"image": "assets/img/legend/elevator.png",
			"label": "Elevator"
		},
		{
			"image": "assets/img/legend/nursing.png",
			"label": "Nursing Lounge"
		},
		{
			"image": "assets/img/legend/gender-neutral-restroom.png",
			"label": "Gender Neutral Restroom"
		},
		{
			"image": "assets/img/legend/shower.png",
			"label": "Shower"
		},
		{
			"image": "assets/img/legend/lgs.png",
			"label": "Large Group Study"
		}
	],

	// Map overlays
	"maps": {
		// Floor
		"top-floor" : {
			// Room groups (Activated by checkbox)
			"Study Rooms" : {
				// "top_sgs"			: "Small Group Study",
				"top_sgs_310"		: "Small Group Study 310",
				"top_sgs_311"		: "Small Group Study 311",
				"top_sgs_314"		: "Small Group Study 314",
				"top_sgs_315"		: "Small Group Study 315",
				"top_sgs_316"		: "Small Group Study 316",
				"top_sgs_317"		: "Small Group Study 317",
				"top_sgs_318"		: "Small Group Study 318",
				"top_sgs_319"		: "Small Group Study 319",
				"top_sgs_329"		: "Small Group Study 329",
				"top_sgs_330"		: "Small Group Study 330",
				"top_sgs_331"		: "Small Group Study 331",
				"top_sgs_391"		: "Small Group Study 391",
				"top_sgs_392"		: "Small Group Study 392",
				"top_sgs_393"		: "Small Group Study 393",
				"top_sgs_394"		: "Small Group Study 394",
				"top_sgs_395"		: "Small Group Study 395",
				"top_sgs_396"		: "Small Group Study 396",
				"top_sgs_396"		: "Small Group Study 396",
				// "top_lgs"			: "Large Group Study",
				"top_lgs_352"		: "Large Group Study 352",
				"top_lgs_354"		: "Large Group Study 354",
				"top_lgs_389"		: "Large Group Study 389",
				"top_lgs_390"		: "Large Group Study 390",
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
			},

			"Accessible Services" : {
				"top_access_restroom1_pin"		: "Accessible Gender Neutral Restroom",
				"top_access_elevator_pin"		: "Elevators"
			}
		},

		"main-floor" : {
			"Technology Services" : {
				"main_uts"			: "University Technology Services"
			},

			"Study Rooms" : {
				"main_nsr"		: "Nikki's Study Room"	
			},

			"Classrooms" : {
				"main_cc"			: "Chan Classroom",
				"main_hr"			: "Herold Room"
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

			"Accessible Services" : {
				"main_access_restroom1_pin"		: "Accessible Gender Neutral Restroom",
				"main_access_elevator_pin"		: "Elevators",
				"main_access_doors_pin"			: "Automatic Door Opener",
				"main_access_printer1_pin"		: "Accessible Printer"
			}
		},

		"bottom-floor" : {
			"Study Rooms" : {
				"bottom_gfeuc"		: "Gilbertson Family Extended Use Carrels",
				"bottom_fgs"		: "Family Group Study",
				"bottom_sgs" 		: "Small Group Study",
				"bottom_sgs_189" 	: "Small Group Study Room 189",
				"bottom_sgs_190" 	: "Small Group Study Room 190",
				"bottom_sgs_191" 	: "Small Group Study Room 191",
				"bottom_sgs_108A" 	: "Small Group Study Room 108A",
				"bottom_sgs_108B" 	: "Small Group Study Room 108B",
				"bottom_sgs_108C" 	: "Small Group Study Room 108C",
				"bottom_sgs_108D" 	: "Small Group Study Room 108D",
				"bottom_sgs_108E" 	: "Small Group Study Room 108E",
				"bottom_sgs_108F" 	: "Small Group Study Room 108F",
				"bottom_sgs_168" 	: "Small Group Study Room 168",
				"bottom_lgs"		: "Large Group Study",
				"bottom_lgs_182" 	: "Large Group Study Room 182",
				"bottom_lgs_184" 	: "Large Group Study Room 184"
			},

			"Classrooms" : {
				"bottom_frr"		: "Fogel Reading Room",
				"bottom_ssr"		: "Schayer Seminar Room"
			},

			"Centers and Services" : {
				"bottom_sc"			: "Special Collections",
				"bottom_vcs"		: "Video Creation Studio"
			},

			"Accessible Services" : {
				"bottom_access_restroom1_pin"		: "Accessible Gender Neutral Restroom",
				"bottom_access_elevator_pin"		: "Elevators"
			}
		}
	},

	"default_group_selections": {
		"top-floor": [
			"Study Rooms",
			"Classrooms",
			"Centers and Services",
			"Accessible Services"
		],
		"main-floor": [
			"Technology Services",
			"Study Rooms",
			"Classrooms",
			"Centers and Services",
			"Accessible Services"
		],
		"bottom-floor": [
			"Study Rooms",
			"Classrooms",
			"Centers and Services",
			"Accessible Services"
		]
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
	}
}
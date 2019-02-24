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
				"top_sgs_310"		: "Small Group Study 310",
				"top_sgs_311"		: "Small Group Study 311",
				"top_sgs_391"		: "Small Group Study 391",
				"top_sgs_392"		: "Small Group Study 392",
				"top_sgs_393"		: "Small Group Study 393",
				"top_sgs_394"		: "Small Group Study 394",
				"top_sgs_395"		: "Small Group Study 395",
				"top_sgs_396"		: "Small Group Study 396",
				"top_sgs_396"		: "Small Group Study 396",
				"top_lgs"			: "Large Group Study",
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
				"top_accessible"		: "Accessible Services"
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
				"bottom_sgs_189" 	: "Small Group Study Room 189",
				"bottom_sgs_190" 	: "Small Group Study Room 190",
				"bottom_sgs_191" 	: "Small Group Study Room 191",
				"bottom_sgs_108" 	: "Small Group Study Room 108",
				"bottom_sgs_168" 	: "Small Group Study Room 168"
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
			}
		}
	},

	"room_clickmaps" : {
		"top_sgs_310": [
			"277,630,317,630,317,653,277,653"
		],
		"top_sgs_311": [
			"277,660,317,660,317,680,277,680"
		],
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
		"top_lgs_389": [
			"206,243,265,243,265,280,206,280"
		],
		"top_lgs_390": [
			"206,290,265,290,265,325,206,325"
		],
		"top_otl": [
			"620,330,820,330,820,490,745,490,745,460,650,460,650,410,620,410"
		],
		"top_cfwlc": [
			"660,465,740,465,740,490,715,490,715,550,655,550,655,510,600,510"
		],
		"top_dfra": [
			"80,40,270,40,270,240,65,240,65,60,80,60"
		],
		"top_fsa": [
			"40,375,195,375,180,465,60,465"
		],
		"top_euc": [
			"65,590,170,590,170,680,65,680"
		],
		"top_qrr": [
			"70,695,270,695,270,860,155,850,70,800"
		],
		"top_frr": [
			"450,790,540,790,540,870,450,870"
		],
		"top_gr": [
			"450,270,540,270,540,780,450,780"
		],
		"top_wtr": [
			"562,555,620,555,620,590,562,590"
		],
		"top_ds": [
			"620,40,820,40,820,240,710,240,710,150,650,150"
		],
		"top_wpf": [
			"355,40,535,40,535,270,355,270"
		],
		"top_loft": [
			"355,415,425,400,455,425,450,510,370,510"
		]
	},

	"room_action": {
		"top_sgs_310": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_311": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
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
		"top_sgs_394": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_395": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_396": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_lgs_389": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_lgs_390": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_otl": {
			"type": "external",
			"value": "http://otl.du.edu"
		},
		"top_cfwlc": {
			"type": "external",
			"value": "http://www.du.edu/cwlc"
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
		"top_sgs_310": {
			"text": "Shafroth Study Room"
		},
		"top_sgs_311": {
			"text": ""
		},
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
		"top_lgs_389": {
			"text": "Cheme Study Room"
		},
		"top_lgs_390": {
			"text": "Ray Bradbury Study Room"
		},
		"top_dfra": {
			"text": "The Deline Family Reading Area provides views of the downtown Denver skyline and front-range mountains beyond, with exhibit displays and various seating options."
		},
		"top_fsa": {
			"text": "The study area funded by Margot Gilbert Frank and M Allan Frank, along with Recent Graduates of Colorado, provides seating and group study rooms near the DVD collection and viewing area."
		},
		"top_otl": {
			"text": "The Office of Teaching & Learning provides professional development to improve teaching practices, develops and supports state-of-the-art technology and web-based applications that enhance student learning and promotes innovation and collaboration."
		},
		"top_cfwlc": {
			"text": "The Center for World Languages and Cultures administers foreign language placement exams to undergraduate students registering for language courses."
		},
		"top_euc": {
			"text": "The Extended Use Quiet Study Area offers an assigned carrel for one academic quarter to students writing a thesis or completing a major research project."
		},
		"top_qrr": {
			"text": "The Quinette Family Reading Room offers 2,900 sq. ft. for reading and contemplation. It has beautiful views across Carnegie Green, a fireplace, display of the library\’s valuable Ski Collection, plentiful windows, soft chairs and custom-built tables by DU alum Daniel Strawn."
		},
		"top_frr": {
			"text": "The Faculty Reading Room offers faculty a place to work, read, and collaborate."
		},
		"top_gr": {
			"text": "The Gottesfeld Room honors the important role of Marion Gottesfeld, who founded the Women\'s Library Association in 1956. Built-in cabinetry displays the collection of Artist Books - hand-made works of art."
		},
		"top_wtr": {
			"text": "The Wohlauer Teleconferencing Room is acoustically designed and outfitted with state-of-the-art equipment to provide reliable teleconferencing capabilities to students, staff, or faculty."
		},
		"top_ds": {
			"text": "The Dean\'s Suite houses offices and meeting space for professional staff with administrative roles in the library. These offices overlook the Buchtel Tower and the Holocaust Awareness and Social Action site."
		},
		"top_wpf": {
			"text": "The Writing Program offers renowned first-year writing classes, provides support for writing-intensive courses, leads workshops to help professors teach writing, and conducts research in writing, rhetoric and literacy."
		},
		"top_loft": {
			"text": "The Loft hangs dramatically in the atrium, above the new book collection. It serves as a research seminar room with advanced technology that enables students and faculty to share information from their own devices."
		}
	},

	"labels": {
		"top_floor": "Upper Level"
	}
}
var config = {

	"legend_image": "Legend-H-wide.png",

	"map_base": {
		"top-floor": "top_base_tech_900.png",
		"main-floor": "main_base_900.png",
		"bottom-floor": "bottom_base_900.png"
	},

	"default_map": "top-floor",

	"map_labels": {
		"top-floor": "Top Floor",
		"main-floor": "Main Floor",
		"bottom-floor": "Bottom Floor"
	},

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
				"top_accessible"		: "Accessible Services"
			}
		},

		"main-floor" : {
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
			}
		}
	},

	// Define clickable areas (html clickmaps)
	"room_clickmaps" : {

		"top-floor": {
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
			"top_sgs_314": [
				"447,655,647,651,483,677,449,685"
			],
			"top_sgs_315": [
				"475,647,498,635,516,656,487,671"
			],
			"top_sgs_316": [
				"503,631,526,615,545,631,525,651"
			],
			"top_sgs_317": [
				"570,600,610,600,610,621,570,621"
			],
			"top_sgs_318": [
				"570,630,610,630,610,652,570,652"
			],
			"top_sgs_319": [
				"570,662,610,662,610,685,570,685"
			],
			"top_sgs_329": [
				"560,514,585,514,585,547,560,547"
			],
			"top_sgs_330": [
				"593,514,618,514,620,550,593,550"
			],
			"top_sgs_331": [
				"625,514,650,514,650,550,625,550"
			],
			"top_lgs_389": [
				"206,243,265,243,265,280,206,280"
			],
			"top_lgs_390": [
				"206,290,265,290,265,325,206,325"
			],
			"top_lgs_352": [
				"620,244,642,244,642,300,620,300"
			],
			"top_lgs_354": [
				"650,244,675,244,675,300,650,300"
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
				"450,716,536,716,536,781,450,781"
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
		"top-floor_static" : {

		},

		"main-floor": {
			"main_dmc": [
				"505,536,551,484,588,509,539,555"
			],
			"main_rc": [
				"586,419,646,419,592,505,553,479"
			],
			"main_uts": [
				"633,228,713,228,717,362,672,362,672,325,608,325,616,260"
			],
			"main_hr": [
				"639,44,752,42,752,110,638,110"
			],
			"main_mc": [
				"471,146,471,85,502,85,502,44,558,44,560,146"
			],
			"main_lc": [
				"471,156,558,156,558,260,471,260"
			],
			"main_wc": [
				"429,137,467,137,463,257,378,239,378,170,430,170"
			],
			"main_cc": [
				"181,42,296,44,298,110,181,110"
			],
			"main_er": [
				"114,312,292,311,292,484,113,484"
			],
			"main_sec": [
				"114,42,174,42,176,112,302,112,302,86,374,86,372,220,114,214"
			]
		},
		"main-floor_static" : {
			"main_lenddesk": [
				"465,565,507,587,492,623,492,661,457,661,448,609"
			],
			"main_resdesk": [
				"556,420,569,429,553,453,543,447"
			],
			"main_complab": [
				"586,122,802,122,802,200,586,200"
			],
			"main_cafe": [
				"128,681,189,681,189,746,128,746"
			]
		},

		"bottom-floor": {
			"bottom_gfeuc": [
				"347,46,550,46,550,172,347,172"
			],
			"bottom_frr": [
				"155,500,250,473,250,580,155,580"
			],
			"bottom_ssr": [
				"252,473,302,473,302,557,252,557"
			],
			"bottom_sc": [
				"47,647,255,641,255,850,47,850"
			],
			"bottom_ms": [
				"550,500,690,500,690,600,550,600"
			],
			"bottom_lgs_182": [
				"47,146,121,146,121,198,47,198"
			],
			"bottom_lgs_184": [
				"47,202,121,202,121,250,47,250"
			],
			"bottom_sgs_108A": [
				"350,477,405,477,405,515,350,515"
			],
			"bottom_sgs_108B": [
				"350,525,396,525,396,562,350,562"
			],
			"bottom_sgs_108C": [
				"350,570,396,570,396,606,350,606"
			],
			"bottom_sgs_108D": [
				"350,615,396,615,396,655,350,655"
			],
			"bottom_sgs_108E": [
				"350,660,396,660,396,700,350,700"
			],
			"bottom_sgs_108F": [
				"350,710,405,710,405,745,350,745"
			],
			"bottom_sgs_168": [
				"800,147,848,147,848,187,800,187"
			],
			"bottom_sgs_189": [
				"166,253,212,253,212,307,166,307"
			],
			"bottom_sgs_190": [
				"218,253,253,253,253,307,218,307"
			],
			"bottom_sgs_191": [
				"198,310,253,310,253,346,198,346"
			],
			"bottom_fgs": [
				"800,190,848,190,848,247,800,247"
			],
			"bottom_vcs": [
				"645,254,717,254,717,345,645,345"
			]
		},
		"bottom-floor_static" : {
			"bottom_stacks": [
				"573,511,670,511,670,605,573,605"
			]
		}
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
		"top_sgs_314": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_315": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_316": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_317": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_318": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_319": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_329": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_330": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_sgs_331": {
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
		"top_lgs_352": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"top_lgs_354": {
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
		},

		"main_lenddesk": {
			"type": "external",
			"value": "https://library.du.edu/services/borrowing-lending/"
		},
		"main_resdesk": {
			"type": "external",
			"value": "http://libraryhelp.du.edu/"
		},
		"main_complab": {
			"type": "external",
			"value": "https://library.du.edu/services/computers-tech-availability.html"
		},
		"main_dmc": {
			"type": "external",
			"value": "https://www.du.edu/it/services/digital-media-services"
		},
		"main_rc": {
			"type": "external",
			"value": "https://library.du.edu/research/research-center.html"
		},
		"main_uts": {
			"type": "external",
			"value": "https://www.du.edu/it/"
		},
		"main_mc": {
			"type": "external",
			"value": "https://www.du.edu/nsm/departments/mathematics/coursesandadvising/mathcenter.html"
		},
		"main_wc": {
			"type": "external",
			"value": "https://www.du.edu/writing/writingcenter/"
		},
		"main_sec": {
			"type": "external",
			"value": "http://portfolio.du.edu/sec"
		},
		"main_lc": {
			"type": "external",
			"value": "http://www.du.edu/cwlc"
		},

		"bottom_sc": {
			"type": "external",
			"value": "https://library.du.edu/collections-archives/specialcollections/index.html"
		},
		"bottom_vcs": {
			"type": "external",
			"value": "https://www.du.edu/it/services/digital-media-services/video-creation-studio"
		},
		"bottom_sgs_189": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"bottom_sgs_190": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"bottom_sgs_191": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"bottom_sgs_108A": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"bottom_sgs_108B": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"bottom_sgs_108C": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"bottom_sgs_108D": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"bottom_sgs_108E": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"bottom_sgs_108F": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"bottom_sgs_168": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"bottom_lgs_182": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
		"bottom_lgs_184": {
			"type": "external",
			"value": "https://iris.cair.du.edu/room-reservation/library/"
		},
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
			"text": "Madden Study Room"
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
		"top_sgs_314": {
			"text": "Small Group Study Room 314"
		},
		"top_sgs_315": {
			"text": "Small Group Study Room 315"
		},
		"top_sgs_316": {
			"text": "Small Group Study Room 316"
		},
		"top_sgs_317": {
			"text": "Small Group Study Room 317"
		},
		"top_sgs_318": {
			"text": "Small Group Study Room 318"
		},
		"top_sgs_319": {
			"text": "Small Group Study Room 319"
		},
		"top_sgs_329": {
			"text": "Small Group Study Room 329"
		},
		"top_sgs_330": {
			"text": "Small Group Study Room 330"
		},
		"top_sgs_331": {
			"text": "Small Group Study Room 331"
		},
		"top_lgs_389": {
			"text": "Cheme Study Room"
		},
		"top_lgs_390": {
			"text": "Ray Bradbury Study Room"
		},
		"top_lgs_352": {
			"text": "Large Group Study Room 352"
		},
		"top_lgs_354": {
			"text": "Large Group Study Room 354"
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
		},

		"main_lenddesk": {
			"text": "The Jordon and Essie Perlmutter and Family Lending Services Desk provides help locating and checking out books and materials."
		},
		"main_dmc": {
			"text": "The Digital Media Center is a brand-new service to DU, serving as a digital media editing facility with equipment, software and staff support."
		},
		"main_rc": {
			"text": "The Archibald M. and Helen M. Crossley Research Center provides expert research help to students, faculty, and staff at any stage of the research process."
		},
		"main_uts": {
			"text": "The University Technology Services Help Center is staffed by specialized technicians who diagnose and repair hardware and software issues for students, faculty and staff. "
		},
		"main_complab": {
			"text": "The Computer-Equipped Seating area has individual workspaces with more than 80 PCs and more than 30 Macs available for student/patron use."
		},
		"main_hr": {
			"text": "The Virginia Herold Research Instruction Room serves thousands of students each year with classes and workshops in navigating the abundant resources of the University Library, including nearly 1,000 databases. "
		},
		"main_mc": {
			"text": "The Math Center provides drop-in assistance for Algebra, Trigonometry, Business Calculus, and Calculus I-III classes, including homework review and help preparing for exams."
		},
		"main_wc": {
			"text": "The Shopneck Family Writing Center offers one-on-one consultations, providing writers comprehensive and collaborative advice on writing."
		},
		"main_cc": {
			"text": "The Chan Classroom funded by the Boettcher Foundation is used by the Writing Program faculty to teach writing skills across all academic disciplines."
		},
		"main_er": {
			"text": "The Special Events Room can seat 200 people for academic events and presentations by students and faculty. When not in use for an event, the space is set with tables and chairs as an open study area. "
		},
		"main_cafe": {
			"text": "The Front Porch Café, made possible by the generosity of Doug and Mary Scrivner, offers breakfast, lunch and dinner, seating 70 inside and 50 on the porch, featuring the Shopneck Hearth, rocking chairs, and a display of current periodicals and newspapers."
		},
		// "main_lc": {
		// 	"text": ""
		// },
		"main_resdesk": {
			"text": "Click to ask a research questions"
		},
		"main_sec": {
			"text": "The Science and Engineering Center is a collaborative space staffed by undergraduate and graduate learning assistants (LAs) trained to assist students with first and second year biology, chemistry, physics, and engineering lecture and laboratory courses."
		},

		"bottom_gfeuc": {
			"text": "An anonymous donor funded the Quiet Study Room where acoustic engineering limits noise from other areas of the Academic Commons and from Evans Avenue so that students may easily focus on their assignments."
		},
		"bottom_frr": {
			"text": "DU has long had impressive Special Collections, and with the Ida and Max Fogel Family Reading Room, we now have an appropriate place where scholars and students may review and conduct research using these rare and valuable materials."
		},
		"bottom_ssr": {
			"text": "The Charles M. and Faye G. Schayer Seminar Room serves as a classroom for professors who bring students to work with primary sources. Imagine holding an important historic document or the costume of a famous dancer! The Schayer Room may also be used by archivists, historians and librarians for meetings."
		},
		"bottom_sc": {
			"text": "Special Collections are climate controlled, locked and supervised. With Special Collections are offices for the University Historian, the curators of the University Archives and the Ira M. and Peryle Hayutin Beck Memorial Archives of Rocky Mountain Jewish History, and an exhibit preparation room."
		},
		"bottom_ms": {
			"text": "The Penrose Collection includes all of the books and materials belonging to the University Libraries. In honor of the family that funded El Pomar Foundation, and which, in turn, provided the funds not only to build DU’s former library but to make major acquisitions of important resources, we have named the collection for Spencer and Julie Penrose, the library’s forty-year namesake."
		},
		"bottom_lgs_182": {
			"text": "Large Group Study 182"
		},
		"bottom_lgs_184": {
			"text": "Large Group Study 184"
		},
		"bottom_sgs_189": {
			"text": "Small Group Study 189"
		},
		"bottom_sgs_190": {
			"text": "Myhren Study Room"
		},
		"bottom_sgs_191": {
			"text": "Small Group Study 191"
		},
		"bottom_sgs_108A": {
			"text": "Small Group Study 108A"
		},
		"bottom_sgs_108B": {
			"text": "Small Group Study 108B"
		},
		"bottom_sgs_108C": {
			"text": "Small Group Study 108C"
		},
		"bottom_sgs_108D": {
			"text": "Small Group Study 108D"
		},
		"bottom_sgs_108E": {
			"text": "Small Group Study 108E"
		},
		"bottom_sgs_108F": {
			"text": "Small Group Study 108F"
		},
		"bottom_sgs_168": {
			"text": "Small Group Study 168"
		},
		"bottom_fgs": {
			"text": "In response to requests from graduate students, the Anderson Academic Commons has a Family Study Room where students may bring their children while they use the library, and the kids are comfortable with toys and kidsized furniture while Mom or Dad studies. "
		},
		"bottom_vcs": {
			"text": "The Video Creation Studio is a professional recording studio that can be used by DU faculty and staff with very little video production experience."
		}
	},

	"labels": {
		"top_floor": "Upper Level"
	}
}
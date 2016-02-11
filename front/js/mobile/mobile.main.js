
	enquire.register("screen and (min-width: 0) and (max-width: 768px)", {

	    // OPTIONAL
	    // If supplied, triggered when a media query matches.
			match : function() {
				loadCSS("lib/carousel/owl.carousel.css");
				loadCSS("lib/carousel/owl.theme.css");
				loadCSS("lib/carousel/owl.transitions.css");
				loadJS("js/loader.js");
				loadJS("lib/carousel/owl.carousel.min.js");
				loadJS("js/mobile/mobile.functions.js");
			},

	    // OPTIONAL
	    // If supplied, triggered when the media query transitions
	    // *from a matched state to an unmatched state*.
	    unmatch : function() {
				unloadCSS();
				unloadJS();
			},

	    // OPTIONAL
	    // If supplied, triggered once, when the handler is registered.
	    setup : function() {

			},

	    // OPTIONAL, defaults to false
	    // If set to true, defers execution of the setup function
	    // until the first time the media query is matched
	    deferSetup : true,

	    // OPTIONAL
	    // If supplied, triggered when handler is unregistered.
	    // Place cleanup code here
	    destroy : function() {
			}

	});

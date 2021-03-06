// Load modules
define("init", ['jquery', 'velocity'], 
function ($, velocity) {

	"use strict";

	$(function () {

		var init = function() {
			console.log("Application is loaded");

			$(document).ready( function() {
				windowSize(windowWidth(), windowHeight());
				console.log("The height: ", windowHeight(), "; The width:", windowWidth(), ";");
			});

			$(window).resize(function() {
				windowSize(windowWidth(), windowHeight());
				console.log("The height: ", windowHeight(), "; The width:", windowWidth(), ";");
			});			

		}

		// Setting the gameCanvas size
		var windowSize = function(width, height) {
			$('#gameCanvas').css({
				width: width,
				height: height
			});
		}

		var windowWidth = function() {
			return $(window).outerWidth();
		}

		var windowHeight = function() {
			return $(window).outerHeight();
		}

		// Load the application
		init();
	});

});

'use strict';
module.exports = function (rgbString) {
	var rgb = {};

	// First remove all whitespace, then parse the rgb string
	var rgbString = rgbString.replace(/ /g, '');

	rgbString.replace(/rgb\((\d+),(\d+),(\d+)\)/, function (rgbString, r, g, b) {
		rgb.red = Number(r);
		rgb.green = Number(g);
		rgb.blue = Number(b);
	});

	return rgb;
};

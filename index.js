'use strict';
module.exports = function (rgbString) {
	var rgb = {};

	// First remove all whitespace, then parse the rgb string
	rgbString = rgbString.replace(/ /g, '');

	rgbString.replace(/rgb\((\d+|-\d+),(\d+|-\d+),(\d+|-\d+)\)/, function (rgbString, r, g, b) {
		rgb.red = r > 0 ? Number(r) : 0;
		rgb.green = g > 0 ? Number(g) : 0;
		rgb.blue = b > 0 ? Number(b) : 0;
	});

	return rgb;
};

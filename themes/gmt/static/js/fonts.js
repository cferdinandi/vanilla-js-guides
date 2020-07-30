/*! guides v2.0.0 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/vanilla-js-guides */
(function () {
	'use strict';

	if ('fonts' in document) {
		Promise.all([
			document.fonts.load('1em PT Serif'),
			document.fonts.load('700 1em PT Serif'),
			document.fonts.load('italic 1em PT Serif'),
			document.fonts.load('italic 700 1em PT Serif')
		]).then(function () {
			document.documentElement.className += ' fonts-loaded';
		});
	}

}());

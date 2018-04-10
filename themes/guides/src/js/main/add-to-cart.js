;(function (window, document, undefined) {

	'use strict';

	// Variables
	var buyNow = document.querySelectorAll('.edd-buy-now-button');

	// Handle "buy now" clicks
	// Don't run if right-click or command/control + click
	var buyNowHandler = function (event) {
		if (!event.target.classList.contains('edd-buy-now-button')) return;
		if (event.button !== 0 || event.metaKey || event.ctrlKey) return;
		event.target.innerHTML = 'Adding to cart...';
		event.target.classList.add('disabled');
	};

	// Listen for "buy now" clicks
	if (buyNow.length > 0) {
		document.addEventListener('click', buyNowHandler, false);
	}

})(window, document);
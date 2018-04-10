/**
 * Load pricing parity message
 */
;(function (window, document, undefined) {

	'use strict';

	// Render the pricing parity message
	var renderPricingParity = function (data) {

		// Make sure we have data to render
		if (!data) return;

		// Only render on sales pages
		if (!/\/guides\//.test(window.location.pathname) && !/\/courses\//.test(window.location.pathname) && !/\/checkout\//.test(window.location.pathname) && !/\/resources\//.test(window.location.pathname)) return;

		// Get the nav
		var nav = document.querySelector('header');
		if (!nav) return;

		// Create container
		var pricing = document.createElement('div');
		pricing.id = 'pricing-parity';
		pricing.className = 'bg-muted padding-top-small padding-bottom-small';
		pricing.innerHTML = data;

		// Insert into the DOM
		nav.parentNode.insertBefore(pricing, nav);

	};

	// Get the pricing parity message via Ajax
	var getPricingParity = function () {

		// Set up our HTTP request
		var xhr = new XMLHttpRequest();
		if (!('responseType' in xhr)) return;

		// Setup our listener to process compeleted requests
		xhr.onreadystatechange = function () {
			// Only run if the request is complete
			if ( xhr.readyState !== 4 ) return;

			// Process our return data
			if ( xhr.status === 200 ) {

				// Get the content and render it
				var pricing = xhr.response.querySelector('#pricing-parity-content');
				if (!pricing) return;
				renderPricingParity(pricing.innerHTML);

				// Save the content to sessionStorage
				sessionStorage.setItem('gmt-pricing-parity', pricing.innerHTML);

			}
		};

		// Create and send a GET request
		xhr.open('GET', '/checkout/pricing-parity');
		xhr.responseType = 'document';
		xhr.send();

	};

	// Don't run on the pricing parity page itself
	if (document.querySelector('#pricing-parity-content')) return;

	// Get and render pricing parity info
	var pricing = sessionStorage.getItem('gmt-pricing-parity');
	if (typeof pricing === 'string') {
		renderPricingParity(pricing);
	} else {
		getPricingParity();
	}

})(window, document);
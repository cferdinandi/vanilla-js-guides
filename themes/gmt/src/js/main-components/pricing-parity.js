/**
 * Load pricing parity message
 */
var pricingParity = function (endpoint, template) {

	'use strict';

	// Make sure endpoint and template exist
	if (!endpoint) return;

	// Render the pricing parity message
	var renderPricingParity = function (data) {

		// Make sure we have data to render
		if (!data || !template) return;

		// Convert data to JSON
		data = JSON.parse(data);

		// Make sure discount exists
		if (data.status === 'no_discount') return;

		// Get the nav
		var nav = document.querySelector('header');
		if (!nav) return;

		// Create container
		var pricing = document.createElement('div');
		pricing.id = 'pricing-parity';
		pricing.className = 'bg-muted padding-top-small padding-bottom-small';
		pricing.innerHTML = template.replace('{{iso}}', data.code).replace('{{country}}', data.country).replace('{{code}}', data.discount).replace('{{amount}}', data.amount);

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
			if (xhr.readyState !== 4) return;

			// Process our return data
			if (xhr.status === 200) {

				// Save the content to sessionStorage
				sessionStorage.setItem('gmt-pricing-parity', xhr.response);

				// Render it
				renderPricingParity(xhr.response);

			}
		};

		// Create and send a GET request
		xhr.open('GET', endpoint);
		xhr.send();

	};

	// Get and render pricing parity info
	var pricing = sessionStorage.getItem('gmt-pricing-parity');
	if (typeof pricing === 'string') {
		renderPricingParity(pricing);
	} else {
		getPricingParity();
	}

};

export default pricingParity;
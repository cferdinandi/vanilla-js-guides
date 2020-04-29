/**
 * Get the cart quantity from checkout
 * @param  {String} url  The URL for the checkout page
 * @param  {Node}   cart The cart node to update
 */
var getCartQuantity = function (url, cart) {

	'use strict';

	// Make sure there's a cart to update
	if (!cart) return;

	//
	// Methods
	//

	var loadSaved = function () {
		var quantity = sessionStorage.getItem('gmtCartQuantity');
		if (!quantity) return;
		cart.innerHTML = parseInt(quantity.getAttribute('data-edd-cart-quantity'), 10);
	};

	var getQuantity = function (doc) {
		var quantity = doc.querySelector('[data-edd-cart-quantity]');
		if (!quantity) return;
		cart.innerHTML = parseInt(quantity.getAttribute('data-edd-cart-quantity'), 10);
		sessionStorage.setItem('gmtCartQuantity', quantity);
	};

	var getDocument = function () {
		// Set up our HTTP request
		var xhr = new XMLHttpRequest();

		// Setup our listener to process compeleted requests
		xhr.onreadystatechange = function () {
			// Only run if the request is complete
			if (xhr.readyState !== 4) return;

			// Bail if not successful
			if (xhr.status !== 200) return;

			// Get the quantity
			getQuantity(xhr.response);
		};

		// Create and send a GET request
		// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
		// The second argument is the endpoint URL
		xhr.open('GET', url);
		xhr.responseType = 'document';
		xhr.send();
	};


	//
	// Inits
	//

	// Set stored cart value if one exists
	loadSaved();

	// Make the request
	getDocument();

};
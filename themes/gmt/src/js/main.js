import './main-components/_matches-polyfill.js';
import './main-components/add-to-cart.js';
import mailchimp from './main-components/mailchimp.js';
import pricingParity from './main-components/pricing-parity.js';

// Mailchimp form
if (document.querySelector('#mailchimp-form')) {
	mailchimp(function (data) {
		if (data.code === 200) {
			window.location.href = 'https://gomakethings.com/newsletter-success';
		}
	});
}

// Pricing parity
pricingParity('https://gomakethings.com/checkout/wp-json/gmt-pricing-parity/v1/discount/', '<div class="container container-large"><img width="100" style="float:left;margin: 0.125em 1em 1em 0;" src="https://flagpedia.net/data/flags/normal/{{iso}}.png"><p class="text-small no-margin-bottom">Hi! Looks like you\'re from <strong>{{country}}</strong>, where my <strong>Vanilla JS Pocket Guides</strong> might be a bit expensive. A <strong>{{amount}}% discount</strong> will automatically be applied to every guide, course, and bundle at checkout. Cheers!</p></div>');
import '../../../../../gmt-theme/dist/js/_matches.polyfill.js';
import '../../../../../gmt-theme/dist/js/add-to-cart.js';
import mailchimp from '../../../../../gmt-theme/dist/js/mailchimp.js';
import pricingParity from '../../../../../gmt-theme/dist/js/pricing-parity.js';

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
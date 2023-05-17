import '../../../../../gmt-theme/dist/js/add-to-cart.js';
import convertkit from '../../../../../gmt-theme/dist/js/convertkit.js';
import pricingParity from '../../../../../gmt-theme/dist/js/pricing-parity.js';
import {getAffiliate, setAffiliate} from '../../../../../gmt-theme/dist/js/affiliates.js';

// ConvertKit form
convertkit();

// Pricing parity
pricingParity('https://gomakethings.com/checkout/wp-json/gmt-pricing-parity/v1/discount/', '<div class="container container-large"><img width="100" style="float:left;margin: 0.125em 1em 1em 0;" src="https://flagpedia.net/data/flags/normal/{{iso}}.png"><p class="text-small no-margin-bottom">Hi! Looks like you\'re from <strong>{{country}}</strong>, where my <strong>Vanilla JS Pocket Guides</strong> might be a bit expensive. A <strong>{{amount}}% discount</strong> will automatically be applied to every guide, course, and bundle at checkout. Cheers!</p></div>');

// Affiliate marketing
getAffiliate();
setAffiliate();
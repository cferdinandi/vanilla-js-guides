var toggleCodeView = function () {

	'use strict';

	var code = document.querySelectorAll('pre');

	var toggle = document.createElement('ul');
	toggle.className = 'list-inline text-small text-right no-margin-bottom';
	toggle.innerHTML =
		'<li><strong>Code Style:</strong></li>' +
		'<li><a data-toggle-code="wrap" href="#">Wrap</a></li>' +
		'<li><a data-toggle-code="no-wrap" href="#">Don\'t Wrap</a></li>';

	for (var i = 0; i < code.length; i++) {
		code[i].parentNode.insertBefore(toggle.cloneNode(true), code[i]);
	}

	document.addEventListener('click', function (event) {
		var type = event.target.getAttribute('data-toggle-code');
		if (!type) return;
		// @todo
	}, false);

};
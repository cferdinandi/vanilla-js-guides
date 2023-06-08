<?php

	/**
	 * Automated deploy from GitHub
	 *
	 * https://developer.github.com/webhooks/
	 * Template from ServerPilot (https://serverpilot.io/community/articles/how-to-automatically-deploy-a-git-repo-from-bitbucket.html)
	 * Hash validation from Craig Blanchette (http://isometriks.com/verify-github-webhooks-with-php)
	 */

	// Variables
	$secret = getenv('GH_DEPLOY_SECRET');
	$app = 'vanillajsguides';

	// Validate hook secret
	if ($secret !== NULL) {

		// Get signature
		$hub_signature = $_SERVER['HTTP_X_HUB_SIGNATURE'];

		// Make sure signature is provided
		if (!isset($hub_signature)) {
			die('HTTP header "X-Hub-Signature" is missing.');
		} elseif (!extension_loaded('hash')) {
			die('Missing "hash" extension to check the secret code validity.');
		}

		// Split signature into algorithm and hash
		list($algo, $hash) = explode('=', $hub_signature, 2);

		// Get payload
		$payload = file_get_contents('php://input');

		// Calculate hash based on payload and the secret
		$payload_hash = hash_hmac($algo, $payload, $secret);

		// Check if hashes are equivalent
		if (!hash_equals($hash, $payload_hash)) {
		    // Kill the script or do something else here.
		    die('Bad secret');
		}

	};

	// Do a git checkout, run Hugo, and copy files to public directory
	exec('cd /srv/users/serverpilot/apps/' . $app . '/build && git fetch --all && git reset --hard origin/master && /usr/local/bin/hugo && cp -r /srv/users/serverpilot/apps/' . $app . '/build/public/. /srv/users/serverpilot/apps/' . $app . '/public | at now +1 minute');

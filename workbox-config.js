module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,svg,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
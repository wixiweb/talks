Reveal.initialize({
	// height: '100%',
	width: '100%',
	controls: true,
	progress: true,
	history: true,
	center: true,
	transition: 'slide',
	dependencies: [
		{
			src: 'libs/reveal.js/js/classList.js',
			condition: function() {
				return !document.body.classList;
			}
		},
		{
			src: 'libs/reveal.js/js/highlight.js',
			async: true,
			condition: function() {
				return !!document.querySelector( 'pre code' );
			},
			callback: function() {
				hljs.initHighlightingOnLoad();
			}
		}
	]
});
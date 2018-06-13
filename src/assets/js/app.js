import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';

$(window).on('load', function (){
	$(document).foundation();

	$('#toTheTop').click(function() {
		$.smoothScroll({ scrollTarget: $('#header') });
	});
});
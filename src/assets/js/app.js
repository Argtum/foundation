import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';

$(window).on('load', function (){
	$(document).foundation();

	let menu = [['#homeButton', '#homeMenu'], ['#megaButton', '#megaMenu']];

	for (let i = 0; i < menu.length; i++) {
		let hoveredButton = menu[i][0];
		let openedMenu = menu[i][1];

		$([hoveredButton, openedMenu].join()).hover(function() {
			$(openedMenu).css('display', 'block');
			$(hoveredButton).addClass('hovered');
		},
			function () {
			$(openedMenu).css('display', 'none');
			$(hoveredButton).removeClass('hovered');
		});
	}
});
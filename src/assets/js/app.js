import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';

function registerHover(button, menu)
{
    let hoverItem = $([button, menu]);

    $(hoverItem).each(function () {
        $(this).hover(openMenu, closeMenu);
    });

    $(menu).hover(hoverMenu, unHoverMenu);

    function openMenu()
    {
        $(menu).show();
    }

    function closeMenu()
    {
        $(menu).hide();
    }

    function hoverMenu() {
        button.addClass('hovered');
    }

    function unHoverMenu() {
        button.removeClass('hovered');
    }
}

$(window).on('load', function (){
    $(document).foundation();

    registerHover("#homeButton", "#homeMenu");
    registerHover("#megaButton", "#megaMenu");
});

/*
 let menu = [['#homeButton', '#homeMenu'], ['#megaButton', '#megaMenu']];

    for (let i = 0; i < menu.length; i++) {
        let hoveredButton = menu[i][0];
        let openedMenu = menu[i][1];

        $([hoveredButton, openedMenu].join()).hover(function() {
            $(openedMenu).show();
            $(hoveredButton).addClass('hovered');
        },
        function () {
            $(openedMenu).hide();
            $(hoveredButton).removeClass('hovered');
        });
    }
 */
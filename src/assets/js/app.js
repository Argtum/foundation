import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';


$(window).on('load', function (){
    $(document).foundation();
    $("#owl-carousel").owlCarousel(
        {
            loop:true,
            margin:30,
            nav:true,
            autoWidth:true,
            //responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                    nav:true
                },
                640:{
                    items:3,
                    nav:true
                },
                1023:{
                    items:4,
                    nav:true,
                    loop:true
                }
            }
        }
    );
});
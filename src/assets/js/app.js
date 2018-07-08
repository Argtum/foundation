import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';

import 'owl.carousel';

$(window).on('load', function (){
    $(document).foundation();
    $("#owl-carousel").owlCarousel(
        {
            loop:true,
            margin:30,
            navigation:true,
            autoplay:true,
            smartSpeed:1000,
            lazyLoad:true,
            pagination:true,
            merge:true,
            responsive:{
                320:{
                    items:1,
                    nav:true
                },
                570:{
                    items:2,
                    nav:true
                },
                870:{
                    items:3,
                    nav:true
                },
                1170:{
                    items:4,
                    nav:true
                }
            }
        }
    );
});
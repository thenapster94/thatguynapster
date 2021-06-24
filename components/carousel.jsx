import React, { useEffect } from 'react';

export default function Carousel({
    name,
    responsive,
    showDots,
    showNavs,
    customNavs,
    autoplay,
    loop,
    autoplayTimeout,
    children }) {
    useEffect(() => {
        window.jQuery = require('../public/vendor/jquery/jquery.min.js');
        window.Carousel = require('../public/vendor/owl-carousel/owl.carousel.js');

        //handle responsive breakpoints
        let responsive_points = {};
        responsive &&
            Object.keys(responsive).map((key) => {
                let _obj = {};
                _obj[key] = responsive[key];

                responsive_points = {
                    ...responsive_points,
                    ..._obj
                }
            });


        window.jQuery(`#${name}`).owlCarousel({
            margin: 15,
            dots: showDots,
            nav: showNavs,
            autoplay: autoplay,
            loop: loop,
            autoplayTimeout: autoplayTimeout,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: responsive ? responsive_points :
                {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1280: {
                        items: 3
                    },
                    1600: {
                        items: 4
                    },
                    2560: {
                        items: 6
                    }
                }
        });
        window.jQuery('.owl-dots').addClass('mt-0');

        //handle custom navigations
        customNavs && (
            //go to previous slide
            window.jQuery(`#${customNavs.previous}`).on('click', function () {
                window.jQuery(`#${name}`).trigger('prev.owl.carousel');
            }),

            //go to next slide
            window.jQuery(`#${customNavs.next}`).on('click', function () {
                window.jQuery(`#${name}`).trigger('next.owl.carousel');
            })
        )
        //END handle custom navigations
    }, [children]);


    return (

        <div className="owl-carousel owl-theme mb-0 owl-loaded owl-drag" id={name}>
            {children}
        </div>
    );
};
jQuery((function() {
    "use strict";
    jQuery("#slider-fullwidth").carousel("cycle"), jQuery('[data-toggle="tooltip"]').tooltip(), jQuery("#gallery-slider").slick({
        arrows: !0,
        useTransform: !0,
        cssEase: "cubic-bezier(0.250, 0.250, 0.515, 0.975)",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 5e3,
        swipeToSlide: !0,
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 990,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 490,
            settings: {
                slidesToShow: 1
            }
        }]
    }), jQuery("#clients-carousel").slick({
        arrows: !1,
        useTransform: !0,
        cssEase: "cubic-bezier(0.250, 0.250, 0.515, 0.975)",
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 500,
        autoplay: !0,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }]
    }), jQuery("#news-carousel").slick({
        useTransform: !0,
        cssEase: "cubic-bezier(0.250, 0.250, 0.515, 0.975)",
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: !0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: !0
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), jQuery("#testimonial-carousel").slick({
        useTransform: !0,
        cssEase: "cubic-bezier(0.250, 0.250, 0.515, 0.975)",
        slidesToShow: 2,
        speed: 300,
        swipeToSlide: !0,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), jQuery("#menu-btn").on("click", (function() {
        jQuery(this).hasClass("toggled") ? (jQuery(this).removeClass("toggled"), jQuery(this).attr("aria-expanded", "false") && jQuery("#nav-secondary-mobile").css("display", "none")) : (jQuery(this).addClass("toggled"), jQuery(this).attr("aria-expanded", "true") && (jQuery("#nav-secondary-mobile").css("display", "block"), jQuery("#nav-secondary-mobile").addClass("fadeIn")))
    })), jQuery("#menu-btn").on("tap", (function() {
        jQuery(this).hasClass("toggled") ? jQuery(this).removeClass("toggled") : jQuery(this).addClass("toggled")
    })), jQuery("#mainmenu li.menu-item-has-children").each((function() {
        jQuery(this).append('<div class="nav-toggle-mobile-submenu"><i class="fa fa-angle-down"></i></div>')
    })), jQuery(".disabled a").each((function() {
        jQuery(this).attr("href", "#")
    })), jQuery(".nav-toggle-mobile-submenu").on("click", (function() {
        jQuery(this).hasClass("opened") ? (jQuery(this).removeClass("opened"), jQuery(this).parent("li").children(".sub-menu").css("display", "none")) : (jQuery(this).addClass("opened"), jQuery(this).parent("li").children(".sub-menu").css("display", "block"))
    })), jQuery(window).on("resize", (function() {
        var e = jQuery("#header").css("height");
        jQuery(".header-wrapper").css("min-height", e)
    })), jQuery((function() {
        var e = jQuery("#header").css("height");
        jQuery(".header-wrapper").css("min-height", e)
    })), jQuery("#filters a").on("click", (function() {
        var e = jQuery(this);
        if (e.hasClass("selected")) return !1;
        jQuery(this).parent().parent().find(".selected").removeClass("selected"), e.addClass("selected")
    }));
    var e = jQuery("#gallery");
    e.imagesLoaded((function() {
        e.isotope({
            itemSelector: ".item",
            filter: "*"
        })
    })), jQuery("#filters a").on("click", (function() {
        var s = jQuery(this).attr("data-filter");
        return e.isotope({
            filter: s
        }), !1
    })), jQuery(window).on("resize", (function() {
        e.isotope("layout"), e.isotope("layout")
    })), jQuery((function() {
        e.isotope("layout")
    })), jQuery(document).on("scroll", (function() {
        for (var e = jQuery(document).scrollTop() + jQuery(window).height(), s = jQuery(".animate"), r = 0; r < s.length; r++) {
            var o = s[r];
            jQuery(o).position().top < e ? jQuery(o).addClass("visible") : jQuery(o).removeClass("visible")
        }
    })), jQuery((function() {
        jQuery(".panel-collapse").hasClass("in") && jQuery(this).parent().parent().attr("aria-expanded", "true")
    })), jQuery((function() {
        jQuery(".accordion-toggle.in").attr("aria-expanded", "true")
    })), jQuery(".content .subtitle").parent().addClass("no-mrg"), jQuery(".content .panel-group").parent().addClass("no-mrg"), jQuery(".section-gallery").parent().parent().css("padding-top", "0"), jQuery(".shadow-box").closest(".vc_column-inner").css("z-index", "2"), jQuery(".shadow-box").parents(".vc_row").css("overflow", "visible"), jQuery(".feature-box").closest(".vc_row").css("overflow", "visible"), jQuery(document).on("click", '#mainmenu a[href^="#"]', (function(e) {
        var s = jQuery(this).attr("href"),
            r = jQuery(s);
        if (0 !== r.length) {
            e.preventDefault();
            var o = r.offset().top;
            o -= 100, jQuery("body, html").animate({
                scrollTop: o
            }, 800)
        }
    }));
    var s, r, o, t = jQuery("#btnTop");
    jQuery(window).on("scroll", (function() {
        jQuery(window).scrollTop() > 600 ? t.addClass("show") : t.removeClass("show")
    })), t.on("click", (function(e) {
        e.preventDefault(), jQuery("html, body").animate({
            scrollTop: 0
        }, "300")
    })), s = navigator.userAgent.toLowerCase().indexOf("webkit") > -1, r = navigator.userAgent.toLowerCase().indexOf("opera") > -1, o = navigator.userAgent.toLowerCase().indexOf("msie") > -1, (s || r || o) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", (function() {
        var e, s = location.hash.substring(1);
        /^[A-z0-9_-]+$/.test(s) && (e = document.getElementById(s)) && (/^(?:a|select|input|button|textarea)$/i.test(e.tagName) || (e.tabIndex = -1), e.focus())
    }), !1)
})), jQuery(window).on("load", (function() {
    "use strict";
    jQuery(".preloader-wrapper").addClass("animated fadeOut"), jQuery("body").removeClass("preloader-site"), jQuery(".content").addClass("animated fadeIn"), jQuery("body").addClass("preloader-hide"), jQuery(".preloader-wrapper").fadeOut()
}));
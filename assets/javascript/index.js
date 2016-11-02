'use strict';
'use strict';

jQuery(document).ready(function ($) {

    var $toggle = $('#nav-toggle');
    var $menu = $('#nav-menu');

    $toggle.click(function () {
        $(this).toggleClass('is-active');
        $menu.toggleClass('is-active');
    });

    var main = main = $('#nav-menu');

    $('.scroll').click(function (event) {

        event.preventDefault();

        var full_url = this.href,
            parts = full_url.split('#'),
            trgt = parts[1],
            target_offset = $('#' + trgt).offset(),
            target_top = target_offset.top - 40;

        $('html, body').animate({ scrollTop: target_top }, 1000);

        /* Remove active class on any li when an anchor is clicked */

        main.children().removeClass('is-active');

        /* Add active class to clicked anchor's parent li */

        $(this).addClass('is-active');
    });

    $(function () {
        if (location.pathname.split("/")[1] !== "") {
            $('#nav-menu a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('is-active');
        }
    });

    /**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and 
         * manipulation, class adding and class removing, and conditional testing
         */
    var aChildren = $("#nav-menu").children();
    var aArray = []; // create the empty aArray
    for (var i = 0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href'),
            parts = ahref.split('/'),
            target = parts[3];
        aArray.push(target);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function () {
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var theURL = "http://getstatic.github.io/";
            var divPos = $(theID).offset().top - 80; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < divPos + divHeight) {
                $("a[href='" + theURL + theID + "']").addClass("is-active");
            } else {
                $("a[href='" + theURL + theID + "']").removeClass("is-active");
            }
        }

        if (windowPos + windowHeight == docHeight) {
            if (!$("#nav-menu:last-child a").hasClass("is-active")) {
                var navActiveCurrent = $(".is-active").attr("href");
                $("a[href='" + theURL + navActiveCurrent + "']").removeClass("is-active");
                $("#nav-menu a.contact").addClass("is-active");
            }
        }
    });
});
//# sourceMappingURL=index.js.map

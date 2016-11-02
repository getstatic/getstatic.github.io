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
});
//# sourceMappingURL=index.js.map

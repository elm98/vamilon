

$(document).ready(function() {

    $('#blockButton').click(function() {
        $('.test').block({ message: null });
    });

    $('#blockButton2').click(function() {
        $('div.test').block({
            message: '<h1>Processing</h1>',
            css: { border: '3px solid #a00' }
        });
    });

    $('#unblockButton').click(function() {
        $('div.test').unblock();
    });

    $('a.test').click(function() {
        alert('link clicked');
        return false;
    });

    $('.form-control').blur(function() {
        $(this).siblings().css('bottom','45px');
        $(this).siblings().css('background','#fff');
    });
});

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>135 &&  screen.width>600 )
    {
        $('.imgbody').css('top',scroll);
        $('.imgbody').css('position','relative');
    }
});
/*!
* Based on articles on
* https://gomakethings.com
*/

var drawer = function () {

    /**
     * Element.closest() polyfill
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
     */
    if (!Element.prototype.closest) {
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
        Element.prototype.closest = function (s) {
            var el = this;
            var ancestor = this;
            if (!document.documentElement.contains(el)) return null;
            do {
                if (ancestor.matches(s)) return ancestor;
                ancestor = ancestor.parentElement;
            } while (ancestor !== null);
            return null;
        };
    }


    //
    // Settings
    //
    var settings = {
        speedOpen: 50,
        speedClose: 350,
        activeClass: 'is-active',
        visibleClass: 'is-visible',
        selectorTarget: '[data-drawer-target]',
        selectorTrigger: '[data-drawer-trigger]',
        selectorClose: '[data-drawer-close]',

    };


    //
    // Methods
    //

    // Toggle accessibility
    var toggleAccessibility = function (event) {
        if (event.getAttribute('aria-expanded') === 'true') {
            event.setAttribute('aria-expanded', false);
        } else {
            event.setAttribute('aria-expanded', true);
        }
    };

    // Open Drawer
    var openDrawer = function (trigger) {

        // Find target
        var target = document.getElementById(trigger.getAttribute('aria-controls'));

        // Make it active
        target.classList.add(settings.activeClass);

        // Make body overflow hidden so it's not scrollable
        document.documentElement.style.overflow = 'hidden';

        // Toggle accessibility
        toggleAccessibility(trigger);

        // Make it visible
        setTimeout(function () {
            target.classList.add(settings.visibleClass);
        }, settings.speedOpen);

    };

    // Close Drawer
    var closeDrawer = function (event) {

        // Find target
        var closestParent = event.closest(settings.selectorTarget),
            childrenTrigger = document.querySelector('[aria-controls="' + closestParent.id + '"');

        // Make it not visible
        closestParent.classList.remove(settings.visibleClass);

        // Remove body overflow hidden
        document.documentElement.style.overflow = '';

        // Toggle accessibility
        toggleAccessibility(childrenTrigger);

        // Make it not active
        setTimeout(function () {
            closestParent.classList.remove(settings.activeClass);
        }, settings.speedClose);

    };

    // Click Handler
    var clickHandler = function (event) {

        // Find elements
        var toggle = event.target,
            open = toggle.closest(settings.selectorTrigger),
            close = toggle.closest(settings.selectorClose);

        // Open drawer when the open button is clicked
        if (open) {
            openDrawer(open);
        }

        // Close drawer when the close button (or overlay area) is clicked
        if (close) {
            closeDrawer(close);
        }

        // Prevent default link behavior
        if (open || close) {
            event.preventDefault();
        }

    };

    // Keydown Handler, handle Escape button
    var keydownHandler = function (event) {

        if (event.key === 'Escape' || event.keyCode === 27) {

            // Find all possible drawers
            var drawers = document.querySelectorAll(settings.selectorTarget),
                i;

            // Find active drawers and close them when escape is clicked
            for (i = 0; i < drawers.length; ++i) {
                if (drawers[i].classList.contains(settings.activeClass)) {
                    closeDrawer(drawers[i]);
                }
            }

        }

    };


    //
    // Inits & Event Listeners
    //
    document.addEventListener('click', clickHandler, false);
    document.addEventListener('keydown', keydownHandler, false);


};

drawer();



function separateNum(value, input) {
    /* seprate number input 3 number */
    var nStr = value + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    if (input !== undefined) {

        input.value = x1 + x2;
    } else {
        return x1 + x2;
    }
}








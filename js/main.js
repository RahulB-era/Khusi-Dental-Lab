(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);


// Get the hover element, overlay, and close button
const hoverElement1 = document.getElementById('hoverElement1');
const hoverElement2 = document.getElementById('hoverElement2');
const hoverElement3 = document.getElementById('hoverElement3');
const hoverElement4 = document.getElementById('hoverElement4');
const hoverElement5 = document.getElementById('hoverElement5');
const hoverElement6 = document.getElementById('hoverElement6');

const overlay1 = document.getElementById('overlay1');
const overlay2 = document.getElementById('overlay2');
const overlay3 = document.getElementById('overlay3');
const overlay4 = document.getElementById('overlay4');
const overlay5 = document.getElementById('overlay5');
const overlay6 = document.getElementById('overlay6');

const closeOverlayBtn1 = document.getElementById('closeOverlay1');
const closeOverlayBtn2 = document.getElementById('closeOverlay2');
const closeOverlayBtn3 = document.getElementById('closeOverlay3');
const closeOverlayBtn4 = document.getElementById('closeOverlay4');
const closeOverlayBtn5 = document.getElementById('closeOverlay5');
const closeOverlayBtn6 = document.getElementById('closeOverlay6');

// Function to show the overlay
function showOverlay1() {
    overlay1.style.display = 'flex';
}
function showOverlay2() {
    overlay2.style.display = 'flex';
}
function showOverlay3() {
    overlay3.style.display = 'flex';
}
function showOverlay4() {
    overlay4.style.display = 'flex';
}
function showOverlay5() {
    overlay5.style.display = 'flex';
}
function showOverlay6() {
    overlay6.style.display = 'flex';
}

// Function to hide the overlay
function hideOverlay() {
    overlay1.style.display = 'none';
    overlay2.style.display = 'none';
    overlay3.style.display = 'none';
    overlay4.style.display = 'none';
    overlay5.style.display = 'none';
    overlay6.style.display = 'none';
}


// Show the overlay when the user clicks on the element
hoverElement1.addEventListener('click', function() {
    showOverlay1();
});
hoverElement2.addEventListener('click', function() {
    showOverlay2();
});
hoverElement3.addEventListener('click', function() {
    showOverlay3();
});
hoverElement4.addEventListener('click', function() {
    showOverlay4();
});
hoverElement5.addEventListener('click', function() {
    showOverlay5();
});
hoverElement6.addEventListener('click', function() {
    showOverlay6();
});

// Hide the overlay when the close button is clicked
closeOverlayBtn1.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop event propagation to avoid triggering parent click events
    hideOverlay();
});
closeOverlayBtn2.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop event propagation to avoid triggering parent click events
    hideOverlay();
});
closeOverlayBtn3.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop event propagation to avoid triggering parent click events
    hideOverlay();
});
closeOverlayBtn4.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop event propagation to avoid triggering parent click events
    hideOverlay();
});
closeOverlayBtn5.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop event propagation to avoid triggering parent click events
    hideOverlay();
});
closeOverlayBtn6.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop event propagation to avoid triggering parent click events
    hideOverlay();
});






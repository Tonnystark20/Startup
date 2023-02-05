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
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-inline-size: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
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


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
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
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 8
            }
        }
    });

})(jQuery);

const email = document.getElementById('mce-EMAIL')
const name = document.getElementById('mce-FNAME')
const change = document.getElementById('change');
const button = document.getElementById('mc-embedded-subscribe');

button.onclick = function () {
    if (name.value === '' || email.value === '') {
        Swal.fire({
            text: ' Name and Email Required!'
        })
        return false
    } else {
        validateEmail(email);
    }

}
function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        Swal.fire({
            text: ' Welcome To Afro Beta Consult!'
        })
    }
    else {
        Swal.fire({
            text: 'Email is not valid'
        })
        return false;
    }
}





const data = [
    { name: "Location of AfroBeta", url: "contact.html#location" },
    { name: "AfroBeta Consult Offices", url: "contact.html#location" },
    { name: "Team members of AfroBeta", url: "team.html" },
    { name: "Founder of AfroBeta Consult", url: "team.html#founder" },
    { name: "Our Services", url: "service.html#services" },
    { name: "Email of AfroBeta", url: "contact.html#email" },
    { name: "How to get in touch with AfroBeta", url: "contact.html" },
    { name: "Blog Page1", url: "blog.html" },
    { name: "Blog Page2", url: "blog2.html" },
    { name: "Latest Blogs", url: "index.html#blog" },
    { name: "Alvin Rita", url: "team.html#Nyaga" },
    { name: "Nyaga", url: "team.html#Nyaga" },
    { name: "Marumbu", url: "team.html#founder" },
    { name: "Susan Makori", url: "team.html#kwamboka" },
    { name: "Kwamboka", url: "team.html#kwamboka" },
    { name: " Enquiry ", url: "quote.html" },
    { name: "Solutions at AfroBeta Consult", url: "services.html" },
    { name: "Testimonials ", url: "testimonial.html" },
    { name: "Peter Simboni ", url: "testimonial.html" },
    { name: "Francis Wainaina", url: "testimonial.html" },
    { name: "Terry", url: "testimonial.html#terry" },
    { name: "Jonathan Githire", url: "testimonial.html" },
    { name: "About AfroBeta Consult", url: "about.html" },
    { name: "Our Contacts", url: "contact.html#email" },
    { name: "Our Clients", url: "index.html#clients" },
    { name: "Our Mobile Number", url: "contact.html#email" },
    { name: "Afro Beta Vision", url: "feature.html#vision" },
    { name: "Afro Beta Mission", url: "feature.html#mission" },
    { name: "Afro Beta Values", url: "feature.html#values" },
    { name: "Why Afrobeta Consult", url: "feature.html" },
    { name: "Creative Director AfroBeta Consult", url: "team.html#Nyaga" },
    { name: "C.O.O Afrobeta Consult", url: "team.html#kwamboka" },
    { name: "Facilitation at AfroBeta Consult", url: "service.html#facilitation" },
    { name: "Training at AfroBeta Consult", url: "service.html#training" },
    { name: "Consultation at AfroBeta Consult", url: "service.html#consultation" },
    { name: "Taifa Teule Leadership Experience", url: "blog.html#teule" },
    { name: "Shiriki", url: "blog2.html#teule" },
    { name: "Recent Posts", url: "blog.html#recent" },


];

const input = document.getElementById("search-input");
const suggestionList = document.getElementById("suggestion-list");
const searchIcon = document.querySelector(".icon ");

input.addEventListener("input", e => {
    const filteredData = data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    suggestionList.innerHTML = filteredData.map(item => `<li data-url="${item.url}">${item.name}</li>`).join("");
});

suggestionList.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        input.value = e.target.textContent;
    }
});

searchIcon.addEventListener("click", () => {
    const selectedItem = data.find(item => item.name === input.value);
    if (selectedItem) {
        window.location = selectedItem.url;
    }
});







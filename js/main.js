


(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
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


    // Main News carousel
    $(".main-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        center: true,
    });


    // Tranding carousel
    $(".tranding-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]
    });


    // Carousel item 1
    $(".carousel-item-1").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });

    // Carousel item 2
    $(".carousel-item-2").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


    // Carousel item 3
    $(".carousel-item-3").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
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


    // Carousel item 4
    $(".carousel-item-4").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
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
            },
            1200: {
                items: 4
            }
        }
    });

})(jQuery);










let scrollSpeed = 4; // Set the default scrolling speed

window.addEventListener("wheel", function (event) {
    // Calculate the scrolling speed based on the deltaY property of the event object
    let speed = event.deltaY > 0 ? scrollSpeed : -scrollSpeed;

    // Prevent the default scrolling behavior
    event.preventDefault();

    // Scroll the webpage by the calculated speed
    window.scrollBy(0, speed);
});




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
    // whatsapp switch up when scroll to top and scroll to bottom
    // JavaScript
    window.onscroll = function () {
        clearTimeout(timer);
        var timer = setTimeout(function () {
            document.getElementById("whatsapp-chat").style.display = "block";
        }, 900);
        document.getElementById("whatsapp-chat").style.display = "none";
    };


    window.onload = function () {
        document.getElementById("whatsapp-chat").style.display = "block";
    };


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
const change = document.getElementById('change');
const button = document.getElementById('mc-embedded-subscribe');

button.onclick = function () {
    if (email.value === '') {
        Swal.fire({
            text: ' Email Required!'
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


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsySMwcg_3NW62O6YiZG9P0umzZHUFES8",
    authDomain: "quick-enquiry.firebaseapp.com",
    databaseURL: "https://quick-enquiry-default-rtdb.firebaseio.com",
    projectId: "quick-enquiry",
    storageBucket: "quick-enquiry.appspot.com",
    messagingSenderId: "213943008028",
    appId: "1:213943008028:web:c82a4d7f78cd77a8add8d9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference yourdatabase
var enquiryFormDB = firebase.database().ref('AfrobetaEnquiryForm');
document.getElementById("enquiryform").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var emailid = getElementVal('email');
    var phoneNumber = getElementVal('phone');
    var serviceid = getElementVal('service');
    var messageContent = getElementVal('messages');
    saveMessages(name, emailid, phoneNumber, serviceid, messageContent);
    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("enquiryform").reset();
}


const saveMessages = (name, emailid, phoneNumber, serviceid, messageContent) => {
    var newEnquiryForm = enquiryFormDB.push();
    newEnquiryForm.set({
        name: name,
        emailid: emailid,
        phoneNumber: phoneNumber,
        serviceid: serviceid,
        messageContent: messageContent,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
}
//suggestion search
const data = [
    { name: "AfroBeta Consult", url: "about.html" },
    { name: "Offices", url: "contact.html#location" },
    { name: "Mission", url: "feature.html#mission" },
    { name: " Values", url: "feature.html#values" },
    { name: " Vision", url: "feature.html#vision" },
    { name: "Alvin Rita Nyaga", url: "team.html#Nyaga" },
    { name: "Blog Grid 1", url: "blog.html" },
    { name: "Blog Grid 2", url: "blog2.html" },
    { name: "Consultation ", url: "service.html#consultation" },
    { name: "   Contact ", url: "contact.html" },
    { name: "C.O.O Afrobeta Consult", url: "team.html#kwamboka" },
    { name: "Creative Director AfroBeta Consult", url: "team.html#Nyaga" },
    { name: " Feedback", url: "contact.html#email" },
    { name: "Emmanuel Misiati Marumbu", url: "team.html#founder" },
    { name: "Facilitation ", url: "service.html#facilitation" },
    { name: "Founder of AfroBeta Consult", url: "team.html#founder" },
    { name: "Event hosting", url: "price.html#facilitation" },
    { name: "How to get in touch with AfroBeta", url: "contact.html" },
    { name: "Team Player", url: "price.html#training" },
    { name: "Kwamboka", url: "team.html#kwamboka" },
    { name: "Latest Blogs", url: "index.html#blog" },
    { name: "Location ", url: "contact.html#location" },
    { name: "  Enquiry ", url: "quote.html" },
    { name: " Event Curation ", url: "price.html#consultation" },
    { name: " Group Engagement ", url: "price.html#consultation" },
    { name: " Engagement ", url: "price.html#facilitation" },
    { name: " Experience Curation ", url: "price.html#facilitation" },
    { name: " Services", url: "service.html#services" },
    { name: "Solutions ", url: "services.html" },
    { name: " Clients ", url: "index.html#clients" },
    { name: " Program Curation ", url: "price.html#consultation" },
    { name: " Personal & Team leadership ", url: "price.html#consultation" },
    { name: "Recent Posts ", url: "blog.html#recent" },
    { name: "Join Shiriki", url: "blog2.html#teule" },
    { name: "Susan Makori Kwamboka", url: "team.html#kwamboka" },
    { name: "Taifa Teule Leadership Experience", url: "blog.html#teule" },
    { name: "Team members of AfroBeta", url: "team.html" },
    { name: "Testimonials ", url: "testimonial.html" },
    { name: "Training ", url: "service.html#training" },
    { name: "Team Building", url: "price.html#training" },
    { name: "Group engagement facilitation", url: "price.html#facilitation" },
    { name: "Creative & critical thinking", url: "price.html#training" },
    { name: "Why Afrobeta ", url: "feature.html" },


];

const input = document.getElementById("search-input");
const suggestionList = document.getElementById("suggestion-list");
const searchIcon = document.querySelector(".icon ");

input.addEventListener("input", e => {
    suggestionList.style.display = "block";
    const filteredData = data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    suggestionList.innerHTML = filteredData.map(item => `<li data-url="${item.url}">${item.name}</li>`).join("");
});

suggestionList.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        input.value = e.target.textContent;
        suggestionList.style.display = "none";
    }
});

searchIcon.addEventListener("click", () => {
    const selectedItem = data.find(item => item.name === input.value);
    if (selectedItem) {
        window.location = selectedItem.url;
    }
});
// whatsapp draggerble 


interact(document.getElementById("whatsapp-chat"))
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
            var textEl = event.target.querySelector("p");

            textEl &&
                (textEl.textContent =
                    "moved a distance of " +
                    (Math.sqrt(Math.pow(event.pageX - event.x0, 2) + Math.pow(event.pageY - event.y0, 2) | 0))
                        .toFixed(2) +
                    "px");
        }
    });

function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
        y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";

    // update the posiion attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
}
function dragMoveListener(event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
    var maxTop = 0.4 * window.innerHeight;

    // limit the top position to 40% of the screen
    y = Math.min(y, maxTop);

    target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";

    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
}
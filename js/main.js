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
    { name: "AfroBeta Consult", url: "about.html" },
    { name: "Offices", url: "contact.html#location" },
    { name: "Mission", url: "feature.html#mission" },
    { name: " Values", url: "feature.html#values" },
    { name: " Vision", url: "feature.html#vision" },
    { name: "Alvin Rita Nyaga", url: "team.html#Nyaga" },
    { name: "Blog Section 1", url: "blog.html" },
    { name: "Blog Section 2", url: "blog2.html" },
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



const player = document.getElementById("player");
const playBtn = document.getElementById("playBtn");
let currentSong = 0;
let songList = [
    "/img/Wherever.mp3",
    "/img/Castle On The Hill.mp3",
    "/img/Wild Dreams.mp3"
];

// Retrieve the saved state from localStorage
let savedState = localStorage.getItem("musicState");
if (savedState) {
    savedState = JSON.parse(savedState);
    player.currentTime = savedState.currentTime;
    currentSong = savedState.currentSong;
} else {
    // Use default values
    savedState = {
        currentTime: 0,
        currentSong: 0,
        isPlaying: false
    };
}

// Update the player source
player.src = songList[currentSong];

// Update the play button
if (savedState.isPlaying) {
    player.play();
    playBtn.innerHTML = '<span></span>';
} else {
    playBtn.innerHTML = '<span class="pause-icon"></span>';
}

playBtn.addEventListener("click", function () {
    if (player.paused) {
        player.play();
        playBtn.innerHTML = '<span></span>';
        savedState.isPlaying = true;
    } else {
        player.pause();
        playBtn.innerHTML = '<span class="pause-icon"></span>';
        savedState.isPlaying = false;
    }

    // Save the current state to localStorage
    localStorage.setItem("musicState", JSON.stringify(savedState));
});

player.addEventListener("ended", function () {
    currentSong++;
    if (currentSong >= songList.length) {
        currentSong = 0;
    }
    player.src = songList[currentSong];
    player.play();

    // Update the saved state
    savedState.currentTime = 0;
    savedState.currentSong = currentSong;
    localStorage.setItem("musicState", JSON.stringify(savedState));
});

window.addEventListener("beforeunload", function () {
    // Save the current state to localStorage
    savedState.currentTime = player.currentTime;
    localStorage.setItem("musicState", JSON.stringify(savedState));
});



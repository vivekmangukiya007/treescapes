//  top button start
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity='0.8';
    }
    else if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.opacity = '0.7';
    }
    else if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        mybutton.style.opacity = '0.4';
    }   
    else if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.opacity = '0.2';
    } 
    else {
        mybutton.style.opacity = '0';
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//  top button end


var preloader = document.getElementById("loading");
function myFunction() {
    document.body.style.position = 'relative';
    preloader.style.display = 'none';
};
function openSearch() {
    document.getElementById('closeBtn').style.display = 'block';
}
function closeSearchBar() {
    document.getElementById('closeBtn').style.display = 'none';
}
$(document).ready(function () {
    $('.bannerItem').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        // autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });
    $('.slider-number-two').owlCarousel({
        nav: true,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["&#10229", "&#10230"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    })
    $(".owl-prev").html('<i class="fa-solid fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fa-solid fa-arrow-right"></i>');

    $('.url-hash-silder').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        URLhashListener: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1,
                mouseDrag: false,
                dots: false,
                nav: true
            },
            600: {
                items: 1,
                mouseDrag: false,
                dots: false,
                nav: true
            },
            1000: {
                items: 1,
                nav: true
            }
        }
    })
    $('.store-inner-silder-two').owlCarousel({
        loop: true,
        autoplay: false,
        // autoplayTimeout: 2500,
        // autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1240: {
                items: 4
            }
        }
    })

});

function loadbtn() {
    document.getElementById("hide").style.display = "block";
    document.getElementById("hidebtn").style.display = "none";
}
// custom select bar start
const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

// custom select bar end

//initialising a variable name data

var data = 0;

document.getElementById("counting").innerText = data;

function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;

}
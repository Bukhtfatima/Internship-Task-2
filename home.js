document.addEventListener("DOMContentLoaded", () => {
    console.log('dom fully loaded and parsed');
    // for typewriter animation
    let writertext = document.querySelector('#typewriter');
    let cursor = document.querySelector(".cursor");
    console.log("writing element found");
    let text = ["On your desire domain", "Gives hand on experience", "Get a compitative job"];
    let textindex = 0;
    let charindex = 0;
    let isdelete = false;
    let delay = 200;
    (typewriter = () => {
        let currtext = text[textindex];
        if (isdelete) {
            charindex--;
            delay = 50;
        } else {
            charindex++;
            delay = 100;
        }

        writertext.textContent = currtext.substring(0, charindex);
        if (!isdelete && charindex === currtext.length) {
            delay = 1000;
            isdelete = true;
        } else if (isdelete && charindex === 0) {
            textindex = (textindex + 1) % text.length;
            isdelete = false;
        }
        const textWidth = writertext.offsetWidth;
        cursor.style.left = `${textWidth}px`;
        cursor.style.top = `${writertext.offsetHeight}px`;

        setTimeout(typewriter, delay);
    })();
    // for hidden transition
    let animatedElements = document.querySelectorAll('.animation');
    viewport = () => {
        let elementsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (window.innerWidth > 992) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('view-in');
                    } else {
                        entry.target.classList.remove('view-in');
                    }
                } else {
                    entry.target.classList.remove('view-in');
                }
            });
        }, {
            threshold: 0.2
        },
        )
        animatedElements.forEach((element) => {
            elementsObserver.observe(element);
        });
    }
    setTimeout(viewport, 2000);
    // mobile navigation
    menu = () => {
        let list = document.querySelector('#list');
        list.className === ('navlist') ? list.className += (' mobile-nav') : list.className = ('navlist');
    }
    // s;ick slider
    $(document).ready(function () {
        $('.slick-slider').slick({
            arrows: false,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            dots: false,
            infinite: true,
            speed: 1000,
            // slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
      
    });
});

// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    slidesToScroll: 4,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    grabCursor: true,
    fade: 'true',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        stopOnLastSlide: true,
    },
    freeMode: {
        enabled: true,
        minimumVelocity: 0.02,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    renderBullet: function (index, className) {
        if (index < 3) {
            return '<span class="' + className + '"></span>';
        }
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        }
    },
    speed: 500, 
    effect: 'slide',
});



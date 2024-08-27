countAnimation = (jobDiv, start, end, duration) => {
    let startingTime = null;

    const countNumber = (currentTime) => {
        if (!startingTime) startingTime = currentTime;
        let progressedTime = currentTime - startingTime;
        let countValue = Math.min(Math.floor(progressedTime / duration * (end - start) + start), end);
        jobDiv.textContent = countValue;

        if (countValue < end) {
            requestAnimationFrame(countNumber);
        }
    };

    requestAnimationFrame(countNumber);
};

document.addEventListener('DOMContentLoaded', () => {
    // transition
    let transitionElements = document.querySelectorAll('.animation');

    let viewport = () => {
        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('view-in');
                } else {
                    entry.target.classList.remove('view-in');
                }
            });
        }, {
            threshold: 0.1
        });
    
        transitionElements.forEach((element) => {
            elementObserver.observe(element);
        });
    };
    viewport();
    



    menu = () => {
        let list = document.querySelector('#list');
        list.className === ('navlist') ? list.className += (' mobile-nav') : list.className = ('navlist');
    };
// fixed navbar
    window.onscroll = () => {
        let navbar = document.querySelector('#nav');
        let header = document.querySelector('header');
        let menuicon = document.querySelector('.menuicon');

        if (window.scrollY >= header.offsetHeight / 2) {
            navbar.classList.add("fixed");
            menuicon.classList.add("fixed-menu");
            console.log('navbar fixed applied!');
        } else {
            navbar.classList.remove("fixed");
            menuicon.classList.remove("fixed-menu");
        }
    };

    // Run countAnimation for multiple elements
    let countElement = document.querySelector('#counting');
    countAnimation(countElement, 0, 850000, 6000);
    let domain = document.querySelector('.domain-count');
    countAnimation(domain, 0, 35, 6000);
    let member = document.querySelector('.member-count');
    countAnimation(member, 0, 40, 6000);
    let resume = document.querySelector('.resume-count');
    countAnimation(resume, 0, 30, 6000);
    let company = document.querySelector('.company-count');
   countAnimation(company, 0, 15, 6000);
});

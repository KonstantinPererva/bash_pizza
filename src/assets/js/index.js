function initCarousel(selector, options)
{
    let self = this;
    self.selector = selector;
    self.slider = document.querySelectorAll(self.selector);
    self.options = options;

    if (!self.slider.length) return;

    for (let i = 0; i < self.slider.length; i++)
    {
        let gallery = new Swiper(self.slider[i], self.options);
    }
}

let banners = document.querySelectorAll('.main-slider .swiper-slide');
let nav = document.querySelector('.wr-navigation');



if (banners.length > 1){
    initCarousel(
        '.main-slider',
        {
            loop: true,
            speed: 600,
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.pagination-bullets-box',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                prevEl: '[data-button="main-slider-prev"]',
                nextEl: '[data-button="main-slider-next"]',
            },
            slidesPerView: 1
        }
    );
} else {
    nav.style.display = 'none';
}


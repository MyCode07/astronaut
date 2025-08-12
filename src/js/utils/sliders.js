import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const casinoSlider = document.querySelectorAll('.swiper');

if (casinoSlider.length) {
    casinoSlider.forEach(slider => {
        const section = slider.closest('section')
        const prev = section.querySelector('.prev')
        const next = section.querySelector('.next')
        const pagination = section.querySelector('.pagination')

        if (slider.closest('.adv') && window.innerWidth <= 768) {
            new Swiper(slider, {
                modules: [Navigation],
                slidesPerView: 'auto',
                spaceBetween: 8,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                }
            })
        }

        if (slider.closest('.play')) {
            new Swiper(slider, {
                modules: [Pagination],
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: pagination,
                    clickable: true,
                    renderBullet: (index, className) => {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                },
                on: {
                    slideChange: (swiper) => {
                        console.log(swiper.activeIndex, swiper.slides.length);
                    }
                }
            })
        }
    })
}   
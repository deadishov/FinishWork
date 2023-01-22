import Swiper, { Grid, Navigation } from 'swiper';
export const sliderServices = () => {
    const swiper = new Swiper(".serv__slider.swiper", {
        modules: [Navigation, Grid],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".services__arrow--right",
            prevEl: ".services__arrow--left",
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: false,
                grid: {
                    fill: 'row',
                    rows: 2
                },
            },
            1200: {
                loop: true,
                slidesPerView: 2,
                allowTouchMove: false
            }
        },
    });
}
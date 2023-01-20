import Swiper, { Navigation } from 'swiper';
export const sliderServices = () => {
    const swiper = new Swiper(".serv__slider.swiper", {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
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
                slidesPerView: 2,
            }
        },
    });
}
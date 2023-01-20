import Swiper, { Navigation } from 'swiper';
export const slider = () => {
    const wrapper = document.querySelector('.benefits-wrap')
    const benefitsItems = wrapper.querySelectorAll('.benefits__item')

    benefitsItems.forEach(item => {
        const slide = document.createElement('div')
        slide.classList.add('swiper-slide')
        wrapper.append(slide)
        item.remove()
    })

    const sliders = wrapper.querySelectorAll('.swiper-slide')

    sliders[0].append(benefitsItems[0])
    sliders[1].append(benefitsItems[1])
    sliders[2].append(benefitsItems[2])
    sliders[3].append(benefitsItems[3])
    sliders[4].append(benefitsItems[4])
    sliders[5].append(benefitsItems[5])


    const swiper = new Swiper(".benefits-inner.swiper", {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".benefits__arrow--right",
            prevEl: ".benefits__arrow--left",
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
            }
        },
    });
}


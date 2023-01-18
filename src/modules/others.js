export const others = () => {
    const scrollUpBtn = document.querySelector('.smooth-scroll')

    scrollUpBtn.style.display = 'none'

    window.addEventListener('scroll', () => {
        const scroll = document.documentElement.scrollTop

        if (scroll < 710) {
            scrollUpBtn.style.display = 'none'
        } else {
            scrollUpBtn.style.display = 'block'
        }
    })

    scrollUpBtn.addEventListener('click', () => {
        const scrollLink = document.querySelector('a[href="#header"]');
        const blockID = scrollLink.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    })
};
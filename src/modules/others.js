export const others = () => {
    const scrollUpBtn = document.querySelector('.smooth-scroll')
    const servModal = document.querySelector('.services-modal')
    const sertifModal = document.querySelector('.sertificate-modal')
    const callBackModal = document.querySelector('.header-modal')

    const hideScrollBtn = () => {
        scrollUpBtn.style.display = 'none'
    }

    hideScrollBtn()

    window.addEventListener('scroll', () => {
        const scroll = document.documentElement.scrollTop

        if (scroll < 710 || servModal.style.display === 'block' || sertifModal.style.display === 'flex' || callBackModal.style.display === 'block') {
            hideScrollBtn()
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
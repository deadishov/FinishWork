import { animate } from './helpers'
export const modal = () => {
    const callBack = document.querySelector('.btn.btn-warning.btn-block.fancyboxModal')
    const callBackModal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')
    const sliderBlock = document.querySelector('.row.swiper-wrapper')
    const servModal = document.querySelector('.services-modal')
    const sertificateMini = document.querySelectorAll('.document-inner')
    const sertifModal = document.querySelector('.sertificate-modal')
    const form = document.querySelector('.services-modal form[name=application-form]')
    const formElements = form.querySelectorAll('input')
    const scrollUpBtn = document.querySelector('.smooth-scroll')
    const scroll = document.documentElement.scrollTop

    const addClassOnBody = () => {
        document.body.classList.add('overflow')
    }

    const removeBodyClass = () => {
        document.body.classList.remove('overflow')
    }

    const hideScrollBtn = () => {
        scrollUpBtn.style.display = 'none'
    }

    const showScrollBtn = () => {
        if (scroll > 710) {
            scrollUpBtn.style.display = 'block'
        } else {
            scrollUpBtn.style.display = 'none'
        }
    }

    const openSertifModal = () => {
        addClassOnBody()
        hideScrollBtn()
        sertifModal.style.display = 'flex'
        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                sertifModal.style.height = (progress * 100 + '%')
            }
        })
        overlay.style.display = 'block'
    }

    const closeSertifModal = () => {
        removeBodyClass()
        showScrollBtn()
        sertifModal.style.display = 'none'
        overlay.style.display = 'none'
    }


    const openCallBack = () => {
        addClassOnBody()
        hideScrollBtn()
        callBackModal.style.display = 'block'
        overlay.style.display = 'block'
    }

    const closeCallBack = () => {
        removeBodyClass()
        showScrollBtn()
        callBackModal.style.display = 'none'
        overlay.style.display = 'none'
    }

    const openServModal = () => {
        addClassOnBody()
        hideScrollBtn()
        servModal.style.display = 'block'
        overlay.style.display = 'block'
    }

    const closeServModal = () => {
        removeBodyClass()
        showScrollBtn()
        servModal.style.display = 'none'
        overlay.style.display = 'none'
    }

    document.addEventListener('click', (e) => {
        if (e.target === callBack) {
            openCallBack()
        } if (callBackModal.style.display === 'block') {
            if (e.target.classList.contains('header-modal__close') || e.target === overlay) {
                closeCallBack()
            }
        } if (servModal.style.display === 'block') {
            if (e.target.classList.contains('services-modal__close') || e.target === overlay) {
                closeServModal()
            }
        } if (sertifModal.style.display === 'flex') {
            if (e.target.classList.contains('close-doc') || e.target === overlay) {
                closeSertifModal()
            }
        }
    })

    sliderBlock.addEventListener('click', (e) => {
        if (e.target.closest('.service-button')) {
            const row = e.target.closest('.service-text').textContent.split('\n')
            openServModal()
            if (formElements[3]) {
                formElements[3].value = row.slice(1).shift().trim()
                console.log(formElements[3].value.trim());
            }
        }
    })

    sertificateMini.forEach(doc => {
        doc.addEventListener('click', (e) => {
            e.preventDefault()
            openSertifModal()
        })
    })
};
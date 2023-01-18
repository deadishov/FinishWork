export const modal = () => {
    const callBack = document.querySelector('.btn.btn-warning.btn-block.fancyboxModal')
    const callBackModal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')
    const servModal = document.querySelector('.services-modal')
    const servButtons = document.querySelectorAll('.service-button')

    console.log(servButtons);


    const openCallBack = () => {
        callBackModal.style.display = 'block'
        overlay.style.display = 'block'
    }

    const closeCallBack = () => {
        callBackModal.style.display = 'none'
        overlay.style.display = 'none'
    }

    const openServModal = () => {
        servModal.style.display = 'block'
        overlay.style.display = 'block'
    }

    const closeServModal = () => {
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
        }
    })

    servButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            openServModal()
        })
    })
};
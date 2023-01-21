export const modal = () => {
    const callBack = document.querySelector('.btn.btn-warning.btn-block.fancyboxModal')
    const callBackModal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')
    const servModal = document.querySelector('.services-modal')
    const servButtons = document.querySelectorAll('.service-button')
    const sertificateMini = document.querySelectorAll('.document-inner')
    const sertifModal = document.querySelector('.sertificate-modal')



    const openSertifModal = () => {
        sertifModal.style.display = 'flex'
        overlay.style.display = 'block'
    }

    const closeSertifModal = () => {
        sertifModal.style.display = 'none'
        overlay.style.display = 'none'
    }


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
        } if (sertifModal.style.display === 'flex') {
            if (e.target.classList.contains('close-doc') || e.target === overlay) {
                closeSertifModal()
            }
        }
    })

    servButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            openServModal()
        })
    })

    sertificateMini.forEach(doc => {
        doc.addEventListener('click', (e) => {
            e.preventDefault()
            openSertifModal()
        })
    })
};
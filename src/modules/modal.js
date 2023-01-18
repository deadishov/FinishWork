export const modal = () => {
    const callBack = document.querySelector('.btn.btn-warning.btn-block.fancyboxModal')
    const callBackModal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')

    // callBack.addEventListener('click', () => {
    //     callBackModal.style.display = 'block'
    //     overlay.style.display = 'block'
    // })
    const openCallBack = () => {
        callBackModal.style.display = 'block'
        overlay.style.display = 'block'
    }

    const closeCallBack = () => {
        callBackModal.style.display = 'none'
        overlay.style.display = 'none'
    }

    document.addEventListener('click', (e) => {
        if (e.target === callBack) {
            openCallBack()
        }
        if (callBackModal.style.display === 'block') {
            if (e.target.classList.contains('header-modal__close') || e.target === overlay) {
                closeCallBack()
            }
        }
    })
};
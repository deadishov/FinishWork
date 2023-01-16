const modal = () => {
    const callBack = document.querySelector('.btn.btn-warning.btn-block.fancyboxModal')
    const callBackModal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')

    callBack.addEventListener('click', () => {
        callBackModal.style.display = 'block'
        overlay.style.display = 'block'
    })

    callBackModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('header-modal__close')) {
            callBackModal.style.display = 'none'
            overlay.style.display = 'none'
        }
    })
};

export default modal;
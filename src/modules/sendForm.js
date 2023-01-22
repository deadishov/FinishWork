import { animate } from "./helpers"
export const sendForm = ({ formName, calcData = [], helpBlock }) => {
    const form = document.querySelector(formName)
    const formElements = form.querySelectorAll('input')
    const statusBlock = document.querySelector(helpBlock)
    const successText = 'Спасибо! Отправка данных прошла успешно!'
    const errorText = 'Ошибка!'

    const defaultStatus = () => {
        statusBlock.textContent = 'Мы гарантируем 100% конфиденциальность. Ваша информация не будет распространяться.'
    }

    form.addEventListener('input', (e) => {
        if (e.target === formElements[0]) {
            if (e.target.classList.contains('error')) {
                e.target.classList.toggle('error')
            }
            e.target.value = e.target.value.replace(/[^a-zа-я-]/gi, '')
        } if (e.target === formElements[1]) {
            if (e.target.classList.contains('error')) {
                e.target.classList.toggle('error')
            }
            e.target.value = e.target.value.replace(/[^\d+]/, '').substr(0, 11).trim()
        }
    })



    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        statusBlock.style.textAlign = 'center'
        const formData = new FormData(form)
        const formBody = {}

        if (calcData) {
            calcData.forEach(elem => {
                if (document.querySelector('#calc')) {
                    const calcTotal = document.getElementById(elem.id)

                    if (calcTotal.value) {
                        formBody[elem.id] = calcTotal.value + ' RUB'
                    }
                }
            })
        }

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        if (formElements[0].value.length > 1 && formElements[1].value.length > 5) {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    statusBlock.textContent = `Загрузка ${Math.floor(progress * 100)}%`
                }
            })
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText
                })
                .then(data => {
                    setTimeout(defaultStatus, 3000)
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
            if (formElements[0].classList.contains('error')) {
                formElements[0].classList.toggle('error')
            } if (formElements[1].classList.contains('error')) {
                formElements[1].classList.toggle('error')
            }
            formElements[0].value = ''
            formElements[1].value = ''
        } else {
            if (formElements[0].value.length < 2) {
                statusBlock.textContent = errorText
                formElements[0].classList.add('error')
            } if (formElements[1].value.length < 6) {
                statusBlock.textContent = errorText
                formElements[1].classList.add('error')
            } if (formElements[0].value.length > 1) {
                statusBlock.textContent = errorText
                if (formElements[0].classList.contains('error')) {
                    formElements[0].classList.toggle('error')
                }
            } if (formElements[1].value.length > 5) {
                statusBlock.textContent = errorText
                if (formElements[1].classList.contains('error')) {
                    formElements[1].classList.toggle('error')
                }
            }
        }
    })
}
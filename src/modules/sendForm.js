export const sendForm = ({ formName, calcData = [] }) => {
    const form = document.querySelector(formName)
    const formElements = form.querySelectorAll('input')

    console.log(form);

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
            sendData(formBody)
            if (formElements[0].classList.contains('error')) {
                formElements[0].classList.toggle('error')
            } if (formElements[1].classList.contains('error')) {
                formElements[1].classList.toggle('error')
            }
            formElements.forEach(input => {
                input.value = ''
            })
        } else {
            if (formElements[0].value.length < 2) {
                formElements[0].classList.add('error')
            } if (formElements[1].value.length < 6) {
                formElements[1].classList.add('error')
            } if (formElements[0].value.length > 1) {
                if (formElements[0].classList.contains('error')) {
                    formElements[0].classList.toggle('error')
                }
            } if (formElements[1].value.length > 5) {
                if (formElements[1].classList.contains('error')) {
                    formElements[1].classList.toggle('error')
                }
            }
        }
    })
}
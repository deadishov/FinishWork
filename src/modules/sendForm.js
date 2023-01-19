export const sendForm = ({ formName, calcData = [] }) => {
    const form = document.querySelector(formName)
    const formElements = form.querySelectorAll('input')

    form.addEventListener('input', (e) => {
        if (e.target === formElements[0]) {
            e.target.value = e.target.value.replace(/[^a-zа-я-]/gi, '')
        } if (e.target === formElements[1]) {
            e.target.value = e.target.value.replace(/[^\d+]/, '').substr(0, 16).trim()
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

        calcData.forEach(elem => {
            if (document.querySelector('#calc')) {
                const calcTotal = document.getElementById(elem.id)

                if (calcTotal.value) {
                    formBody[elem.id] = calcTotal.value + ' RUB'
                }
            }
        })

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        if (formElements[0].value && formElements[1].value) {
            sendData(formBody).then(data => {
                console.log(data);
            })
        } else {
            alert('Заполните оба поля формы!')
        }

    })
}
export const sendForm = ({ formName, calcData = [] }) => {
    const form = document.querySelector(formName)


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
                console.log(elem);
            }
        })

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        console.log('submit');

        sendData(formBody).then(data => {
            console.log(data);
        })
    })
}
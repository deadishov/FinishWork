import { animate } from "./helpers"
export const calc = () => {
    if (document.querySelector('#calc')) {
        const calc = document.querySelector('#calc')
        const selectType = calc.querySelector('#calc-type')
        const selectMaterial = calc.querySelector('#calc-type-material')
        const calcArea = calc.querySelector('#calc-input')


        const countCalc = () => {
            const typeValue = selectType.options[selectType.selectedIndex].value
            const calcTotal = calc.querySelector('#calc-total')

            let result = 0
            let materialValue = 1

            if (selectMaterial.selectedIndex === 2) {
                materialValue = 2
            }

            if (typeValue && calcArea.value) {
                result = typeValue * materialValue * calcArea.value * 100
                animate({
                    duration: 100,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        calcTotal.value = (progress * result).toFixed(2)
                    }
                })
            } else {
                calcTotal.value = ''
            }
        }

        calc.addEventListener('input', (e) => {
            countCalc()
            if (e.target === calcArea) {
                e.target.value = e.target.value.replace(/[^\d]/gi, '')
            }
        })

        calc.addEventListener('keyup', (e) => {
            if (e.target === calcArea) {
                countCalc()
            }
        })

    } else {
        return
    }
}
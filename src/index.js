
import { modal } from './modules/modal';
import { others } from './modules/others';
import { slider } from './modules/slider'
import { calc } from './modules/calc'
import { timer } from './modules/timer'
import { sendForm } from './modules/sendForm'
import { sliderServices } from './modules/sliderServices'


modal();
others();
slider();
calc()
timer({
    deadline: '22 january 2023 21:00',
    days: '.count_1 span',
    hours: '.count_2 span',
    minutes: '.count_3 span',
    seconds: '.count_4 span',
    timerIndex: 0
})
timer({
    deadline: '22 january 2023 21:00',
    days: '.count_1 span',
    hours: '.count_2 span',
    minutes: '.count_3 span',
    seconds: '.count_4 span',
    timerIndex: 1
})
sendForm({
    formName: 'form[name=action-form]',
    calcData: [
        {
            id: 'calc-total'
        }
    ]
})
sendForm({
    formName: 'form[name=action-form2]',
    calcData: [
        {
            id: 'calc-total'
        }
    ]
})
sliderServices()


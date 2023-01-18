
import { modal } from './modules/modal';
import { others } from './modules/others';
import { slider } from './modules/slider'
import { calc } from './modules/calc'
import { timer } from './modules/timer'


modal();
others();
slider({
    slider: ".benefits-wrap",
    slide: ".benefits__item",
})
calc()
timer({
    deadline: '22 january 2023 21:00',
    days: '.count_1 span',
    hours: '.count_2 span',
    minutes: '.count_3 span',
    seconds: '.count_4 span'
})

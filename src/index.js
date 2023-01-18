

import { modal } from './modules/modal';
import { others } from './modules/others';
import { slider } from './modules/slider'
import { calc } from './modules/calc'


modal();
others();
slider({
    slider: ".benefits-wrap",
    slide: ".benefits__item",
})
calc()

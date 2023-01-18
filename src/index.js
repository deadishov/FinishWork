

import modal from './modules/modal';
import others from './modules/others';
import { slider } from './modules/slider'


modal();
others();
slider({
    slider: ".benefits-wrap",
    slide: ".benefits__item",
})

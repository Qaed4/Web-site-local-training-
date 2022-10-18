// @ts-check

import half from './src/half.js';

export default half;

document.querySelector('.b1').addEventListener('click', () => {
    let data = document.querySelector('.i1').nodeValue;
    document.querySelector('.out1').innerHTML  = data;
})
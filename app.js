const _= require('lodash');
let mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// importujemy biblioteke lodash nastepnie tworzymy stałą mail regex do filtrowania adresów mail


const getMax = array =>{
    return _.max(array);
}
 
const getMin = array =>{
    return _.min(array);
}
console.log(getMax([1,2,3,4]));
console.log(getMin([1,2,3]));
 

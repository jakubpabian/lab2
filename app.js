const _ = require('lodash');

const array =[1,2,3,4,5];

function getAvg(array){
    return _.mean(array);
}

console.log(getAvg(array));



import numeral from 'numeral';

const courseVal = numeral(1000).format('$0,0.00');
console.log(`I am paying ${courseVal} for this course!`);
'use strict';

const times = [56, 9, 45, 28, 35];
console.log (times.length);

const mediaTimes = times.reduce ((acc, number) => acc+number / times.length, 0);

console.log (mediaTimes);
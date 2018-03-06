const _ = require('lodash')
const quickSort = require('./quick_sort')
const bubbleSort = require('./bubble_sort.js')
const mergeSort = require('./merge_sort')

let list = _.shuffle(_.range(100))

console.log(mergeSort(list))

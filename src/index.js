const _ = require('lodash')
const quickSort = require('./quick_sort')
const bubbleSort = require('./bubble_sort.js')
const mergeSort = require('./merge_sort')
const isPalindrome = require('./palindrome_check.js')

let list = _.shuffle(_.range(10000))
// console.log(mergeSort(list))

const strA = _.range(2)
const strB = _.clone(strA).reverse()
const isP = Math.random() <= 0.5
console.log(isP, isPalindrome(strA.join('') + (isP ? strB.join('') : '')))

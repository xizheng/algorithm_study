// 归并排序

const mergeSort = (array=[]) => {
	if (array.length <= 1) {
		return array
	}

	const midIndex = Math.ceil((array.length) / 2)
	let arrayA = array.slice(0, midIndex)
	let arrayB = array.slice(midIndex)
	arrayA = mergeSort(arrayA)
	arrayB = mergeSort(arrayB)

	let res = []
	while (arrayA.length && arrayB.length) {
		if (arrayA[0] < arrayB[0]) {
			res.push(arrayA.shift())
		} else {
			res.push(arrayB.shift())
		}
	}
	res = res.concat(arrayA).concat(arrayB)
	return res
}

module.exports = mergeSort

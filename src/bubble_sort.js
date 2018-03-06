// 冒泡排序

const bubbleSort = (array) => {
	let j = array.length
	while (--j > 0) {
		for (let i=0; i<j; i++) {
			if (array[i] > array[i+1]) {
				[array[i], array[i+1]] = [array[i+1], array[i]]
			}
		}
	}
	return array
}

module.exports = bubbleSort

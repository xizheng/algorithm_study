// 快速排序

const quickSort = (list) => {
	if (list.length <= 1) {
		return list
	}
	let less = []
	let equal = []
	let more = []
	let num = list[0]
	for (let i in list) {
		let item = list[i]
		if (item < num) {
			less.push(item)
		} else if (item > num) {
			more.push(item)
		} else {
			equal.push(item)
		}
	}
	return quickSort(less).concat(equal).concat(quickSort((more)))
}

module.exports = quickSort

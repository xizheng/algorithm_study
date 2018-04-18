// 题目描述
// 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 优解
// 每次将二维数组矩阵的中最右上角的数字与要查找的数字比较，基于二维数组从左到右从上到下递增，那么当最右上角的数字大于目标数字就可以去掉该列，当最右边的数字小于目标数字的时候就去掉该行，如此遍历查找

function Find(target, array)
{
	array = array || []
	for (var i in array) {
		var list = array[i]
		var len = list.length
		if (target >= list[0] && target <= list[len - 1]) {
			if (list.includes(target)) {
				return true
			}
		}
	}
	return false
}

function betterFind (target, array) {
	var width = array[0].length
	var height = array.length
	for (var y=0, x=width-1;y<height && x>=0;) {
		if (target === array[y][x]) {
			return true
		} else if (target < array[y][x]) {
			x--
			continue
		} else {
			y++
			continue
		}
	}
	return false
}

module.exports = {
  Find : betterFind
};
// 输入一个链表，从尾到头打印链表每个节点的值。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
	var list = []
	var item = head
	while (item) {
		list.unshift(item.val)
		item = item.next
	}
	return list
}
module.exports = {
	printListFromTailToHead: printListFromTailToHead
};
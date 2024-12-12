class Node{
	constructor(val){
		this.value = val
		this.next = null
	}
}

class SinglyLinkedList{
	
	constructor(){
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(value){
		const newNode = new Node(value);
		if(!this.head){
			this.head = newNode
			this.tail = this.head
		}else{
			this.tail.next = newNode;
			this.tail = newNode
		}
		this.length++;
		return this
	}

	traverse(){
		var current = this.head
		let head = this.head
		let lastNodeBeforeTail;
		while (current){
			lastNodeBeforeTail = current
			current = current.next
		}
		return { head, lastNodeBeforeTail, tail: current }
	}

	pop(){
		console.log("poping: ", this.tail);
		this.tail = null;
		const {lastNodeBeforeTail} = this.traverse();
		this.tail = lastNodeBeforeTail;
		console.log(this.tail);
	}
}

const list = new SinglyLinkedList()

list.push("1")
list.push("2")
list.push("4")
console.log(list)

list.traverse()
list.pop()

class Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}


class LinkedList {
    constructor(){
        this.head = null;
    }
    addFront(val){
        let new_node = new Node(val);
        if (!this.head){
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    length(){
        let count = 0;
        let runner = this.head;
        while (runner !== null){
            count++;
            runner = runner.next;
        }
        return count
    }

    removeFront(){
        if (!this.head){
            return;
        }
        this.head = this.head.next
    }

    front(){
        if (!this.head){
            return;
        }
        let val = this.head.data
        return val;
    }

    contains(val){
        let runner = this.head;
        while(runner !== null){
            if(runner.data === val){
                return true;
            }
            else {
                runner = runner.next;
            }
        }
    }
}

let sll1 = new LinkedList();
sll1.addFront(8).addFront(10).addFront(5);

sll1.removeFront();

console.log(sll1.front());

console.log(sll1);
console.log(sll1.length())
console.log(sll1.contains(10))
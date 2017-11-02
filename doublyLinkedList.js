function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}

function DLL() {
    this.data = null;
    this.size = 0;
}

DLL.prototype.insert = function (value, pos) {

    if(value == undefined || value == null) return 'invalid value';

    var node = new Node(value);
    var currentNode = this.data;

    if (this.size > 0) {

        if (pos) {

            if(pos <=0 || pos > this.size) return 'invalid range'

            for (var i = 0; i < pos - 1; i++) {
                currentNode = currentNode.next;
            }
            
            var temp = currentNode.next;
            node.prev = currentNode;
            currentNode.next = node;
            currentNode.next.next = temp;

        } else {
            for (var i = 0; i < this.size - 1; i++) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
            node.prev = currentNode;
        }

    } else {
        this.data = node;
    }

    this.size++;
}


DLL.prototype.display = function () {
    var currentNode = this.data;
    var values = [];
    for (var i = 0; i < this.size; i++) {
        values.push(currentNode.value)
        currentNode = currentNode.next;
    }
    console.log('Display : ' , values)
    return values;
}


DLL.prototype.delete = function(pos){

    if(pos < 0 || pos > this.size) return RangeError("invalid range")
    var currentNode = this.data;
    for(i=0; i < pos-1;i++){
       currentNode  = currentNode.next
    }

    var nextNode = currentNode.next.next;
     nextNode.prev = currentNode;
     currentNode.next = nextNode;

     this.size--;
}


var assert = require('assert');
var dll = new DLL();

assert.equal(dll.insert(), 'invalid value');
assert.equal(dll.insert(null), 'invalid value');
assert.equal(dll.insert(undefined), 'invalid value');

dll.insert(1);
dll.insert(2);
dll.insert(1.5,1)
dll.insert(3);
dll.insert(4);
dll.insert(5);
dll.display()
dll.delete(1)
dll.delete(13)
dll.display()
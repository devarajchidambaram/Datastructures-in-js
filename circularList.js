/**
 * To create a Single Node
 * @param {Any Type} value 
 */
function Node(value) {
    this.value = value
    this.next = null
}

/**
 * To store the data
 */
function LinkedList() {
    this.data = null
    this.size = 0
}


/**
 * Insert the an element to the list
 * @param {Any} value 
 * @param {Number} pos in what postion value to store
 */
LinkedList.prototype.insert = function (value, pos) {

    var node = new Node(value);
    var currentNode = this.data;

    if (value === null || value === undefined) return;


    if (this.size > 0) {
        //If pos is undefined then we can make insert the element in last pos
        if (pos >= 0) {

            if (pos > this.size || pos <= 0) {
                console.log('Invalid position, insert between 0 to ', this.size)
                return;
            }

            for (var i = 0; i < pos - 1 && currentNode.next !== null; i++) {
                currentNode = currentNode.next;
            }

            var nextNode = currentNode.next;
            currentNode.next = node;
            currentNode.next.next = nextNode;

        } else {

            for (var i = 0; i <= this.size && currentNode.next !== null; i++) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
            node.next = this.data;

            console.log("This node" , this.data)
        }

    } else {
        this.data = node;
    }


    this.size++;
}

/**
 * To delete elemet from list
 * @param {Number} pos which is index postion to delete
 */
LinkedList.prototype.delete = function (pos) {
    var currentNode = this.data;

    if (pos > this.size || pos < 0) return console.log('invalid range')

    for (var i = 0; i < pos - 1; i++) {
        currentNode = currentNode.next;
    }

    console.log(currentNode)

    var nextNode = currentNode.next
    currentNode.next = nextNode.next;

    this.size--;
}


LinkedList.prototype.display = function () {

    console.log("Linked list elements ==>")
    var currentNode = this.data;

    for (var i = 0; i < this.size; i++) {
        console.log(currentNode.value)
        currentNode = currentNode.next;
    }

    console.log("This node =====" , this.data)
}


/**
 * Recursive Linked list
 */
LinkedList.prototype.reverse = function () {
    var currentNode = this.data;
    var noNodes = this.size;
    console.log("reverse list ==>")

    var size = 0

    function rev(currentNode) {

        if (currentNode == null || noNodes == size) {
            return;
        }

        size++;
        rev(currentNode.next)

        console.log(currentNode.value)
    }

    rev(currentNode)

}

/**
 * Sorting a LinkedList
 */
LinkedList.prototype.sort = function () {
    var currentNode = this.data;
    var temp;
    var nextNode;

    for (; currentNode != null; currentNode = currentNode.next) {
        for (nextNode = currentNode.next; nextNode !== null; nextNode = nextNode.next) {
            if (currentNode.value > nextNode.value) {
                temp = nextNode.value;
                nextNode.value = currentNode.value;
                currentNode.value = temp;
            }
        }
    }

    this.display()
}


var ll = new LinkedList();

ll.insert(0)
ll.insert(1)
ll.reverse()
ll.insert(0.5, 1)
ll.display()
// ll.insert(2)
// ll.insert(4)
// ll.insert(5)
// ll.insert(3)
// ll.insert(3.5, 3)
// ll.delete(500)
// ll.delete(500)
// ll.delete(-1)
// ll.display()

// ll.reverse();

// ll.sort();

// ll.display()
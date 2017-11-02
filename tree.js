function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

function Tree() {
    this.data = {};
    this.size = 0;
}

Tree.prototype.add = function (input) {
    var node = new Node(input);

    if (this.size > 0) {

        var currentNode = this.data;

        while (true) {

            if (currentNode.value > input) {

                if (currentNode.left === null) {
                    currentNode.left = node;
                    break;
                }

                currentNode = currentNode.left;

            } else {

                if (currentNode.right === null) {
                    currentNode.right = node;
                    break;
                }
                currentNode = currentNode.right;
            }

            //console.log('innnnnn', currentNode)

            // if(currentNode === null){
            //     currentNode = node;
            //     return;
            // }

        }

    } else {
        this.data = node;
    }


    this.size++;
    return true;
}

var tree = new Tree();

tree.add(7)
tree.add(3)
tree.add(2)
tree.add(8)

console.log('tree', tree)
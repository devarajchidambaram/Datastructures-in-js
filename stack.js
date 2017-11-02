
/**
 * Stack data structure 
 * LIFO - last in first out
 */
function Stack() {
    this.data = []
    this.MAX_SIZE = 5;
}

Stack.prototype.push = function (value) {
    if (value === null || value === undefined) return new TypeError('Invalid type of  data')

    if (this.getSize() < this.MAX_SIZE) {
        this.data.push(value)
    }else{
        return new Error("Stack overflow Error!!!")
    }
}

Stack.prototype.pop = function () {

    if (this.getSize() > 0) {
        this.data.pop();
        return;
    }

    return new Error('Stack underflow error')
}

Stack.prototype.peek = function () {

    if (this.getSize() > 0) {
        return this.data[this.data.length-1]
    }

    return new Error('Stack is empty');
}

Stack.prototype.getSize = function () {
    return this.data.length;
}

module.exports = Stack;

// var stack = new Stack();
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// console.log(stack.push(1))
// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
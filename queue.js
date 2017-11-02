/**
 * Queue is datastructure used for the FIFO
 */
function Queue(){
    this.data = [],
    this.size = 0;
    this.MAX_SIZE = 5;
}

Queue.prototype.enqueue = function(value){
    
    if( this.size < this.MAX_SIZE){
        this.data.push(value)
        this.size++;
        return true; 
    }else{
        return new Error('Queue size is exceeded')
    }
}

Queue.prototype.dequeue = function(){
    if(this.size > 0){
        this.data.splice(0,1);
        this.size--;
        return true;
    }else{
        return new Error('Queue is empty')
    }
}

Queue.prototype.peek = function(){
    if(this.size > 0){
        return this.data[0];
    }else{
        return 'Queue is empty';
    }
}


var q = new Queue();
console.log('q', q.enqueue(1))
console.log('q', q.enqueue(2))
console.log('q', q.enqueue(3))
console.log('q', q.enqueue(4))
console.log('q', q.enqueue(5))
console.log('q', q.enqueue(6))
console.log('q', q.peek())
console.log('dq', q.dequeue())
console.log('dq', q.dequeue())
console.log('dq', q.dequeue())
console.log('dq', q.dequeue())
console.log('dq', q.dequeue())
console.log('q', q.peek())

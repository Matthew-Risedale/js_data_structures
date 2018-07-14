class Queue {
  constructor(capacity) {
    this._capacity = capacity;
    this._storage = {};
    this._head = 0;
    this._tail = 0;
  }
  
  get size() {
    return this._tail - this._head;
  }

  enqueue(data) {
    if(!data) {
      return 'please add some data'
    }
    else if(this.size < this._capacity) {
      this._storage[this._tail++] = data;
      return this.size;
    }
    return 'queue size exceeded'
  }
 
  dequeue() {
    if(this.size) {
      let value = this._storage[this._head]
      delete this._storage[this._head++]
      return value
    }
    return 'queue is empty'
  }
  
  peek() {
    return this.size ? this._storage[this._head] : 'queue is empty'
  }

  clear() {
    this._storage = {};
    this._head = 0;
    this._tail = 0;
  }
}
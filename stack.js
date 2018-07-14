export default class Stack {
  constructor(capacity) {
    this._capacity = capacity || 40;
    this._storage = {};
    this._size = 0;
  }

  push(data) {
    if(!data) {
       return 'please push some data';
    }
    else if(this._size < this._capacity) {
      this._storage[this._size++] = data;
      return this._size;
    }
    return 'stack is already full';
  }
  
  pop() {
    if (this._size > 0) {
      let value = this._storage[--this._size];
      delete this._storage[this._size]
      return value;
    }
    return 'nothig to pop. Stack is empty'
  }
  
  peek() {
    return this._size ? this._storage[this._size - 1] : 'stack is empty';
  }
  
  clear() {
    this._storage = {};
    this._size = 0;
  }
  
  size() {
    return this._size
  }
}

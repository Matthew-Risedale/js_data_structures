# Data Structures

## Stacks

The Last item added Into the stack will be the First one taken Out of the stack. (LIFO)

As example - call stack

Methods: 
  push(value) //adds value to the front, returns size of stack
  pop() //removes vlaue from the front, returns size of stack
  size() //returns size of stack
  peek() //returns top element
  clear() //removes all elements

## Queues

The First item added Into the queue will be the First one taken Out of the queue. (FIFO)

Methods: 
  enqueue(value) //adds value at the end, returns size of stack
  dequeue() //removes vlaue from the front, returns size of stack
  size() //returns size of queue
  peek() //returns front element
  clear() //removes all elements

# Algorithms

## Complexity
  in worth case scenario
  - space complexity (how many memory it used?)
  - time complexity (how many comparison are made? how many swaps are made?)

From fast to slow: 
  - O(1) constant (array.push())
  - O(log n) logarithmic  (binary tree)
  - O(n) linear (array.unshift())
  - O(n log n)  (quick search)
  - O(n^2) quadratic
  - O(k^n) expotential 
 

 ## Bubble sort
  Take two nearest elements, compare them, swap if left bigger than right one and go to next two till the end of the array.
  Go over array while there is no swap in iteration.

  Time complexity: 
    - O(n^2) comporison
    - O(n^2) swaps
  
 ## Selection sort

  Select the largest element and swap it to the end

  Time complexity: 
    - O(n^2) comporison
    - O(n) swaps

 ## Insertion sort
  Select the first element in an array, considers that our sorted list of size 1. As each new element is added, insert the new element in correct order by swapping in place.


 ## Quick sort 

 ## Merge sort

  O(n log n)




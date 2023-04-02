
//  Q1

// function fibonacci1(n) {
//     let seqNum = [0, 1];

//     for (let R = 2; R < n; R++) {
//         seqNum[R] = seqNum[R - 1] + seqNum[R - 2];
//     }

//     return seqNum;
// }

// console.log(fibonacci1(10));


//Q1 another answer
// let x = 0;
// let y = 1;
// let z1;
// let arr2 = [0, 1];
// function Fibonacci(z) {
//     if (z === 377) return
//     arr2.push(z);

//     z1 = x + y;
//     x = y;
//     y = z1;
//     Fibonacci(x + y);

//     return;
// }

// Fibonacci(1)
// console.log(`Fibonacci = ${arr2} <br>`);


////////////////////////////










// Q2
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumArr(arrn) {
//     if (arrn.length === 0) {
//         return 0;
//     }
//     else {
//         return arrn[0] + sumArr(arrn.slice(1));
//     }
// }

// console.log(sumArr(arr1));






// // anothr way Q2
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// function arrSum(arr, index) {
//     if (index >= arr.length) {
//         return;
//     }
//     sum += arr[index];
//     arrSum(arr, index + 1);
// }

// arrSum(arr, 0);
// console.log(sum);







//Q3 
// function rString(str) {
//     if (str === '') {
//         return '';
//     } else {
//         return rString(str.substr(1)) + str.charAt(0);
//     }
// }

// console.log(rString('Razan Aboushi'));



//Q3 another answer


// let stri = "Razan";
// let news = "";
// let r = stri.length - 1
// function revers(str) {
//     if (r < 0) {
//         return 1
//     }
//     news += `${stri[r--]}`
//     revers(stri)
//     return news;
// }

// console.log(revers(stri));

////////////////////////////////////////






// //Q4
// function pTriangle(size) {
//     if (size === 0) {
//         return;
//     } else {
//         pTriangle(size - 1);
//         let line = '';
//         for (let i = 0; i < size; i++) {
//             line += '*';
//         }
//         console.log(line);
//     }
// }

// pTriangle(7);














// Q1 : Implement a function that returns the minimum element in a stack in constant time complexity.

//All of these operations take constant time complexity, regardless of the size of the stack, 
//since we're only ever pushing or popping one element from each stack.

// Create a class MinStack to contain the constructor
class MinStack 
{
  constructor() // constructor that have two parameters
  {
    this.stack = [];
    this.minStack = [];
  }


  push(value1) //pass the value1 as an argument to push() method
   {
    this.stack.push(value1); // push the value of value1 into stack

    if (this.minStack.length === 0 || value1 <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value1);
    }
  }


  pop()
   {
    const value1 = this.stack.pop();
    if (value1 === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop(); //The pop method removes the top element from the stack and, if it's the current minimum, also removes it from minStack.
    }
    return value1;
  }


  getMin()        //The getMin method returns the top element of minStack
   { 
    return this.minStack[this.minStack.length - 1];  
  }
}










// Q2 : Given a queue of integers, reverse the order of the elements in the queue.

function reverseQueue(queue1)
 {

  let stack = [];

  while (queue1.length > 0)
   {
    stack.push(queue1.shift());
  }

  while (stack.length > 0) 
  {
    queue1.push(stack.pop());
  }

  return queue1;
}

let queue1 = [1, 2, 3, 4, 5 , 6 , 7, 8, 9, 10];
console.log(reverseQueue(queue1)); // The Output will be: [10,9,8,7,6,5,4,3,2,1];












// Q3 : Implement a Queue using 2 stacks s1 and s2.

class Queue
 {

  constructor() 
  {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(Rvalue)        // the enqueue method adds an element to s1. 
   {
    this.s1.push(Rvalue);    
  }


  dequeue()            // The dequeue method first checks if s2 is empty
  {
    if (this.s2.length === 0)    
    {

      while (this.s1.length > 0)
       {
        this.s2.push(this.s1.pop());  //it transfers elements from s1 to s2 until s1 is empty
      }

    }

    if (this.s2.length === 0) 
    {
      return undefined; // Queue is empty
    }
    return this.s2.pop();   //Then it pops and returns the top element of s2
  }


  peek()
   {
    if (this.s2.length === 0) 
    {
      while (this.s1.length > 0)
       {
        this.s2.push(this.s1.pop());
      }
    }
    if (this.s2.length === 0) 
    {
      return undefined; // Queue is empty
    }

    return this.s2[this.s2.length - 1];
  }

  isEmpty()    //The isEmpty method returns true if both stacks are empty
   {
    return this.s1.length === 0 && this.s2.length === 0;
  }

  size()  //The size method returns the total number of elements in the queue.
   {
    return this.s1.length + this.s2.length;
  }

}



const qr = new Queue();
qr.enqueue(1);
qr.enqueue(2);
qr.enqueue(3);
console.log(qr.peek()); // Output will be: 1
console.log(qr.dequeue()); // Output will be: 1
console.log(qr.dequeue()); // Output will be: 2
console.log(qr.size()); // Output will be: 1
console.log(qr.isEmpty()); // Output will be: false
console.log(qr.dequeue()); // Output will be: 3
console.log(qr.isEmpty()); // Output will be: true
console.log(qr.dequeue()); // Output will be: undefined





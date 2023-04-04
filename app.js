
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

let stack = [];
let minStack = [];

function push(value1)  //pass the value as an argument to push() function
{
  stack.push(value1); // push the value of value into stack
  
  if (minStack.length === 0 || value1 <= minStack[minStack.length - 1])
   {
    minStack.push(value1);
  }
}

function getMin()  //The getMin method returns the top element of minStack
{
  return minStack[minStack.length - 1];
}

push(10);
push(20);
push(30);
push(40);
push(50);
console.log(getMin());











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


let s1 = [];
let s2 = [];

function enqueue(value)   // the enqueue function with value property.
 {
  s1.push(value);
}

function dequeue() 
{
  if (s2.length === 0) 
  {
    while (s1.length > 0) 
    {
      s2.push(s1.pop());  //it transfers elements from s1 to s2 until s1 is empty
    }
  }
  
  if (s2.length === 0) {
    return undefined; // Queue is empty
  }
  
  return s2.pop(); //Then it pops and returns the top element of s2
}

function peek() 
{
  if (s2.length === 0)
   {
    while (s1.length > 0)
     {
      s2.push(s1.pop());
    }
  }
  
  if (s2.length === 0)
   {
    return undefined; // Queue is empty
  }
  
  return s2[s2.length - 1];
}

function isEmpty() //The isEmpty method returns true if both stacks are empty
 {
  return s1.length === 0 && s2.length === 0;
}

function size() //The size method returns the total number of elements in the queue.
{
  return s1.length + s2.length;
}

enqueue(1);
enqueue(2);
enqueue(3);
console.log(peek()); // Output will be: 1
console.log(dequeue()); // Output will be: 1
console.log(dequeue()); // Output will be: 2
console.log(size()); // Output will be: 1
console.log(isEmpty()); // Output will be: false
console.log(dequeue()); // Output will be: 3
console.log(isEmpty()); // Output will be: true















//////////////////////////////////////////////////////

// Q4 : Create a function that takes a LinkedList and deletes the middle node in it and returns it

class LinkedList 
{
  constructor() 
  {
    this.head = null;
  }


  Insert(value12) 
  {
    let Node1 = { value12, next: null };

    if (!this.head)
     {
      this.head = Node1;
    }


     else
      {
      let currentNode = this.head;

      while (currentNode.next) 
      {
        currentNode = currentNode.next;
      }

      currentNode.next = Node1;
    }

  }



  deleteMiddleNode()
   {
    let nextPointer1 = this.head;
    let nextPointer2 = this.head;
    let previousNode = null;

    while (nextPointer2 && nextPointer2.next)
     {
      previousNode = nextPointer1;
      nextPointer1 = nextPointer1.next;
      nextPointer2 = nextPointer2.next.next;
    }

    if (previousNode)
     {
      previousNode.next = nextPointer1.next;
    } 
    else
     {
      this.head = nextPointer1.next;
    }


    return this;
  }




  reversFunc() 
  {
    let previousNode = null;
    let currentNode = this.head;

    while (currentNode)
     {
      let nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.head = previousNode;
    return this; // return previousNode
  }

  }









let LinkedList1 = new LinkedList();

LinkedList1.Insert(1);
LinkedList1.Insert(2);
LinkedList1.Insert(3);
LinkedList1.Insert(4);
LinkedList1.Insert(5);
LinkedList1.Insert(6);
LinkedList1.Insert(7);

console.log(LinkedList1.deleteMiddleNode()); 







//  Q5 : Create a function that takes a LinkedList and reverses it



let LinkedList2=new LinkedList();

LinkedList2.Insert(10);
LinkedList2.Insert(20);
LinkedList2.Insert(30);
LinkedList2.Insert(40);
LinkedList2.Insert(50);
LinkedList2.Insert(60);
LinkedList2.Insert(70);

console.log(LinkedList2.reversFunc());









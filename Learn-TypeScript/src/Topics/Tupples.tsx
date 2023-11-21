import React from 'react'

function Tupples() {
  // Tupple 
  // is ka matlab ha k jo jo hmne array me value deni ha usi hesaab se types aray ki tara bhri bracket me likh do or array bana do 
  // For Example ...
  const ourTupple : [number , string , boolean] = [1 , 'Zaheer' , true]
  console.log(ourTupple)
  // jab hm tupple me di gai type k according value add na karay 
  //sconst tuple : [string , number] = [134] // errror araha ha string ki string or number ki jaga number hi aye ga to wo accept karay ga otherwise error de dy ga yehi jado ha typescript

  //when..
  const a : [string , number] = ['zaheer' , 123];// when i added readonly type then push method show error
  a.push('Zaheer Ahmad')
  a.push(123)
  a.push(12345)
  console.log(a)

  // asay error ni de rahaa 

  // Pracitse Of Tuples..... 

  // Question no 1 => 
  //Create a Tuple: Create a tuple named fruits with the following elements: "apple", "banana", "orange", and "grape".
  const fruit : string[] = ['Apple' , 'Banana' , 'Orange' , 'Grape'];
  console.log(fruit) ;

  // Question no 2 => 
  //Accessing Elements: Access the third element of the tuple fruits and print it.

  console.log(fruit[2])

  // Question no 3 => 
  //Tuple Concatenation: Create another tuple named more_fruits with elements "kiwi" and "watermelon". Concatenate it with the fruits tuple to create a new tuple named all_fruits.

  const moreFruit: [string , string] = ['kiwi' , 'watermelon']
  const allFruit : string[] = [...fruit , ...moreFruit]
  console.log(allFruit)

  // Question no 4 => 
  console.log(allFruit.length)

  // Question no 5 => 

//   Tuple Unpacking: Create a tuple named coordinates with the values (3, 7). Unpack the values into two variables x and y, and then print their values.


const coordinates : [number , number ] = [3, 7]

console.log('x' , coordinates[0])
console.log('y' , coordinates[1])
let [x , y ] = coordinates
console.log(x) ;
console.log(y);



// Question no 6 => 

// Tuple Slicing: Create a tuple named numbers with the values 1, 2, 3, 4, 5. Slice the tuple to create a new tuple named subset with values 2, 3, and 4.

const numbers : number[] = [1, 2, 3, 4, 5]
let newTuple = numbers.slice(1, 4)
console.log(newTuple)

// Question no 7 => 
// Tuple Immutability: Try to modify one of the elements of the fruits tuple. What happens? Explain why.

allFruit[0] = 'Mango'
console.log(allFruit)


// Question no 8 => 
// Check if an Element Exists: Check if the element "kiwi" exists in the all_fruits tuple. Print a message indicating whether it is present or not.

let isPresentKiwi : boolean = allFruit.includes('kiwi')
if(isPresentKiwi) {
  console.log('Yess') 
}else{
  console.log('Noo')
}

// Count Occurrences: Count the number of times the element "apple" appears in the all_fruits tuple and print the result.
let count: number = 0;
for(let x of allFruit) {
  if(x == 'kiwi') {
    count += 1
  }
}
console.log(count)


// Question no 10 => 
// Convert to List: Convert the all_fruits tuple to a list named all_fruits_list and print the list.

const newAllFriut: string[] = [...allFruit]
console.log(newAllFriut)

// Pracitse ChatGPT.....


// 1. **Tuple Declaration:**
//    - Declare a tuple containing a string, a number, and a boolean.

      const arr: [string , number , boolean] = ['Zaheer Ahmad' , 123 , true]
      console.log(arr)

// 2. **Tuple Initialization:**
//    - Create an instance of the tuple declared in question 1 with specific values.

      // Done

// 3. **Accessing Tuple Elements:**
//    - Access the second element of a tuple and log it to the console.

console.log(arr[1])

// 4. **Updating Tuple Elements:**
//    - Update the third element of a tuple with a new value.

arr[2] = false
console.log(arr)

// 5. **Tuple Length:**
//    - Determine the length of a tuple.

console.log(arr.length)

// 6. **Nested Tuples:**
//    - Create a tuple containing another tuple as one of its elements.

const nestedTuple: [string , number , boolean , [string , string]] = ["apple", 42, true, ["nested", "tuple"]];
console.log(nestedTuple[3])

// 7. **Tuple Unpacking:**
//    - Use tuple unpacking to assign values from a tuple to multiple variables.

      // Tupple unpacking mean array destracting
      // Done

// 8. **Array to Tuple Conversion:**
//    - Convert an array to a tuple.

      // Done

// 9. **Tuple Concatenation:**
//    - Concatenate two tuples into a new tuple.

        // Done 
        // Like as array 

// 10. **Tuple Destructuring in Function Parameters:**
//     - Declare a function that accepts a tuple as a parameter and log its elements.

      const tupleFunction = (arr:[string , number]) => {
        arr.forEach(element => {
          console.log(element)
        })
      }
      tupleFunction(['Zaheer' , 324])

// 11. **Tuple with Optional Elements:**
//     - Declare a tuple with optional elements.

        let arr1 : [string , number?] = ['Zaheer']
        console.log(arr1)

// 12. **Tuple with Rest Parameters:**
//     - Declare a tuple with rest parameters to capture additional elements.

// 13. **Tuple Mapping:**
//     - Create a new tuple by applying a function to each element of an existing tuple.

// 14. **Filtering Tuples:**
//     - Filter a tuple to create a new tuple containing only certain elements.

// 15. **Tuple Includes:**
//     - Check if a specific value exists in a tuple.

// 16. **Tuple IndexOf:**
//     - Find the index of a specific element in a tuple.

// 17. **Sorting Tuples:**
//     - Sort a tuple of numbers in ascending order.

// 18. **Tuple Reverse:**
//     - Reverse the order of elements in a tuple.

// 19. **Slice and Splice with Tuples:**
//     - Use `slice` and `splice` to extract and modify portions of a tuple.

// 20. **Tuple with Object Elements:**
//     - Declare a tuple containing both primitive values and an object as elements.






















  return (
    <div>Tupples</div>
  )
}

export default Tupples
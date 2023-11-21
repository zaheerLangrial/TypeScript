import React from 'react'

function Arrays() {

    // Array type : string[] is ka matlab ha k ik array ha us me jo index par values hain wo string me hain or yeh string k ilawa koi or accept ni karay ga 
    const arr:string[] = [];
    arr.push('zaheer')
    console.log(arr)
    arr.push('Asad')
    console.log(arr)
    // arr.push(true)


    //=====================================
    //ReadyOnly
    // Yeh readyonly type define karne se pehly likha jye ga 

    const a : readonly string[] = ["zaheer"]
    console.log(a)
    // a.push() error arahaa ha ab agr is me koi or add karta hun ya push karne ki try karta hun to error show karwa deta ha mean k red line 


    // Type Inference 

    const num = [1,2,3]
    num.push(4)
    console.log(num)
    // num.push('zaheer') error
    let head : number = num[0]
    console.log(head)



    // Pracitse ChatGPT.....

// 1. **Array Initialization:**
//    - Create an array of numbers and assign it to a variable.

      let arr1 : number[] = [1, 2, 3, 4, 5]
      console.log(arr1)

// 2. **Array Type Inference:**
//    - Declare an array of strings without explicitly specifying the type.

      let arr2 = ['jutt' , 'Zaheer' , 'Shahzaib'];
      console.log(arr2)

// 3. **Array Type Annotation:**
//    - Declare an array of booleans with type annotation.

      const arr3 : boolean[] = [true , false , true]

      console.log(arr3)

// 4. **Accessing Array Elements:**
//    - Retrieve the third element from an array.

        console.log(arr3[2])

// 5. **Updating Array Elements:**
//    - Update the second element in an array to a new value.

      arr3[1] = true;
      console.log(arr3)

// 6. **Array Methods - Push:**
//    - Use the `push` method to add an element to the end of an array.

      arr3.push(false);
      console.log(arr3)

// 7. **Array Methods - Pop:**
//    - Use the `pop` method to remove the last element from an array.

      arr3.pop();
      console.log(arr3)

// 8. **Array Methods - Shift:**
//    - Use the `shift` method to remove the first element from an array.

// 9. **Array Methods - Unshift:**
//    - Use the `unshift` method to add an element to the beginning of an array.

// 10. **Array Iteration - For Loop:**
//     - Iterate over an array using a `for` loop and log each element.

        for(let i = 0 ; i< arr3.length; i++) {
          console.log(arr3[i])
        }

// 11. **Array Iteration - For...of Loop:**
//     - Use a `for...of` loop to iterate over an array and log each element.

for(let x of arr3) {
  console.log(x)
}
// 12. **Array Iteration - Map:**
//     - Use the `map` method to create a new array with the square of each element from an existing array.
// Done
// 13. **Filtering Arrays:**
//     - Use the `filter` method to create a new array with only even numbers from an existing array.
        //Done
// 14. **Array Includes:**
//     - Check if a specific value exists in an array using the `includes` method.
          // Done
// 15. **Array IndexOf:**
//     - Find the index of a specific element in an array using the `indexOf` method.
          // Done
// 16. **Array Sorting:**
//     - Sort an array of strings in alphabetical order.


const fruits: string[] = ["banana", "apple", "orange", "grape"];
const sortedFruits = fruits.slice().sort()
console.log(sortedFruits)
// 17. **Array Reverse:**
//     - Reverse the order of elements in an array using the `reverse` method.
        //  Done
// 18. **Slice and Splice:**
//     - Use `slice` and `splice` to extract and modify portions of an array.
            // Done
// 19. **Array Concatenation:**
//     - Concatenate two arrays into a new array using the `concat` method.
const array1: number[] = [1, 2, 3 , 4];
const array2: number[] = [4, 5, 6];
const concateArr: number[] = [...array1 , ...array2]
console.log(concateArr)
// 20. **Array Destructuring:**
//     - Use array destructuring to assign values from an array to multiple variables.
const colors: string[] = ["red", "green", "blue"];

 const [redColor , greenColor , BlueColor] = colors
 console.log(redColor) 
 console.log(greenColor) 
 console.log(BlueColor)
  return (
    <div>
        <h1>Topics</h1>
        <h3>Array Type</h3>
        <h3>Readonly</h3>
        <h3>Inference</h3>
    </div>
  )
}

export default Arrays
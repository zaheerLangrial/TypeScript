import React from 'react'

function Objecttypes() {

    // Object Typed
    // is me yeh ha k jo hmne obj me properties banani hain ya use karni ha un ko pehly typed me likh k define karna paray ga k yeh property string ha or yeh number ha 
    // For Example ....
    const obj : {type: string , modal: number , year: number} = {
        type : 'Civic' , 
        modal : 2025,
        year : 2024,
    }
    console.log(obj)

    // Type Inference in Object Typed....

    //obj.modal = 'jutt' //error 

    const obj1 : {type : string , maliage? : number} = {
      type : 'Civic'
    } 
    obj1.maliage= 2222;
    console.log(obj1)

        // Pracitse form ChatGPT

// 1. **Object Initialization:**
//    - Initialize an object representing a person with properties for name, age, and gender.

const obj3 = {
  name : 'Zaheer Ahmad', 
  age : 19,
  gender : 'Male'
}
console.log(obj3)

// 2. **Object Type Annotation:**
//    - Declare a type for an object representing a book with properties for title (string), author (string), and pages (number).

type Book = {
  title : string;
  author : string;
  pages : number
}
let book : Book = {
  title : 'Book1',
  author : 'BookAuthor',
  pages : 200
}

console.log(book)

// 3. **Accessing Object Properties:**
//    - Access the `age` property of a person object and log it to the console.

console.log(obj3.age)

// 4. **Updating Object Properties:**
//    - Update the `pages` property of a book object to a new value.

book.pages = 239
console.log(book)

// 5. **Object Methods:**
//    - Declare an object type for a car with properties for make (string) and year (number) and a method `startEngine` that returns a string.

type Car = {
  make : string;
  year : number ;
  startEngine : () => string;
}

const myCar : Car = {
  make : 'Honda' ,
  year : 2022,
  startEngine : () => {
    return 'This is a Method in Obj.'
  }
}

console.log(myCar.startEngine())

// 6. **Object Intersection:**
//    - Create a type that represents a combination of a person and a book.

type BookAndPerson = {
  book : {
    title : string;
    author : string;
    pages : number;
  },
  person : {
    name : string;
    age : number;
    gender : string
  }
}

const bookAndPerson : BookAndPerson = {
  book : {
    title : 'BookName',
    author : 'AuthorName',
    pages : 239
  },
  person : {
    name : 'Zaheer Ahmad',
    age : 22,
    gender : 'Male'
  }
}

console.log(bookAndPerson)

// 7. **Object Union:**
//    - Create a type that can represent either a cat (with a `meow` property) or a dog (with a `bark` property).

type CatOrDog = {
  cat? : string;
  dog? : string;
}

let cat : CatOrDog = {
  cat : 'Meow'
}
let dog : CatOrDog = {
  dog : 'Bark'
}
console.log(cat , dog)

// 8. **Optional Object Properties:**
//    - Declare a type for an object representing a computer with properties for brand (string) and RAM (number), where RAM is optional.

//Done

// 9. **Mapped Types:**
//    - Create a mapped type that makes all properties of an object optional.

// Done

// 10. **Object Destructuring:**
//     - Use object destructuring to assign values from an object to multiple variables.

// Done








  return (
    <div>
        Object Types
    </div>
  )
}

export default Objecttypes
import React from 'react'

function Enums() {
    // enum ko banany ka trika yeh ha k 
    // pehly enum likho fir name likho joo bi ap banana chahty hain 
    // fir with any equal ani arrow write the propertues like as obj
    // For Example .....
    enum CardinalDirection {
        North, 
        East,
        South,
        West
    }
    console.log(CardinalDirection.North)
    console.log(CardinalDirection.West)

    // Agr hm North ko value 1 de k dekhy kia huta ha 

    enum Directions {
        north = 1,
        west, 
        south,
        east
    }

    console.log(Directions.east)

    // enum me properties ko koi bi value de skty hain 
    // for example .... 

    enum status {
        notFound = 404,
        success = 200
    }
    console.log(status.success)

    // enum me value string bi di ja skti ha 
    // For example .... 
    enum a {
        notFound = 'Zaheer Ahmad' , 
        success = 'Langrial'
    }
    console.log(a.success)

    // Practise ChatGPT......

// 1. **Enum Declaration:**
//    - Declare an enum called `Color` with values for Red, Green, and Blue.

    enum Color {
        Red , 
        Green , 
        Blue,
    }

    console.log(Color)

// 2. **Enum Initialization:**
//    - Initialize a variable with the value of the Green enum from the Color enum.

const myColor: Color = Color.Blue

console.log(myColor)

// 3. **Enum Index Access:**
//    - Access the index of the Blue enum from the Color enum.
console.log(Color.Blue)

// 4. **String Enums:**
//    - Declare a string enum called `Direction` with values "North", "South", "East", and "West".

// Done

// 5. **Numeric Enums:**
//    - Declare a numeric enum called `Days` with values for Monday, Tuesday, and Wednesday.

// Done

// 6. **Enum Reverse Mapping:**
//    - Access the name of an enum member using its numeric value.

        let color : string = Color[0]
        console.log(color)

// 7. **Enum Iteration:**
//    - Iterate over the values of the Color enum and log each value to the console.

        for(let x in Color){
            console.log(Color[x])
        }

// 8. **Enum Union Type:**
//    - Create a function that accepts a parameter of type Color enum and returns a message based on the color.

            // function getColorMessage (color : Color): string {
            //     return color[0]
            // }

// 9. **Enum as Object Keys:**
//    - Use an enum to define keys in an object and assign values accordingly.

// Waiting ......................................

// 10. **Enum Extending:**
//     - Declare a new enum called `ExtendedColor` that extends the Color enum with additional values.
// Waiting ......................................





  return (
    <div>Enums</div>
  )
}

export default Enums
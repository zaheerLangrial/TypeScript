import React from 'react'

function Keyof() {

    // KeyOf

    // Is ka km ha keys ko target karna 

    type Person = {
        name : string ;
        age : number ;
    }

    function PrintPersonProperty (person : Person , property : keyof Person) {
        console.log (`Person Property is ${property} : "${person[property]}"`)
    }

    let me = {
        name : 'Zaheer' ,
        age : 20
    }

    PrintPersonProperty(me , 'name')


    // AGain 


    interface Car {
        name : string ;
        modal : number ;
        company : string;
    }

    const myCar = {
        name : 'Civic' , 
        modal : 2025,
        company : 'Honda' 
    }

    const keyprint = (car: Car , propety : keyof Car) => {
        console.log(`My Car company is "${car[propety]}"`)
    }

    keyprint(myCar , 'company')






  return (
    <div>Keyof</div>
  )
}

export default Keyof
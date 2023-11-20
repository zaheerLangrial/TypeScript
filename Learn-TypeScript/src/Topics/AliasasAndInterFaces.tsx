import React from 'react'

function AliasasAndInterFaces() {

    // Aliases
    // Create By using type keyword
    // for example .... 
    type carYear = number
    const CarYear : carYear = 2025;
    console.log(CarYear)
    type carType = string;
    const Cartype : carType = 'Civic' ;
    console.log(Cartype)
    type carCompany = string;
    const CarCompany : carCompany = 'Honda' ;
    console.log(CarCompany)
    // obj banany se pehly asy define karni ha types
    // yeh opr types declare ki hui thi woi likhi thi is tara bi type ko banaya ja skta ha 
    
    // type car = {
    //     year : carYear,
    //     type : carType,
    //     company : carCompany
    // }

    type car = {
        year : number,
        type : string,
        company : string
    }
    const Car : car = {
        year : 2024, 
        type : 'Civic',
        company : 'Honda'
    }
    console.log(Car)

    // interface
    // is me = ni ata type me equal lagana parta ha 


    interface person {
        name : string , 
        age : number , 
    }
    const Person : person = {
        name : 'Zaheer Ahamd', 
        age : 23
    }
    console.log(Person)

    
  return (
    <div>
        <h1>Aliasas And InterFaces</h1>
    </div>
  )
}

export default AliasasAndInterFaces
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
  return (
    <div>
        Object Types
    </div>
  )
}

export default Objecttypes
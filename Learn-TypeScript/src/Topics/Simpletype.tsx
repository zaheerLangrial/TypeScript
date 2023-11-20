import React from 'react'

function Simpletype() {

    //this is implicit type of typescipt
    //Is me yeh k hm esy type ka ni bataty yeh khudi guess kartya ha k is ki type kia ha.

    console.log('=============Implicit type==============')
    const fName = 'Zaheer';
    console.log(fName)
    console.log(typeof fName)

    //Explicit Type
    // is me yeh k hm type k about bataty hain k yeh string ha number ha boolean etc.
    // For example 
    console.log('=============Emplicit type==============')


    const name : string = 'Zaheer Ahamd'
    console.log(typeof name);
    console.log(name)

  return (
    <div>
        There are two main ways
        <h1>1 Explicit</h1>
        <h1>2 Implicit</h1>
    </div>
  )
}

export default Simpletype
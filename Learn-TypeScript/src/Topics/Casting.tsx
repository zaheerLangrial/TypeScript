import React from 'react'

function Casting() {

    // Casting 
    // pehly kuch huna fir kuch or ban jana esy kehty hain Casting

    // Yeh tha casting with (as)

    const x : unknown = 'Zaheer Ahamd';
    console.log((x as string).length)

    // now casting with <> arrows
    // <> is se error show hu raha haa me as wali casting use kro ga 

    const y : unknown = 'Zaheer Ahamd';
    // console.log((<string>y).length)
    // console.log((<string>y).length); // error</string>

    // Force Casting 
    // Is me casting par casting karne ko force casting kehtyhain 
    // for Example ......

    const a = 'Hello';
    // console.log(((a as unknown) as number).length) // Showing me Error Bexoz a value is string . 
    console.log(((a as unknown) as string).length)


  return (
    <div>Casting</div>
  )
}

export default Casting
import React from 'react'

function SpecialTypes() {
    console.log('Without type : any ')
    //without type : any

    let u = true;
    u = false;
   // Agr ab u ko boolean k ilwa koii or type ki value dety hain to yeh edr error show karwata but programe run hu jata becoz at the end yeh javascript me hi convert hu k run huta 
    console.log(typeof u)


    console.log('With type : any')
    // With type : any

    let m : any = 'Zaheer' ;
    console.log(m)
    m = 123;
    console.log(typeof m)

    // Matlab yeh k any se hm js ki tara hi likh skty hain fir yeh koi error show ni karwaye ga type ka . k apne pehly string value di wo string type ban gai fir apne number value de di fir wo error show karwane lag gya 


    // type : never 
    console.log('type : never')

    // const a : never = 'zaheer';
    // never buss esi tara koi bi type assign na karne k liye use huti ha 


    console.log('Type : undefine/null')

    // yeh types null or undefined values k liye use huti ha in k name se hi pata chal raha ha 

    //for example 

    const b : undefined = undefined
    console.log(b)
    console.log(typeof b)

    const c : null = null
    console.log(c)
    console.log(typeof c)

  return (
    <div>
        <h1>Special Types</h1>
        <h3>type: any</h3>
        <h3>type: Unknow</h3>
        <h3>type: never</h3>
        <h3>type: undefined / null</h3>


    </div>

  )
}

export default SpecialTypes
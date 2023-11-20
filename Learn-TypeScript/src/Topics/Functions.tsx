import React from 'react'

function Functions() {

    // functon me jo return ana huta ha wo batana huta ha k wapisi jo value aye gi wo string hu gi ya number ya etc

    // Return Type .......

    const myFunction = ():number => {
        return new Date().getDate();
    }

    console.log(myFunction())


    // Void Return Type ..... 
    // Yeh us function k sath use hugi jis me hme pata hu k yeh kuch bi wapis ni karay ga matlab return ni ay gi kuch bi value.
    // for example ..... 
    const helloWorld = () : void => {
        console.log('This is called Void Function.')
    }

    helloWorld()


    // Parameters ...... 
    // Parameters ko bi type assign karni huti ha 
    // batana huta ha is me kis type ki value rahy 
    // For example
    const parameterFunction = (a: number , b : number): number => {
        return a*b
    }
    console.log(parameterFunction(10 , 20))


  return (
    <div>Functions</div>
  )
}

export default Functions
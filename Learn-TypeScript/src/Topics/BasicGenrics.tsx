import React from 'react'

function BasicGenrics() {

  // Basic Genrics ham asy bi add kar skty hain ..... 
    function createPair<S , T> (v1 : S , v2 : T) : [S , T] {
        return [v1 , v2]
    }
    console.log(createPair<string , string>('Hello' , '42'))

    // Another Example ......

    function myFunction<S , B>(V1: S , v2 : B):[S , B] {
      return [V1 , v2]
    }
    console.log(myFunction<string ,boolean>('Zaheer Ahamd', true))

    // Basic Genrics ka matlab yeh ha k yeh ap funciton k name k sath hi <> me ik farzi word k sath declare kar skty hu fir jab show karwana hu to fir fucnton k sath arrow me us ki types bata do .....


    // Basic Genrics in type Alieses
    // For Example ..... 

    type wrapped <T> = {
      value : T
    };
    const wrappedValues: wrapped<number> = {
      value : 101010101010
    }
    console.log(wrappedValues)



    // Another Example in Alieses Type ..... 

    type Person <S , N> = {
      name : S,
      age : N
    }

    const person : Person<string , number> = {
      name : 'Zaheer Ahmad',
      age : 22
    }

    console.log(person)







  return (
    <div>Basic Genrics</div>
  )
}

export default BasicGenrics
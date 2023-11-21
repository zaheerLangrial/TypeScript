import React from 'react'

function Nulltopic() {

    // Null matlab k jab bi hmne null ka varible declare karna ha tab tab null ya asy types use karni ha
        let value: undefined | null | string = null
        console.log(value)
        value = 'Hello'
        console.log(value)
        value = undefined
        console.log(value)


        // Another Example 

        interface House {
            sqft : number ;
            yard? : {
                sqft : number
            }
        }
        const myHouse:House = {
           sqft : 20,
        //    yard : {
        //     sqft : 35
        //    } 
        }

        const YardFinder = (houseInformation: House) => {
            const yardSize = houseInformation.yard?.sqft;
            if(yardSize) {
                console.log(yardSize)
            }else {
                console.log('No Yard enter.')
            }
        }

        YardFinder(myHouse)



  return (
    <div>Nulltopic</div>
  )
}

export default Nulltopic
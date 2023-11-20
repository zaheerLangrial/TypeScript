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

  return (
    <div>Enums</div>
  )
}

export default Enums
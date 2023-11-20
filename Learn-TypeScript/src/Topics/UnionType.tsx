import React from 'react'

function UnionType() {

    const myFunction = (code:string | number) => {
        console.log(`Your Code is ${code}.`)
    }

    myFunction(404)


  return (
    <div>UnionType</div>
  )
}

export default UnionType
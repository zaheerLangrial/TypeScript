import React from 'react'

function Tupples() {
  // Tupple 
  // is ka matlab ha k jo jo hmne array me value deni ha usi hesaab se types aray ki tara bhri bracket me likh do or array bana do 
  // For Example ...
  const ourTupple : [number , string , boolean] = [1 , 'Zaheer' , true]
  console.log(ourTupple)
  // jab hm tupple me di gai type k according value add na karay 
  //sconst tuple : [string , number] = [134] // errror araha ha string ki string or number ki jaga number hi aye ga to wo accept karay ga otherwise error de dy ga yehi jado ha typescript

  //when..
  const a : [string , number] = ['zaheer' , 123];// when i added readonly type then push method show error
  a.push('Zaheer Ahmad')
  a.push(123)
  a.push(12345)
  console.log(a)

  // asay error ni de rahaa 
  return (
    <div>Tupples</div>
  )
}

export default Tupples
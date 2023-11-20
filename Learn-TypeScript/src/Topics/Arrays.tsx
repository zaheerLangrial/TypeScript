import React from 'react'

function Arrays() {

    // Array type : string[] is ka matlab ha k ik array ha us me jo index par values hain wo string me hain or yeh string k ilawa koi or accept ni karay ga 
    const arr:string[] = [];
    arr.push('zaheer')
    console.log(arr)
    arr.push('Asad')
    console.log(arr)
    // arr.push(true)


    //=====================================
    //ReadyOnly
    // Yeh readyonly type define karne se pehly likha jye ga 

    const a : readonly string[] = ["zaheer"]
    console.log(a)
    // a.push() error arahaa ha ab agr is me koi or add karta hun ya push karne ki try karta hun to error show karwa deta ha mean k red line 


    // Type Inference 

    const num = [1,2,3]
    num.push(4)
    console.log(num)
    // num.push('zaheer') error
    let head : number = num[0]
    console.log(head)

  return (
    <div>
        <h1>Topics</h1>
        <h3>Array Type</h3>
        <h3>Readonly</h3>
        <h3>Inference</h3>
    </div>
  )
}

export default Arrays
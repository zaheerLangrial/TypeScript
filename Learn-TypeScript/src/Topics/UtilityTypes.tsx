import React from "react";

function UtilityTypes() {
  // Sab se pehly hmare pas ata ha
  //    Partial type
  // jis ka km ha k yeh keys ko optional kar deta ha

  type Point = {
    x: number;
    y: number;
  };

  let pointPart: Partial<Point> = {
    x: 10,
  };

  pointPart.y = 10;

  console.log(pointPart);

  // Requird type
  // mostly used for properties to requied
  // yeh lagane se jo optional par huti hain wo bi requird ban jati hain

  interface Car {
    make: string;
    modal: string;
    milage?: number;
  }
  // edr me milage optional me dala huwa me likho tab bi koi masla ni me na likho tab bi koi masla ni
  let myCar: Car = {
    make: "Honda",
    modal: "Civic",
    // milage : 2020
  };
  console.log(myCar);

  // ab hm Requird laga k dekhty hain kia banta ha

  let mySecCar: Required<Car> = {
    make: "Honda",
    modal: "Civic",
    milage: 202,
  }; // without milage Run to hu raha ha but error araha haa
  console.log(mySecCar);

  // Now Record type
  // Yeh jo bi utility types hain yeh <> k pehly hi use hun gi likhi jye gi or in k bad <> arrows me type , interface ya enum likha jye ga

  // Record obj ko shortcut me define karne kl liye use huta ha ..

  const nameAgeMap: Record<string, number> = {
    value: 15,
    // Record me jo cheez ati ha wo properties k hesab se likhi jati ha
    // Matlab agr obj ki property name string ha to us ko string do
    // or agr propety ki value number me ha to number de do other wies jis hesab ki ha us hesab se de do
  };

  console.log(nameAgeMap);

  // Omit type ......
  // Yeh obj keys ko remove karta ha
  // Matlab jo hm type se ya interface se ya enum se banaty hain un keys ko remove karta ha kese karta ha dekhty hain

  type Person1 = {
    name: string;
    age: number;
    idCard?: number;
  };
  // jab hm omit lagaye gy to pehly hm arrows me type, interface , enums ka name hi de gy fir simcolon k bad , keys name quates me agr 2 hain to | yeh sembole add karay gy ok
  let myPerson: Omit<Person1, "name" | "age"> = {
    idCard: 112233,
  };
  console.log(myPerson);

  // Pick type
  // jesa k name se hi pata chal raha ha k obj keys mese jo key pick karni ha wo defien kardo
  // For Example .....

  const person1: Pick<Person1, "name" | "age"> = {
    name: "Zaheer Ahmad",
    age: 20,
  };

  console.log(person1);

  // Pracitse Form ChatGPT.......

  // 1. **Basic Generics with Partial:**
  //    Create a generic utility type that makes all properties of an object optional using `Partial`.

  type TestPerson = {
    name: string;
    age: number;
    id: number;
  };

  const person: Partial<TestPerson> = {
    name: "Zaheer",
  };

  console.log("Question No 1 ---> ", person);

  // 2. **Required Properties:**
  //    Define a utility type that ensures that certain properties are required. For example, create a type that enforces 'name' and 'age' properties to be present in an object.

  const person3: Required<TestPerson> = {
    name: "Zaheer",
    age: 12,
    id: 12121,
  };
  console.log("Question no 2 ---> ", person3);

  // 3. **Read-Only Properties:**
  //    Build a utility type that makes all properties of an object read-only using `Readonly`.

  // const person4: readonly<TestPerson> = {
  //     name : 'Zaheer',
  // }
  // console.log('Question no 3 ---> ')
  // console.log(person4)
  // person4.age = 19;
  // console.log(person4)

  // 4. **Pick Properties:**
  //    Implement a utility type that picks specific properties from another type using `Pick`. For instance, create a type that includes only 'id' and 'name' properties from an object.

  let person5: Pick<TestPerson, "id" | "name"> = {
    id: 234,
    name: "Zaheer Ahmad",
  };

  console.log("Question no 4 ---> ", person5);

  // 5. **Omit Properties:**
  //    Create a utility type that excludes specific properties from another type using `Omit`. For example, exclude 'password' and 'email' properties from a user object.

  type userData = {
    id: number;
    password: number | string;
    email: string;
  };
  let onlyId: Omit<userData, "password" | "email"> = {
    id: 234,
  };
  console.log("Question no 4 ----> ", onlyId);

  // 6. **Mapping Over Properties:**
  //    Implement a utility type that transforms the values of certain properties in an object. For instance, create a type that doubles the values of all number properties.

  // 7. **Conditional Types:**
  //    Use conditional types to create a type that, depending on a boolean flag, adds or removes specific properties from another type.

  // 8. **Keyof and Index Types:**
  //    Utilize `keyof` and index types to create a utility type that takes an object and returns a union type of its keys.

  // 9. **Function Parameters:**
  //    Design a utility type that extracts the parameter types of a function. For example, create a type that extracts the parameter types of a function with the signature `(a: number, b: string) => void`.

  // 10. **Tuple to Object Mapping:**
  //     Build a utility type that converts a tuple type into an object type. For instance, if given the tuple type `[number, string, boolean]`, the utility type should generate an object type with keys '0', '1', and '2', and corresponding value types.

  return (
    <div>
      <h1>Utility types</h1>
      <h3>There are many utility types....</h3>
      <ul>
        <li>Partial type</li>
        <li>Requird type</li>
        <li>Record Type</li>
        <li>Omit type</li>
        <li>Pick Type</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default UtilityTypes;

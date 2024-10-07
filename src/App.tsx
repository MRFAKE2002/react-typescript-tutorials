import React from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

// ma mitunim ghabl az function type khasi ro tarif konim va hameja estefade konim hata baghie component dige.
export type User = { name: string; email: string; age: number };
type Array4 = (number | string)[];

function App() {
  /* 
    dakhel typescript bayad baraye sakht moteghayer 'type' malum konim. alan masalan type 'name' khodesh tashkhis mide string va age ham 
    bekhaim meghdaresh ro taghyir bedim hatman bayad 'string' bashe.
  */
  let name = "type"; // let name: string = 'type';
  name = "string";

  let counter: number = 1; // let counter = 1;
  counter = 2;

  let flag: boolean = false; // let flag = false;
  flag = true;

  // array
  let array = [1, "string", false];
  let array1: string[] = ["string"];
  let array2: number[] = [1, 2, 3];
  let array3: (number | string | boolean)[] = [];
  let array4: Array4 = [1, "string"];

  // object
  let object = {
    name: "string",
    age: 10,
    isMarried: false,
  };
  let object1: { name: string; age: number; isMarried: boolean } = {
    name: "string",
    age: 10,
    isMarried: false,
  };

  let user: User = {
    name: "user",
    email: "user@example.com",
    age: 10,
  };

  // function
  function sum(a: number, b: number): number {
    return a + b;
  }

  sum(2, 2);

  return (
    <div className="App">
      <h1>Typescript</h1>
      <hr />
      <User
        name="user"
        email="user@example.com"
        age={10}
        sum={sum}
        hasChildren={false}
        // chon 'phoneNumber' optional pas nazarimesh error nemide
        strangeType="anything type"
        unionType="union"
      />
      <hr />
      <User
        name="user"
        email="user@example.com"
        age={10}
        sum={sum}
        hasChildren={false}
        phoneNumber="091000000"
        strangeType={1234}
        unionType="different"
      />
    </div>
  );
}

export default App;

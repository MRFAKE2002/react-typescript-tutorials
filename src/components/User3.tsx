// dar inja mikhaim bebinim type 'useState' be onvan vorudi chetor bayad moshaghas beshe.

// libraries
import React from "react";

// types
import { User } from "../App";


type UserState = {
  state: User | null
  setState: React.Dispatch<React.SetStateAction<User | null>>
}



function User3({state, setState} : UserState) {
  return (
    <h1>useState example</h1>
  );
}

export default User3
// libraries
import React from "react";

// types
import { USER } from "./User";

// In ravesh dovom baraye neveshtan function be surat arrow function.

const User: React.FC<USER> = ({ name, email, age, hasChildren, sum }) => {
  return (
    <>
      <h1>name: {name}</h1>
      <h1>email: {email}</h1>
      <h1>age: {age}</h1>
      <h1>sum: {sum(2, 2)}</h1>
      <h1>has children: {`${hasChildren}`}</h1>
    </>
  );
};

export default User;

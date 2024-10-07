// dar inja mishe baraye 'props' type haye moteghayer baraye component ro moshakhas mikonim.

type UnionType = "union" | "different";

export type USER = {
  name: string;
  email: string;
  age: number;
  sum: (a: number, b: number) => number;
  hasChildren: boolean;
  // agar bekhaim ye meghdari optional ya ekhtiari bashe baya az '?' estefade konim
  phoneNumber?: string;
  strangeType: any;
  // union type jurie ke shoma entekhab mikonid moteghayer bayad che maghadiri dashte bashe va joz in nabashe
  unionType: UnionType;
};

// az ounjayi ke 'props' vorudi khodesh object pas mitunim maghadir ro mostaghim begirim.
// function User(props: {
//   name: string;
//   email: string;
//   age: number;
//   sum: (a: number, b: number) => number;
//   hasChildren: boolean;
// }) {

function User({
  name,
  email,
  age,
  sum,
  hasChildren,
  phoneNumber,
  strangeType,
  unionType,
}: USER) {
  return (
    <>
      <h1>name: {name}</h1>
      <h1>email: {email}</h1>
      <h1>age: {age}</h1>
      <h1>sum: {sum(2, 2)}</h1>
      <h1>has children: {`${hasChildren}`}</h1>
      {/* 
        ma mitunim az shart estefade konim ke neshun bede age moteghayer meghdar dasht neshun bede nadasht yechiz dige neshun bede
        ke in shart be 2 surat mishe nevesht:
        avalish:
      */}
      {/* <h1>phone number: {phoneNumber ?? "وجود ندارد"}</h1> */}
      {/* 
        dovomish:
      */}
      {phoneNumber && <h1>phone number: {phoneNumber ?? "وجود ندارد"}</h1>}
      <h1>strange type: {strangeType}</h1>
      <h1>union type: {unionType}</h1>
    </>
  );
}

export default User;

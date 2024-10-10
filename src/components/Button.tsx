// dar inja mikhaim mesali az tarz estefade 'ComponentProps' neshun bedim

// libraries
import { ComponentProps, ComponentPropsWithoutRef } from "react";

/* 
  zamani ke mikhaim ye component khas baraye yek element ya tag mesl 'button' ya 'input' besazim mitunim bejaye inke biaim baraye har 
  vorudi mesl 'onClick' ya 'value' type moshakhas konim miaim az 'ComponentProps' estefade mikonim ke amalan baraye har kodum har chizi
  bezarim va error nemide faghat kafie moshakhas konim baraye che tagi estefade beshe.
  ma hata mitunim be surat joda baraye vorudi khas type joda ham entekhab konim.
*/
type ButtonType = ComponentPropsWithoutRef<"button"> & {
  buttonTitle: string;
};

function Button({ value, type, buttonTitle }: ButtonType) {
  return <button value={value}></button>;
}

export default Button;

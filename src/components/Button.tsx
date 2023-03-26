import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IProps{
 type:any;
 name:string;
 value:string;
 disabled:boolean;
 onclick:any;
 classname:string;
}

export function Button(props:IProps){

 return (
  <button
  type={props.type}
  name={props.name}
  value={props.value}
  disabled={props.disabled}
  onClick={props.onclick}
  className={props.classname}
  >{props.name}</button>
 )
}
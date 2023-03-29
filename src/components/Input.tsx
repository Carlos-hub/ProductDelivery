
interface IProps{
 value?:string;
 className:string;
 placeholder:string;
 onchange?:any;
 type:string;
 required:boolean;
 name?:string;
}
export function Input(props:IProps){
 return(
  <input className={props.className} 
  type={props.type}
  value={props.value} 
  placeholder={props.placeholder}
  onChange={props.onchange}
  required={props.required}
  name={props.name}
  />
 )
}
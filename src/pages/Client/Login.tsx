import { useState } from "react";
import { Input } from "../../components/Input";
import MinhaImagem from '../../assets/react.svg'
import { Button } from "../../components/Button";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export function Login(){
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('');


 async function logar(email:string,password:string){
  if(email =="" || password == ""){
   return toast.error('Preencha os campos solicitados', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  }
  const data={ email, senha:password}
  axios.post("https://devevolution-production.up.railway.app/client/auth",data)
  .then(response =>{
    console.log(response)
   return response;
  })
  .catch(err =>{
    // console.log(err.response.data);

   return toast.error(err.response.data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  })
 }
  return(
  <div className="flex bg-slate-500 h-screen">
  <div className="block w-1/2">
    <img src={MinhaImagem} alt="" className="w-full"/>
  </div>
  <div className=" m-auto space-y-2">
   <div className="mb-6">
    <span className="text-2xl text-white justify-center">
     Bem vindo ao Delivery Certo
    </span>
   </div>
  <Input
    type="email"
    value={email} 
    className="flex p-2 border-b-2 border-b-slate-600 rounded-lg ring-3 ring-blue-500" 
    placeholder="Login" 
    required={true}
    onchange={(e:any)=>setEmail(e.target.value)} 
    />

    <Input
    type="password"
    value={password} 
    className="flex p-2 border-b-2 border-b-slate-600 focus:ring-2 rounded-lg" 
    placeholder="Senha" 
    onchange={(e:any)=>setPassword(e.target.value)} 
    required={true}
    />

   <Button 
   type={SubmitEvent} 
   name="Logar" 
   value="Entrar" 
   disabled={false} 
   classname="bg-slate-300 p-2 rounded"
   onclick={() => logar(email,password)}/>
  </div>
  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
  </div>


  )
}
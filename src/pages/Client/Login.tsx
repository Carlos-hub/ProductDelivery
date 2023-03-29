import { FormEvent, useState } from "react";
import { Input } from "../../components/Input";
import MinhaImagem from '../../assets/react.svg'
import { Button } from "../../components/Button";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

interface ICreate {
  name: string;
  age: number;
  cpf: string;
  email: string;
  password: string;
  bornDate: string;
}


export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');



  function setCookie(name: string, value: string, expirationDays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  async function logar(email: string, password: string) {
    if (email == "" || password == "") {
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
    const data = { email, senha: password }
    axios.post("https://devevolution-production.up.railway.app/client/auth", data)
      .then(response => {
        console.log(response);
        setCookie('token', response.data, 1);
        return response;
      })
      .catch(err => {
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
  async function create(data: ICreate) {

  }
  return (
    <div className="md:flex sm:block bg-slate-500 h-screen">
      {/* <div className="block md:w-1/2 sm:w-full p-2">
    <img src={MinhaImagem} alt="" className="w-full md:h-full sm:h-48"/>
  </div> */}
      <div className=" m-auto p-4 rounded-lg space-y-2 h-4/5 md:w-2/5 sm:w-full text-center bg-slate-400 ">
        <div className="mb-6">
          <span className="text-2xl text-white ">
            Criar Cadastro
          </span>
        </div>
        <form className="space-y-2">
          <Input
            type="text"
            className="flex p-2 border-b-2 border-b-slate-600 rounded-lg ring-3 ring-blue-500 mx-auto"
            placeholder="Login"
            required={true}
            name="name"
          />

          <Input
            type="number"
            className="flex p-2 border-b-2 border-b-slate-600 focus:ring-2 rounded-lg mx-auto"
            placeholder="Idade"
            required={true}
            name="age"
          />
          <Input
            type="text"
            className="flex p-2 border-b-2 border-b-slate-600 focus:ring-2 rounded-lg mx-auto"
            placeholder="CPF"
            required={true}
            name="cpf"
          />
          <Input
            type="text"
            className="flex p-2 border-b-2 border-b-slate-600 focus:ring-2 rounded-lg mx-auto"
            placeholder="E-mail"
            required={true}
            name="email"
          />
          <Input
            type="password"
            className="flex p-2 border-b-2 border-b-slate-600 focus:ring-2 rounded-lg mx-auto"
            placeholder="Senha"
            required={true}
            name="password"
          />
          <Input
            type="date"
            className="flex p-2 border-b-2 border-b-slate-600 focus:ring-2 rounded-lg mx-auto w-[264px]"
            placeholder="Senha"
            required={true}
            name="bornDate"
          />
          <Button
            type={SubmitEvent}
            name="Criar"
            value="Entrar"
            disabled={false}
            classname="bg-slate-300 py-2 px-10 rounded hover:bg-slate-500 hover:text-white"
          />
        </form>

      </div>
      <div className=" m-auto p-4 rounded-lg space-y-2 h-4/5 md:w-2/5 sm:w-full text-center bg-slate-400 align-middle	">

        <div className="my-auto">
          <div className="mb-6">
            <span className="text-2xl text-white ">
              Bem vindo ao Delivery Certo
            </span>
          </div>
          <Input
            type="email"
            value={email}
            className="flex p-2 border-b-2 border-b-slate-600 rounded-lg ring-3 ring-blue-500 mx-auto"
            placeholder="Login"
            required={true}
            onchange={(e: any) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            value={password}
            className="flex p-2 border-b-2 border-b-slate-600 focus:ring-2 rounded-lg mx-auto"
            placeholder="Senha"
            onchange={(e: any) => setPassword(e.target.value)}
            required={true}
          />

          <Button
            type={SubmitEvent}
            name="Logar"
            value="Entrar"
            disabled={false}
            classname="bg-slate-300 p-2 rounded hover:bg-slate-500 hover:text-white"
            onclick={() => logar(email, password)} />
        </div>

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
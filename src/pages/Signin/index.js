import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-20 text-2xl mb-2 font-bold">Login de Usuario</h1>
      <div className="border-2 rounded-2xl shadow-lg border-black border-solid  mb-36 p-2">
        <form className="flex flex-col items-center my-2">
          <div className="flex flex-col items-start w-fit">
            <Input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <labelerror>{error}</labelerror>
            <Button Text="Entrar" onClick={handleLogin} />
            <labelsignup className="mt-1">
              Não tem uma conta?
              <strong className="font-bold">
                <Link to="/Singup">&nbsp;Registre-se</Link>
              </strong>
            </labelsignup>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;

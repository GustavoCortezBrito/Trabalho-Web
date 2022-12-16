import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/index";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-20 text-2xl mb-2 font-bold">SISTEMA DE CADASTRO</h1>
      <div className="border-2 rounded-2xl shadow-lg border-black border-solid  mb-36 p-2">
        <form className="flex flex-col items-center my-3">
          <div className="flex flex-col items-start w-fit">
            <Input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
              type="email"
              placeholder="Confirme seu E-mail"
              value={emailConf}
              onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />
            <Input
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <labelerror>{error}</labelerror>
            <Button Text="Inscrever-se" onClick={handleSignup} />
            <labelsignin>
              Já tem uma conta?
              <strong>
                <Link to="/">&nbsp;Entre</Link>
              </strong>
            </labelsignin>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

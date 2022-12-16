import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-20 text-2xl mb-2 font-bold">Cadastro de Usuario</h1>
      <div className="border-2 rounded-2xl shadow-lg border-black border-solid  mb-10 p-10">
        <form className="flex flex-col items-center my-3">
          <div className="flex flex-col items-start w-fit">
            <label className="text-xl">Email:</label>
            <input
              placeholder="Email"
              className="mt-2 min-w-[18em] h-9 px-3 text-lg bg-[#f3f3f3] border-0 rounded-[4px] mb-8 focus:outline-none focus:shadow-md"
            ></input>

            <label className="text-xl">Username:</label>
            <input
              placeholder="Username"
              className="mt-2 min-w-[18em] h-9 px-3 text-lg bg-[#f3f3f3] border-0 rounded-[4px] mb-8 focus:outline-none focus:shadow-md"
            ></input>

            <label className="text-xl">CPF:</label>
            <input
              placeholder="CPF"
              className="mt-2 min-w-[18em] h-9 px-3 text-lg bg-[#f3f3f3] border-0 rounded-[4px] mb-8 focus:outline-none focus:shadow-md"
            ></input>

            <label className="text-xl">Senha:</label>
            <input
              placeholder="Senha"
              className="mt-2 min-w-[18em] h-9 px-3 text-lg bg-[#f3f3f3] border-0 rounded-[4px] mb-8 focus:outline-none focus:shadow-md"
            ></input>

            <label className="text-xl">Senha Novamente:</label>
            <input
              placeholder="Senha"
              className="mt-2 min-w-[18em] h-9 px-3 text-lg bg-[#f3f3f3] border-0 rounded-[4px] focus:outline-none focus:shadow-md"
            ></input>
            <div class="flex space-x-2 justify-center mt-3">
              <Link to="/Login">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md  hover:text- hover:shadow-lg border-2 border-black hover:bg-gray-200"
                >
                  Cadastrar
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;

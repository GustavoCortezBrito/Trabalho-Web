import { Link } from "react-router-dom"

function Login() {
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-20 text-2xl mb-2 font-bold">Login de Usuario</h1>
            <div className="border-2 rounded-2xl shadow-lg border-black border-solid  mb-36 p-10">
                <form className="flex flex-col items-center my-3">
                    <div className="flex flex-col items-start w-fit">
                    <label className="text-xl">UserName:</label>
                    <input placeholder="UserName" className="mt-2 min-w-[18em] h-9 px-3 text-lg bg-[#f3f3f3] border-0 rounded-[4px] mb-8 focus:outline-none focus:shadow-md"></input>

                    <label className="text-xl">Senha:</label>
                    <input placeholder="Senha" className="mt-2 min-w-[18em] h-9 px-3 text-lg bg-[#f3f3f3] border-0 rounded-[4px] focus:outline-none focus:shadow-md" ></input>
                    <p className="mb-4 mt-1">Não possui uma conta? <a href="/Cadastro" className="text-yellow-500 hover:border-b-2 hover:border-yellow-400">Crie uma aqui</a></p>
                    <div class="flex space-x-2 justify-center">
                        <Link to='/'><button type="button" class="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md  hover:text- hover:shadow-lg border-2 border-black hover:bg-gray-200">Logar</button></Link>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
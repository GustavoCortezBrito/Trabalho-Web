import { Link } from "react-router-dom";

function Header () {
    return(
        <header>
            <div className="bg-black w-full h-20 m-auto top-0">
                <img src="/logo.png" className="w-[7%] ml-12" alt="logo do header"></img>
                <nav>
                    <ul className="absolute right-10 top-10 hover:cursor-pointer flex items-center justify-center align-middle">
                        <Link to="/"><li className="inline mr-10 text-xs font-bold hover:border-b-2 hover:border-solid border-white text-white"><a href="Teste.js">HOME</a></li></Link>
                        <Link to="/Sobre"><li className="inline mr-10 text-xs font-bold hover:border-b-2 hover:border-solid border-white text-white"><a href="Teste.js">SOBRE</a></li></Link>
                        <Link to="/Contato"><li className="inline mr-10 text-xs font-bold hover:border-b-2 hover:border-solid border-white text-white"><a href="Teste.js">CONTATO</a></li></Link>
                        <Link to="/Editar"><li className="inline mr-10 text-xs font-bold hover:border-b-2 hover:border-solid border-white text-white"><a href="Teste.js">USUARIO</a></li></Link>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="bg-black w-full h-20 m-auto top-0 flex items-center justify-center align-middle">
        <ul className="absolute space-x-10 hover:cursor-pointer">
          <Link to="/Home">
            <li className="inline text-xs md:text-sm font-bold hover:border-b-2 hover:border-solid border-white text-white">
              <a href="Teste.js">HOME</a>
            </li>
          </Link>
          <Link to="/Sobre">
            <li className="inline text-xs md:text-sm font-bold hover:border-b-2 hover:border-solid border-white text-white">
              <a href="Teste.js">SOBRE</a>
            </li>
          </Link>
          <Link to="/Contato">
            <li className="inline text-xs md:text-sm font-bold hover:border-b-2 hover:border-solid border-white text-white">
              <a href="Teste.js">CONTATO</a>
            </li>
          </Link>
          <Link to="/Editar">
            <li className="inline text-xs md:text-sm font-bold hover:border-b-2 hover:border-solid border-white text-white">
              <a href="Teste.js">USUARIO</a>
            </li>
          </Link>{" "}
        </ul>
      </div>
    </header>
  );
};

export default Header;

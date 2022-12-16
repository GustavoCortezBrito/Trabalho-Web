const Produto = ({ props, handleClick }) => {
  return (
    <div className="border-2 border-solid border-black rounded-3xl w-auto h-auto  lg:w-56 text-center cursor-pointer">
      <h1 className=" text-2xl font-semibold">{props.nome}</h1>
      <img src={props.img} alt="imagem" className="w-56"></img>
      <p className=" text-lg">{props.descricao}</p>
      <p className="text-lg font-bold">{props.preco}</p>
      <button
        type="button"
        className=" p-1 m-5 md:p-2 my-2 rounded-2xl bg-amber-300 hover:bg-amber-400 active:bg-amber-500"
        onClick={() => handleClick(props)}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Produto;

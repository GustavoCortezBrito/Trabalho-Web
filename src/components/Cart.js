import React from "react";

export default function Cart(props) {
  return (
    <div>
      <h1>Carrinho de compras!</h1>
      <h1>{props.nome}</h1>
      <img src={props.img} alt="imagem" className="w-56"></img>
      <h1>{props.preco}</h1>
    </div>
  );
}

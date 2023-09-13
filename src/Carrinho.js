import React from 'react';
import carrinhoImg from './img/carrinho.jpg'


const Carrinho = ({ carrinho, removerDoCarrinho }) => {
  return (
    <div className="carrinho">
      <img src={carrinhoImg} alt="Carrinho de Compras" />
      <ul>
        {carrinho.map((item, index) => (
          <li key={index}>
            {item.nome} - R${item.preco.toFixed(2)}
            <button onClick={() => removerDoCarrinho(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrinho;

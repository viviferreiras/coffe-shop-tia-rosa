import React, { useState } from 'react';
import carrinhoImg from './img/carrinho.jpg';

const Carrinho = ({ carrinho, removerDoCarrinho }) => {
  const [mostrarPedido, setMostrarPedido] = useState(false);

  const togglePedido = () => {
    setMostrarPedido(!mostrarPedido);
  };

  return (
    <div className="carrinho">
      <img
        src={carrinhoImg}
        alt="Carrinho de Compras"
        onClick={togglePedido}
        className="carrinho-imagem"
      />
      {mostrarPedido && (
        <div className="visualizacao-pedido">
          <h2>Visualização do Pedido</h2>
          <ul>
            {carrinho.map((item, index) => (
              <li key={index}>
                {item.nome} - R${item.preco.toFixed(2)}
                <button onClick={() => removerDoCarrinho(index)}>Remover</button>
              </li>
            ))}
          </ul>
          <button className="botao-finalizar">Finalizar Pedido</button>
        </div>
      )}
    </div>
  );
};

export default Carrinho;

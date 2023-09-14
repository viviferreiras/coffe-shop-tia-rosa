import React from 'react';

const Produto = ({ produto, adicionarAoCarrinho }) => {
  return (
    <div className="produto">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <p className="preco">R${produto.preco.toFixed(2)}</p>
      <button onClick={() => adicionarAoCarrinho(produto)} className='buttonAdicionar'>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Produto;
import React, { useState } from 'react';
import './App.css';
import Produto from './Produto';
import Carrinho from './Carrinho';
import Home from './components/home';
import Sobre from './components/Sobre/Sobre'


// Importe das imagens
import coffee1 from './img/coffee1.jpg';
import coffee2 from './img/coffee2.jpg';
import coffee3 from './img/coffee3.jpg';
import chocolatequente from './img/chocolatequente.jpg';
import paodequeijo from './img/pao-de-queijo.jpg';
import coxinha from './img/coxinha.jpg';


const App = () => {
  const [carrinho, setCarrinho] = useState([]);
  
  const produtos = [
    {
      nome: 'Café Expresso',
      descricao: 'Café espresso italiano autêntico.',
      preco: 6.99,
      imagem: coffee1,
    },
    {
      nome: 'Café Latte',
      descricao: 'Café com leite cremoso e espuma de leite.',
      preco: 9.99,
      imagem: coffee2,
    },
    {
      nome: 'Mocha',
      descricao: 'Mocha com camada generosa de creme.',
      preco: 12.99,
      imagem: coffee3,
    },
    {
      nome: 'Chocolate Quente',
      descricao: 'Chocolate quente com pedaços de chocolate e raspas de nozes.',
      preco: 19.99,
      imagem: chocolatequente,
    },
    {
      nome: 'Pão de Queijo',
      descricao: 'Pão de queijo com queijo parmesão artesal.',
      preco: 5.99,
      imagem: paodequeijo,
    },
    {
      nome: 'Coxinha',
      descricao: 'Coxinha de frango com catupiry.',
      preco: 15.99,
      imagem: coxinha,
    },
  ];

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  return (
    <div className="App">
      <header>
      <nav>
          <ul>
            <li><a href="./components/home.js">Home</a></li>
            <li><a href="./Produto.js">Produtos</a></li>
            <li><a href="./components/Sobre/Sobre.js">Sobre Nós</a></li>
          </ul>
        </nav>
        <h1>Coffee Shop Tia Rosa</h1>
        <h2>#CAFETERIA</h2>
      </header>
      <main>
        <Home />
              
        {Produto}
        <section className="produtos" id="produtos">
          {produtos.map((produto, index) => (
            <Produto key={index} produto={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
          ))}
        </section>

        {Carrinho}
        <Carrinho carrinho={carrinho} removerDoCarrinho={removerDoCarrinho} />

         {Sobre}
         <Sobre /> 

      </main>
      <footer>
        <div className="footer-content">
          <div className="redes-sociais">
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://twitter.com/home">Twitter</a>
            <a href="https://www.instagram.com/">Instagram</a>
          </div>
          <div className="endereco">
            <p>Av Americanas, 298</p>
            <p>Alexânia, Goiás</p>
            <p>(99) 99999-9900</p>
          </div>
        </div>
        <p>&copy; 2023 Coffee Shops Tia Rosa</p>
      </footer>
    </div>
  );
};


export default App;

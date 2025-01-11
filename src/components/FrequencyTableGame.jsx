import React, { useState } from 'react';
import './FrequencyTableGame.css';

const TabelaFrequencia = () => {
  // Estado para armazenar as respostas do usuário
  const [respostas, setRespostas] = useState({
    frequenciaAbsoluta1: '',
    frequenciaAbsoluta2: '',
    frequenciaAbsoluta3: '',
    frequenciaAbsoluta4: '',
    frequenciaRelativa1: '',
    frequenciaRelativa2: '',
    frequenciaRelativa3: '',
    frequenciaRelativa4: '',
    total: '',
  });
  const [fase, setFase] = useState(1);
  const [showResolucao, setShowResolucao] = useState(false);
  const [resultado, setResultado] = useState(null);

  // Tabelas de dados para cada fase
  const tabelas = [
    {
      dados: [3, 3, 5, 5, 5, 7, 7, 7, 8, 8, 8, 8],
      respostaCorreta: {
        frequenciaAbsoluta: [2, 3, 3, 4],
        frequenciaRelativa: [0.17, 0.25, 0.25, 0.33],
        total: 12,
      },
    },
    {
      dados: [2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6],
      respostaCorreta: {
        frequenciaAbsoluta: [2, 3, 3, 4, 2],
        frequenciaRelativa: [0.14, 0.21, 0.21, 0.29, 0.14],
        total: 14,
      },
    },
  ];

  const tabelaAtual = tabelas[fase - 1];

  // Função para calcular e verificar as respostas
  const verificarRespostas = () => {
    const { frequenciaAbsoluta, frequenciaRelativa, total } = tabelaAtual.respostaCorreta;

    if (
      parseInt(respostas.frequenciaAbsoluta1) === frequenciaAbsoluta[0] &&
      parseInt(respostas.frequenciaAbsoluta2) === frequenciaAbsoluta[1] &&
      parseInt(respostas.frequenciaAbsoluta3) === frequenciaAbsoluta[2] &&
      parseInt(respostas.frequenciaAbsoluta4) === frequenciaAbsoluta[3] &&
      parseFloat(respostas.frequenciaRelativa1) === frequenciaRelativa[0] &&
      parseFloat(respostas.frequenciaRelativa2) === frequenciaRelativa[1] &&
      parseFloat(respostas.frequenciaRelativa3) === frequenciaRelativa[2] &&
      parseFloat(respostas.frequenciaRelativa4) === frequenciaRelativa[3] &&
      parseInt(respostas.total) === total
    ) {
      setResultado('Correto!');
    } else {
      setResultado('Errado! Tente novamente.');
    }
  };

  // Função para passar para a próxima fase
  const proximaFase = () => {
    setFase(fase + 1);
    setRespostas({
      frequenciaAbsoluta1: '',
      frequenciaAbsoluta2: '',
      frequenciaAbsoluta3: '',
      frequenciaAbsoluta4: '',
      frequenciaRelativa1: '',
      frequenciaRelativa2: '',
      frequenciaRelativa3: '',
      frequenciaRelativa4: '',
      total: '',
    });
    setResultado(null);
  };

  // Função para mostrar a resolução
  const mostrarResolucao = () => {
    setShowResolucao(!showResolucao);
  };

  return (
    <div className="game-container">
      <h1>Duvido vc descobrir os campos em branco dessa tabela</h1>

      <div className="sequencia">
        <h2>Sequência de Números: {tabelaAtual.dados.join(', ')}</h2>
        <p>Agora, calcule a frequência absoluta e relativa de cada número para preencher a tabela.</p>
      </div>

      <table className="tabela-frequencia">
        <thead>
          <tr>
            <th>Valor</th>
            <th>Frequência Absoluta</th>
            <th>Frequência Relativa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>
              <input
                type="number"
                value={respostas.frequenciaAbsoluta1}
                onChange={(e) => setRespostas({ ...respostas, frequenciaAbsoluta1: e.target.value })}
                placeholder="Frequência Absoluta"
              />
            </td>
            <td>
              <input
                type="number"
                value={respostas.frequenciaRelativa1}
                onChange={(e) => setRespostas({ ...respostas, frequenciaRelativa1: e.target.value })}
                placeholder="Frequência Relativa"
              />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <input
                type="number"
                value={respostas.frequenciaAbsoluta2}
                onChange={(e) => setRespostas({ ...respostas, frequenciaAbsoluta2: e.target.value })}
                placeholder="Frequência Absoluta"
              />
            </td>
            <td>
              <input
                type="number"
                value={respostas.frequenciaRelativa2}
                onChange={(e) => setRespostas({ ...respostas, frequenciaRelativa2: e.target.value })}
                placeholder="Frequência Relativa"
              />
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <input
                type="number"
                value={respostas.frequenciaAbsoluta3}
                onChange={(e) => setRespostas({ ...respostas, frequenciaAbsoluta3: e.target.value })}
                placeholder="Frequência Absoluta"
              />
            </td>
            <td>
              <input
                type="number"
                value={respostas.frequenciaRelativa3}
                onChange={(e) => setRespostas({ ...respostas, frequenciaRelativa3: e.target.value })}
                placeholder="Frequência Relativa"
              />
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <input
                type="number"
                value={respostas.frequenciaAbsoluta4}
                onChange={(e) => setRespostas({ ...respostas, frequenciaAbsoluta4: e.target.value })}
                placeholder="Frequência Absoluta"
              />
            </td>
            <td>
              <input
                type="number"
                value={respostas.frequenciaRelativa4}
                onChange={(e) => setRespostas({ ...respostas, frequenciaRelativa4: e.target.value })}
                placeholder="Frequência Relativa"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="input-container">
        <input
          type="number"
          value={respostas.total}
          onChange={(e) => setRespostas({ ...respostas, total: e.target.value })}
          placeholder="Total"
        />
      </div>

      <div className="buttons-container">
        <button className="btn verify-btn" onClick={verificarRespostas}>Verificar Respostas</button>
        {resultado && <div className="resultado">{resultado}</div>}
        <button className="btn next-phase-btn" onClick={proximaFase}>Próxima Fase</button>
        <button className="btn show-solution-btn" onClick={mostrarResolucao}>Mostrar Resolução</button>
      </div>

      {showResolucao && (
        <div className="resolucao">
          <h3>Passo a Passo para Resolver:</h3>
          <p>1. Conte quantas vezes cada valor aparece na tabela para calcular a frequência absoluta.</p>
          <p>2. Divida cada frequência absoluta pelo total de dados para encontrar a frequência relativa.</p>
        </div>
      )}
    </div>
  );
};

export default TabelaFrequencia;

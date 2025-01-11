import React, { useState } from 'react';
import '../styles/FrequencyTableGame.css';

const TabelaFrequencia = () => {
  // Estado inicial com respostas corretas
  const [respostas, setRespostas] = useState({
    frequenciaAbsoluta1: '2',
    frequenciaAbsoluta2: '3',
    frequenciaAbsoluta3: '3',
    frequenciaAbsoluta4: '4',
    frequenciaRelativa1: '0.17',
    frequenciaRelativa2: '0.25',
    frequenciaRelativa3: '0.25',
    frequenciaRelativa4: '0.33',
    total: '12',
  });

  const [fase, setFase] = useState(1);
  const [showResolucao, setShowResolucao] = useState(false);
  const [resultado, setResultado] = useState(null);

  // Campos que ficarão em branco
  const [camposEmBranco, setCamposEmBranco] = useState([]);

  // Tabelas de dados para cada fase
  const tabelas = [
    {
      dados: [7, 5, 3, 7, 8, 8, 5, 8, 3, 8, 5, 7],
      respostaCorreta: {
        frequenciaAbsoluta: [2, 3, 3, 4],
        frequenciaRelativa: [0.17, 0.25, 0.25, 0.33],
        total: 12,
      },
    },
    {
      dados: [4, 6, 5, 3, 4, 3, 2, 5, 3, 5, 4, 6, 5, 2],
      respostaCorreta: {
        frequenciaAbsoluta: [2, 3, 3, 4, 2],
        frequenciaRelativa: [0.14, 0.21, 0.21, 0.29, 0.14],
        total: 14,
      },
    },
  ];

  const tabelaAtual = tabelas[fase - 1];

  // Selecionar campos para deixar em branco
  React.useEffect(() => {
    const campos = [
      'frequenciaAbsoluta1',
      'frequenciaAbsoluta2',
      'frequenciaRelativa3',
      'total',
    ]; // Todos os campos possíveis
    setCamposEmBranco(campos.sort(() => Math.random() - 0.5).slice(0, 3));
  }, [fase]);

  const verificarRespostas = () => {
    const { frequenciaAbsoluta, frequenciaRelativa, total } = tabelaAtual.respostaCorreta;

    const respostasCorretas = {
      frequenciaAbsoluta1: String(frequenciaAbsoluta[0]),
      frequenciaAbsoluta2: String(frequenciaAbsoluta[1]),
      frequenciaAbsoluta3: String(frequenciaAbsoluta[2]),
      frequenciaAbsoluta4: String(frequenciaAbsoluta[3]),
      frequenciaRelativa1: String(frequenciaRelativa[0]),
      frequenciaRelativa2: String(frequenciaRelativa[1]),
      frequenciaRelativa3: String(frequenciaRelativa[2]),
      frequenciaRelativa4: String(frequenciaRelativa[3]),
      total: String(total),
    };

    const respostasEstaoCorretas = camposEmBranco.every(
      (campo) => respostas[campo] === respostasCorretas[campo]
    );

    if (respostasEstaoCorretas) {
      setResultado('Correto!');
    } else {
      setResultado('Errado! Tente novamente.');
    }
  };

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

  return (
    <div className="game-container">
      <h1>Complete os Campos em Branco</h1>

      <div className="sequencia">
        <h2>Sequência de Números: {tabelaAtual.dados.join(', ')}</h2>
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
          {tabelaAtual.respostaCorreta.frequenciaAbsoluta.map((_, index) => (
            <tr key={index}>
              <td>{[3, 5, 7, 8][index]}</td>
              <td>
                {camposEmBranco.includes(`frequenciaAbsoluta${index + 1}`) ? (
                  <input
                    type="number"
                    value={respostas[`frequenciaAbsoluta${index + 1}`]}
                    onChange={(e) =>
                      setRespostas({
                        ...respostas,
                        [`frequenciaAbsoluta${index + 1}`]: e.target.value,
                      })
                    }
                  />
                ) : (
                  tabelaAtual.respostaCorreta.frequenciaAbsoluta[index]
                )}
              </td>
              <td>
                {camposEmBranco.includes(`frequenciaRelativa${index + 1}`) ? (
                  <input
                    type="number"
                    value={respostas[`frequenciaRelativa${index + 1}`]}
                    onChange={(e) =>
                      setRespostas({
                        ...respostas,
                        [`frequenciaRelativa${index + 1}`]: e.target.value,
                      })
                    }
                  />
                ) : (
                  tabelaAtual.respostaCorreta.frequenciaRelativa[index]
                )}
              </td>
            </tr>
          ))}
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

      <button className="btn verify-btn" onClick={verificarRespostas}>
        Enviar Respostas
      </button>
      {resultado && <div className="resultado">{resultado}</div>}
      {fase < tabelas.length && (
        <button className="btn next-phase-btn" onClick={proximaFase}>
          Próxima Fase
        </button>
      )}
    </div>
  );
};

export default TabelaFrequencia;

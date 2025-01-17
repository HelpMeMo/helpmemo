import React, { useState } from 'react';
import '../styles/FrequencyTableGame.css';

const TabelaFrequencia = () => {
  const [respostas, setRespostas] = useState({
    frequenciaAbsoluta1: '',
    frequenciaAbsoluta2: '',
    frequenciaAbsoluta3: '3',
    frequenciaAbsoluta4: '4',
    frequenciaRelativa1: '0.17',
    frequenciaRelativa2: '0.25',
    frequenciaRelativa3: '',
    frequenciaRelativa4: '0.33',
    total: '',
  });

  const [fase, setFase] = useState(1);
  const [showResolucao, setShowResolucao] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [camposEmBranco, setCamposEmBranco] = useState([]);

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
    if (resultado === 'Correto!') {
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
      setShowResolucao(false); // Resetar a resolução para a próxima fase
    }
  };

  const reiniciarFase = () => {
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
    setShowResolucao(false); // Resetar a resolução ao reiniciar a fase
  };

  // Função para voltar à primeira fase
  const voltarParaPrimeiraFase = () => {
    setFase(1);
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
    setShowResolucao(false); // Resetar a resolução ao voltar para a fase 1
  };

  const exibirResolucao = () => {
    setShowResolucao(true);
  };

  const fecharNotificacao = () => {
    setShowResolucao(false);
  };

  return (
    <div className="game-container">

      <div className="sequencia">
        <h2>Sequência de números: {tabelaAtual.dados.join(', ')}</h2>
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
  {index === 2 && camposEmBranco.includes(`frequenciaRelativa3`) ? (
    <input
      type="number"
      value={respostas.frequenciaRelativa3}
      onChange={(e) =>
        setRespostas({
          ...respostas,
          frequenciaRelativa3: e.target.value,
        })
      }
    />
  ) : (
    tabelaAtual.respostaCorreta.frequenciaRelativa[index]
  )}
</td>

            </tr>
          ))}
          {/* Linha para Totais */}
          <tr>
            <td>Total</td>
            <td>
              <input
                type="number"
                value={respostas.total}
                onChange={(e) =>
                  setRespostas({
                    ...respostas,
                    total: e.target.value,
                  })
                }
              />
            </td>
            <td>
              ≈ 1
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <button className="btn verify-btn" onClick={verificarRespostas}>
        Enviar respostas
      </button>
      {resultado && <div className="resultado">{resultado}</div>}
      <br />
      <br />

      <button className="btn restart-btn" onClick={reiniciarFase}>
        Reiniciar
      </button>
      {fase < tabelas.length && resultado === 'Correto!' && (
        <button className="btn next-phase-btn" onClick={proximaFase}>
          Próxima fase
        </button>
      )}


      {fase > 1 && (
        <button className="btn back-to-first-phase-btn" onClick={voltarParaPrimeiraFase}>
          Fase anterior
        </button>
      )}

      {resultado === 'Correto!' && (
        <button className="btn show-solucao-btn" onClick={exibirResolucao}>
          Mostrar solução
        </button>
      )}

      {showResolucao && (
        <div className="notification">
          <p><strong>Resolução Simples:</strong></p>
          <p>
            Para calcular a <strong>frequência absoluta</strong>, você deve contar quantas vezes cada número aparece na sequência. Por exemplo, o número 7 aparece 3 vezes, logo sua frequência absoluta é 3.
          </p>
          <p>
            Para calcular a <strong>frequência relativa</strong>, você divide a frequência absoluta de cada número pelo total de elementos da sequência. Por exemplo, se o número 7 aparece 3 vezes em um total de 12, a frequência relativa do 7 será 3 ÷ 12 = 0.25.
          </p>
          <p>
            O <strong>total</strong> é simplesmente a soma de todas as frequências absolutas, que deve ser igual ao número total de elementos da sequência.
          </p>
          <button className="btn close-notification-btn" onClick={fecharNotificacao}>
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default TabelaFrequencia;

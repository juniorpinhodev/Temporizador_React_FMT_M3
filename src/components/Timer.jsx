import { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(5 * 60); // Definir tempo inicial em segundos (5 minutos)
  const [isActive, setIsActive] = useState(false);

  // Função que inicia/pausa o temporizador
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  // Função que reseta o temporizador
  const resetTimer = () => {
    setTime(5 * 60); // Reseta para 5 minutos (300 segundos)
    setIsActive(false);
  };

  // useEffect para controlar o temporizador
  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  // Função para formatar o tempo (minutos e segundos)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Temporizador Simples</h2>
      <div style={{ fontSize: '2rem', margin: '20px 0' }}>
        {formatTime(time)}
      </div>
      <button onClick={toggleTimer}>
        {isActive ? 'Pausar' : 'Iniciar'}
      </button>
      <button onClick={resetTimer} style={{ marginLeft: '10px' }}>
        Resetar
      </button>
    </div>
  );
}

export default Timer;
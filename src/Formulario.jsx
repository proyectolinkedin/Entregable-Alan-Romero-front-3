import React, { useState } from 'react';
import Card from './Card'; // Asumiendo que ya tienes un componente Card creado

function Formulario() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false); // Estado para controlar si se muestra la tarjeta

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (input1.trim().length < 3 || input1.trim().startsWith(' ') || input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
    } else {
      setShowCard(true); // Mostrar la tarjeta si las validaciones pasan
    }
  };

  const handleReset = () => {
    setInput1('');
    setInput2('');
    setError('');
    setShowCard(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: showCard ? '#000' : '#fff', color: showCard ? '#fff' : '#000' }}>
      <div style={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        {!showCard ? (
          <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <div>
              <label>Banda Favorita:</label>
              <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
            </div>
            <div>
              <label>Mejor tema:</label>
              <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
            </div>
            <button type="submit" style={{ margin: '10px', padding: '5px 10px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>Enviar</button>
          </form>
        ) : (
          <div>
            <Card input1={input1} input2={input2} />
            <button onClick={handleReset} style={{ margin: '10px', padding: '5px 10px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>Ingresar nueva información</button>
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Formulario;

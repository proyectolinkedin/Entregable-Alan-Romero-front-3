//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from "react";

function Card({input1, input2}) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2>Información ingresada:</h2>
      <p><strong>Tu Banda Favorita:</strong> {input1}</p>
      <p><strong>El mejor tema es:</strong> {input2}</p>
    </div>
  );
}

export default Card;

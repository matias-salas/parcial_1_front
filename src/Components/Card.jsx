import React from 'react'

const Card = ({ paciente }) => {
  return (
      <div>
          <h3>Datos del paciente:</h3>
          <p><strong>Nombre:</strong> {paciente.nombre}</p>
          <p><strong>Obra social:</strong> {paciente.obraSocial}</p>
      </div>
  );
};


export default Card
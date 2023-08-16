import React, { useState } from 'react';
import styles from './Form.module.css';
import Card from '../Card/Card'

const Form = () => {
    const [paciente, setPaciente] = useState({});
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (paciente.nombre.length >= 3 && paciente.obraSocial.length >= 6) {
        setEnviado(true);
        setError(false);
      } else {
        setError(true);
        setEnviado(false); // Agregar esta línea para asegurarse de que la tarjeta no se muestre en caso de error
      }
    };
  
    return (
      <div className={styles.formContainer}>
        <form>
          <h3 className={styles.formTitle}>Sacar turno</h3>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Nombre :</label>
            <input
              className={styles.formInput}
              type="text"
              onChange={(event) => setPaciente({ ...paciente, nombre: event.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Obra social :</label>
            <input
              className={styles.formInput}
              type="text"
              onChange={(event) => setPaciente({ ...paciente, obraSocial: event.target.value })}
            />
          </div>
  
          <div className={styles.buttonContainer}>
            <button className={styles.formButton} onClick={handleSubmit}>
              Enviar
            </button>
          </div>
  
          <div className={styles.resultContainer}>
            {enviado && (
              <div>
                <h3 className={styles.resultTitle}>Sacaste turno para el día 16/08/2024</h3>
                <Card paciente={paciente} />
              </div>
            )}
            {error && <h3 className={styles.errorMessage}>Por favor chequea que la información sea correcta</h3>}
          </div>
        </form>
      </div>
    );
  };
  

export default Form;

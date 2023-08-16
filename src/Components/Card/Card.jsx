import React from 'react';
import styles from './Card.module.css';

const Card = ({ paciente }) => {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>Datos del paciente:</h3>
      <div className={styles.cardContent}>
        <p>
          <span className={styles.cardProperty}>Nombre:</span> <span className={styles.cardValue}>{paciente.nombre}</span>
        </p>
        <p>
          <span className={styles.cardProperty}>Obra social:</span> <span className={styles.cardValue}>{paciente.obraSocial}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;

import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [paciente, setPaciente] = useState({
        nombre: '',
        obraSocial: ''
    })
    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)

    console.log(paciente)
    
    const handleSubmit = () => {
        if(paciente.nombre.length > 3 && paciente.obraSocial.length > 2) {
            setEnviado(true)
            setError(false)
        } else {
            setError(true)
        }
    }

  return (
    <div>
    <h3>Sacar turno</h3>
    <div>
    <label>Nombre : </label>
    <input
        type="text"
        onChange={(event) => setPaciente({ ...paciente, nombre: event.target.value })}
    />
    </div>
    <div>
    <label>Obra social : </label>
    <input
        type="text"
        onChange={(event) => setPaciente({ ...paciente, obraSocial: event.target.value })}
    />
    </div>
   
    <button onClick={handleSubmit}>Enviar</button>
    {enviado && (
        <div>
            <h3>Sacaste turno para el día 16/08/2024</h3>
            <Card paciente={paciente} />
        </div>
    )}
    {error && <h3 style={{ color: 'red' }}>Por favor llene todos los campos</h3>}
</div>
  )
}

export default Form
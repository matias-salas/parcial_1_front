function App() {
    const [turno, setTurno] = useState({
      form: true // Inicializar en true para mostrar el formulario desde el principio
    });
  
    return (
      <>
        <Card setTurno={setTurno} />
        {turno.form && <Form doctor={turno.doctor} />}
      </>
    );
  }
  
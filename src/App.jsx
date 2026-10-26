import { useState } from 'react'
import './App.css'

function App() {
  const [recetas, setRecetas] = useState([
    { id: 1, nombre: 'Tacos al pastor', ingredientes: 'Tortilla, pastor, piña, cebolla, cilantro' },
    { id: 2, nombre: 'Quesadillas', ingredientes: 'Tortilla, queso' },
  ])

  return (
    <div>
      <h1>RECETARIO</h1>
      <h2>Comida con aura</h2>
      {recetas.map((receta) => (
        <div key={receta.id}>
          <h3>{receta.nombre}</h3>
          <p>{receta.ingredientes}</p>
        </div>
      ))}
    </div>
  )
}

export default App
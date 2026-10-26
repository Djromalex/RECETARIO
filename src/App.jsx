import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [recetas, setRecetas] = useState(() => {
    const guardadas = localStorage.getItem('recetas')
    if (guardadas) return JSON.parse(guardadas)
    return [
      { id: 1, nombre: 'Tacos al pastor', ingredientes: 'Tortilla, pastor, piña, cebolla, cilantro' },
      { id: 2, nombre: 'Quesadillas', ingredientes: 'Tortilla, queso' },
    ]
  })
  const [nombre, setNombre] = useState('')
  const [ingredientes, setIngredientes] = useState('')

  useEffect(() => {
    localStorage.setItem('recetas', JSON.stringify(recetas))
  }, [recetas])

  function agregarReceta(e) {
    e.preventDefault()
    if (nombre.trim() === '') return
    const nueva = { id: Date.now(), nombre, ingredientes }
    setRecetas([...recetas, nueva])
    setNombre('')
    setIngredientes('')
  }

  function borrarReceta(id) {
    setRecetas(recetas.filter((receta) => receta.id !== id))
  }

  return (
    <div>
      <h1>RECETARIO</h1>
      <h2>Comida con aura</h2>

      <form onSubmit={agregarReceta}>
        <input
          placeholder="Nombre de la receta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          placeholder="Ingredientes"
          value={ingredientes}
          onChange={(e) => setIngredientes(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      {recetas.map((receta) => (
        <div key={receta.id}>
          <h3>{receta.nombre}</h3>
          <p>{receta.ingredientes}</p>
          <button onClick={() => borrarReceta(receta.id)}>Borrar</button>
        </div>
      ))}
    </div>
  )
}

export default App
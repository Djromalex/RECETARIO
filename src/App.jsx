import { useState } from 'react'
import './App.css'

const recetas = [
  {
    id: 1,
    nombre: 'Tacos al pastor',
    emoji: '🌮',
    imagen: '/img/tacos.jpg',
    ingredientes: [
      '500 g de carne de cerdo en cortes delgados',
      '3 chiles guajillo',
      '2 cucharadas de achiote',
      '1/2 piña en rebanadas',
      'Tortillas de maíz',
      'Cebolla y cilantro picados',
      'Limón y salsa al gusto',
    ],
    preparacion:
      'Licúa los chiles remojados con el achiote, ajo, vinagre y sal para hacer el adobo. Marina la carne por lo menos 2 horas. Cocina la carne en un sartén caliente hasta que dore y asa la piña. Pica todo en trozos pequeños, sirve sobre las tortillas calientes y agrega cebolla, cilantro, limón y salsa.',
  },
  {
    id: 2,
    nombre: 'Chilaquiles rojos',
    emoji: '🍳',
    imagen: '/img/chilaquiles.jpg',
    ingredientes: [
      '12 tortillas de maíz en triángulos',
      '5 jitomates',
      '3 chiles guajillo',
      '1/4 de cebolla y 1 diente de ajo',
      'Queso fresco y crema',
      'Aceite para freír',
    ],
    preparacion:
      'Fríe los triángulos de tortilla hasta que estén doraditos y resérvalos. Hierve los jitomates con los chiles y licúalos con la cebolla y el ajo. Cocina la salsa en un sartén unos 10 minutos, agrega las tortillas y mezcla un par de minutos para que se bañen. Sirve con queso, crema y cebolla.',
  },
  {
    id: 3,
    nombre: 'Pozole rojo',
    emoji: '🍲',
    imagen: '/img/pozole.jpg',
    ingredientes: [
      '1 kg de maíz cacahuazintle cocido',
      '500 g de carne de cerdo',
      '4 chiles guajillo y 2 chiles ancho',
      '1 cabeza de ajo y 1/2 cebolla',
      'Lechuga, rábanos, orégano y limón',
      'Tostadas',
    ],
    preparacion:
      'Cuece la carne con ajo, cebolla y sal hasta que esté suave. Agrega el maíz. Licúa los chiles remojados con ajo y un poco de caldo, cuela y vierte la salsa al caldo. Deja hervir 30 minutos a fuego bajo. Sirve caliente con lechuga, rábano, orégano, limón y tostadas.',
  },
  {
    id: 4,
    nombre: 'Enchiladas verdes',
    emoji: '🫔',
    imagen: '/img/enchiladas.jpg',
    ingredientes: [
      '12 tortillas de maíz',
      '2 pechugas de pollo cocidas y deshebradas',
      '500 g de tomate verde',
      '3 chiles serranos y cilantro',
      'Crema y queso fresco',
      'Cebolla en rodajas',
    ],
    preparacion:
      'Hierve los tomates con los chiles y licúalos con cilantro, ajo y sal. Pasa cada tortilla por la salsa caliente, rellénala con pollo y enróllala. Acomoda las enchiladas en un plato, báñalas con más salsa y decora con crema, queso y cebolla.',
  },
  {
    id: 5,
    nombre: 'Guacamole',
    emoji: '🥑',
    imagen: '/img/guacamole.jpg',
    ingredientes: [
      '3 aguacates maduros',
      '1 jitomate picado',
      '1/4 de cebolla picada',
      'Cilantro picado',
      '1 chile serrano',
      'Jugo de 1 limón y sal',
    ],
    preparacion:
      'Machaca los aguacates con un tenedor dejando algunos trozos. Agrega la cebolla, el jitomate, el cilantro y el chile bien picados. Exprime el limón, agrega sal y mezcla. Sirve de inmediato con totopos.',
  },
]

function Imagen({ src, emoji }) {
  const [falla, setFalla] = useState(false)
  if (falla) return <div className="emoji">{emoji}</div>
  return <img src={src} alt="" onError={() => setFalla(true)} />
}

function App() {
  const [seleccionada, setSeleccionada] = useState(null)

  return (
    <div>
      <h1>RECETARIO</h1>
      <h2>Comida mexicana con aura</h2>

      <div className="grid">
        {recetas.map((receta) => (
          <div
            key={receta.id}
            className="tarjeta"
            onClick={() => setSeleccionada(receta)}
          >
            <Imagen src={receta.imagen} emoji={receta.emoji} />
            <h3>{receta.nombre}</h3>
          </div>
        ))}
      </div>

      {seleccionada && (
        <div className="fondo" onClick={() => setSeleccionada(null)}>
          <div className="detalle" onClick={(e) => e.stopPropagation()}>
            <button className="cerrar" onClick={() => setSeleccionada(null)}>
              ✕
            </button>
            <Imagen src={seleccionada.imagen} emoji={seleccionada.emoji} />
            <h2>{seleccionada.nombre}</h2>
            <h4>Ingredientes</h4>
            <ul>
              {seleccionada.ingredientes.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            <h4>Preparación</h4>
            <p>{seleccionada.preparacion}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
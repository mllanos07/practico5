import { useState } from "react"
export default function Ejercicio1() {
  const [fruta, setFruta] = useState("")

  const handleFruta = event=> {
    setFruta(event.target.value)
  } 

  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione una fruta: </label>
      <select onChange={handleFruta}>
      <option value=''>Lista de frutas</option>
        <option value='manzana'>Manzana</option>
        <option value='pera'>Pera</option>
        <option value='banana'>Banana</option>
        <option value='sandia'>Sandia</option>
      </select>
      <p>Fruta selecionada: {fruta}</p>
    </div>
  )
}

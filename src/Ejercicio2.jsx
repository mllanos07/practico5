import { useState } from "react";
export default function Ejercicio2() {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (formData.edad >= 18) {
      window.alert('La persona ingresada es mayor de edad');
    } else {
      window.alert ('La persona ingresada es menor de edad');
    }
  };

  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>edad</label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />
        </div>
      </form>
      <button onClick={handleSubmit}>Enviar Formulario</button>
      <p>
        {formData.nombre} tiene {formData.edad} años
      </p>
    </div>
  );
}

import React, { useState, useEffect } from 'react'; // Importar React y los hooks useState y useEffect
import Alert from '../components/Alert.jsx'; // Importar el componente Alert

function Section() {
  const [random1, setRandom1] = useState(); // Estado para el primer número aleatorio
  const [random2, setRandom2] = useState(); // Estado para el segundo número aleatorio
  const [result, setResult] = useState(); // Estado para el resultado de la suma
  const [sumInput, setSumInput] = useState(); // Estado para el input del usuario
  const [alert, setAlert] = useState({}); // Estado para el mensaje de alerta

  // Hook useEffect para generar números aleatorios al montar el componente
  useEffect(() => {
    const num1 = Math.floor(Math.random() * 99); // Generar un número aleatorio entre 0 y 99
    const num2 = Math.floor(Math.random() * 99); // Generar un segundo número aleatorio entre 0 y 99
    setRandom1(num1); // Actualizar el estado con el primer número aleatorio
    setRandom2(num2); // Actualizar el estado con el segundo número aleatorio
    setResult(num1 + num2); // Calcular y actualizar el estado con el resultado de la suma
  }, []); // Dependencias vacías para que se ejecute solo una vez al montar el componente

  // Manejar el evento de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Verificar si el resultado ingresado por el usuario es correcto
    if (Number(sumInput) === result) { // Comparar el valor ingresado por el usuario (convertido a número) con el resultado calculado
      setAlert({
        msg: 'La suma es correcta', // Si los valores coinciden, establecer un mensaje de alerta indicando que la suma es correcta
        error: true // También establecer el valor 'error' en true, lo que podría ser utilizado para estilizar la alerta
      });
    } else {
      setAlert({
        msg: 'La suma es incorrecta', // Si los valores no coinciden, establecer un mensaje de alerta indicando que la suma es incorrecta
        error: false // También establecer el valor 'error' en false, lo que podría ser utilizado para estilizar la alerta
      });
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className='bg-white p-5 rounded-lg shadow-lg'
        >
          <p className='text-center font-bold text-sm md:text-base mb-3'>
            ¿Cuál es el resultado de esta suma?
          </p>
          <div>
            {/* Mostrar los números aleatorios a sumar */}
            <label htmlFor='result'>
              {random1} + {random2} = {''} {/* Mostrar los dos números aleatorios generados y el signo de suma, seguido de un campo de entrada para el resultado */}
            </label>
            <input
              type="text"
              placeholder=' ?'
              id='result'
              className='
                w-24 p-2 mb-7 border-0 border-b-2 border-slate-100
                focus:border-blue-500 focus:outline-none transition duration-500'
              onChange={e => setSumInput(e.target.value)} // Actualizar el estado del input cuando el usuario escribe
            />
          </div>
          <div className='flex justify-center'>
            <input
              type="submit"
              value='Sumar'
              className='
                text-white font-bold rounded-lg p-2 cursor-pointer
                bg-gradient-to-r from-lime-400 to-green-600
                hover:shadow-md hover:shadow-slate-400
              '
            />
          </div>
          {/* Mostrar el componente Alert si hay un mensaje de alerta */}
          {alert.msg && <Alert props={alert} />}
          {/* Renderizar el componente Alert solo si existe un mensaje en el estado 'alert.msg' */}
          {/* Esto asegura que la alerta solo se muestre cuando hay un mensaje definido */}
        </form>
      </div>
    </>
  );
}

export default Section;
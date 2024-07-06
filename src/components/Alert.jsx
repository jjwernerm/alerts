const Alert = ({ props }) => { // Componente Alert que recibe las propiedades 'props'
  return (
    <>
      {/* Contenedor del mensaje de alerta con estilos condicionados */}
      <div className={`
        ${props.error ? 'from-lime-400 to-green-600 ' : 'from-red-400 to-red-600'}
        bg-gradient-to-br text-center font-bold uppercase text-white p-1 mt-5 rounded-md`}

        // Si 'props.error' es true, el degradado será de verde lima a verde
        // Si 'props.error' es false, el degradado será de rojo claro a rojo oscuro
        // El texto del mensaje de alerta será el valor de 'props.msg'

      >
        {props.msg} {/* Mostrar el mensaje de alerta */}
      </div>
    </>
  );
};

export default Alert;
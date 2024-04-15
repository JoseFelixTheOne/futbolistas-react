import PropTypes from 'prop-types';

export const TableRow = ({ futbolista, onClick }) => {
  const handleClick = () => {
    onClick(futbolista.idFutbolista);
  };
  return (
    <tr onClick={handleClick}>
      <td>{futbolista.idFutbolista}</td>
      <td>{futbolista.nombres}</td>
      <td>{futbolista.apellidos}</td>
      <td>{futbolista.fechaNacimiento}</td>
      <td>{futbolista.caracteristicas}</td>
      <td>{futbolista.posicion.nombre}</td>
    </tr>
  );
}

TableRow.propTypes = {
    futbolista: PropTypes.any.isRequired,
    onClick: PropTypes.any
}
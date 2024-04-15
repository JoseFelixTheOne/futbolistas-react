import PropTypes from 'prop-types';

export const Table = ({ children }) => {
  return (
    <div>
      <h1>Futbolistas Pageable</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Fecha de Nacimiento</th>
            <th>Caracteristicas</th>
            <th>Posición</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
    children: PropTypes.any.isRequired
}

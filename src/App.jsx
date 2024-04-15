import { useState, useEffect } from 'react';
import { Table } from './Table';
import { TableRow } from './TableRow';


export const App = () => {
  const [futbolistasPageable, setFutbolistasPageable] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/futbolista?page=${page}&size=${pageSize}`, {
          method: 'GET',
          headers: {
            'Authorization': 'Basic ' + btoa('user:user123')
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFutbolistasPageable(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching pageable futbolistas:', error);
      } finally {
        console.log('Finished fetching pageable futbolistas');
      }
    };

    fetchData();
  }, [page, pageSize]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const findById = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/futbolista/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + btoa('user:user123')
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      alert(`Detalles del futbolista:\nID: ${data.idFutbolista}\nNombre: ${data.nombres} ${data.apellidos}\nFecha de nacimiento: ${data.fechaNacimiento}\nPosición: ${data.posicion.nombre}`);
    } catch (error) {
      console.error('Error fetching futbolista by ID:', error);
    }
  };

  
  return (
    <>
      <Table>
        {futbolistasPageable.map(futbolista => (
          <TableRow key={futbolista.idFutbolista} futbolista={futbolista} onClick={ () => findById(futbolista.idFutbolista)} />
        ))}
      </Table>

      <div>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 0}>Previous Page</button>
        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages - 1}>Next Page</button>
      </div>
    </>
  );
}

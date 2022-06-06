import Table from './Table/Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableHead from './Table/TableHead';
import countries from '../countries.json';

const App = () => {
  const columns = ['Id', 'Nombre'];
  const rows = () =>
    countries.reduce((acc, country) => {
      acc.push({
        "id": country.cca2,
        "name": country.name.common
      })
      return acc;
    }, []);

  return <>
    <h1>React Course</h1>
    <Table>
      <TableHead>
        <TableColumns columns={columns} />
      </TableHead>
      <TableBody rows={rows()} />
    </Table>
  </>;
}

export default App;

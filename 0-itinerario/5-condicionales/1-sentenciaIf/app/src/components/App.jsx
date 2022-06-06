import Table from './Table';
import TableBody from './Table/TableBody';
import TableColumns from './Table/TableColumns';
import TableHead from './Table/TableHead';

const App = () => {
  const columns = ['Id', 'Nombre'];
  const rows = [];

  const checkEmptyTable = () => {
    if (!rows.length) {
      return <NoContentInTable />;
    }
    return <Table>
      <TableHead>
        <TableColumns columns={columns} />
      </TableHead>
      <TableBody rows={rows} />
    </Table>;
  }

  const NoContentInTable = () =>
    <span>La tabla está vacia.</span>;


  return <>
    <h1>React Course</h1>
    {checkEmptyTable()}
  </>;
}

export default App;
import PropTypes from 'prop-types';
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ title }) => 
  <>
    <h1>{ title }</h1>
    <table>
      <TableHead />
      <TableBody />
    </table>
  </>;

Table.propTypes = {
  title: PropTypes.string.isRequired
}

export default Table;

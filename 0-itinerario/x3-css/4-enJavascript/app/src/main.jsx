import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'

const StyledTable = styled.table`
  background-color: gray
`;

ReactDOM.createRoot(
  document.getElementById('root'))
  .render(
    <>
      <h1>Título</h1>
      <StyledTable>
        <table>
          <thead>
            <tr>
              <th>Título columna</th>
              <th>Título columna</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Valor de Celda</td>
              <td>Valor de Celda</td>
            </tr>
            <tr>
              <td>Valor de Celda</td>
              <td>Valor de Celda</td>
            </tr>
          </tbody>
        </table>

      </StyledTable>
    </>
  );

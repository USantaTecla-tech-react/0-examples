import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(
  document.getElementById('root'))
    .render(
      React.createElement("table", null, 
        React.createElement("thead", null, 
          React.createElement("tr", null,
            React.createElement("th", null, "Título columna")
          )
        ),
        React.createElement("tbody", null,
          React.createElement("tr", null,
            React.createElement("td", null, "Valor de celda")
          )
        )
      )   
    );

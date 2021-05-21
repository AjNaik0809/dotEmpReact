import logo from './logo.svg';
import './App.css';
//import axios from 'axios'
import React, { useEffect, useState } from "react";

function App() {
  const url = 'https://yza2oma942.execute-api.eu-west-1.amazonaws.com/Prod/api/officeData'

  const [data, setData] = useState([])

  useEffect(() => {
   // axios.get(url).then(json => setData(json.data))
  }, [])

  const renderTable = () => {
    return data.map(user => {
      return (
        <tr alig>
          <td>{user.sOfficeName}</td>
          <td>{user.sOfficeAdd}</td>          
        </tr>
      )
    })
  }


  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit1  <code>src/App.js</code> and save to reload.
        </p>

        <p>
        <h1 id="title"> Table 1</h1><table id="users"> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table></p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        
        </a>
      </header>
      
      
    </div>
  );
}

export default App;

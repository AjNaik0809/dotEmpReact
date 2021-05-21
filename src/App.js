import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from "react";

function App() {
  const urlGetData = 'https://yza2oma942.execute-api.eu-west-1.amazonaws.com/Prod/api/officeData'
  const urlPostData = 'https://yza2oma942.execute-api.eu-west-1.amazonaws.com/Prod/api/officeData'

  const [data, setData] = useState([])
  const [Office_Name, setOffice_Name] = useState('')
  const [Office_Add, setOffice_Add] = useState('')

  useEffect(() => {
   axios.get(urlGetData).then(json => setData(json.data))
  }, [])

  const renderTable = () => {
    return data.map(user => {
      return (
        <tr >
          <td>{user.sOfficeName}</td>
          <td>{user.sOfficeAdd}</td>          
        </tr>

      )
    })
  }

  function handleSubmit() {
      console.log(Office_Name + " " + Office_Add)

    axios({
    method: 'post',
    url: 'https://yza2oma942.execute-api.eu-west-1.amazonaws.com/Prod/api/officeData',
    headers: {
        'Content-Type': 'application/json'
             },
        data: {
            sOfficeName: Office_Name,
            sOfficeAdd: Office_Add           

    }
}).then(response => {
  fetchAllData();
    
    })
    .catch(error => {
        console.log(error)
    });
  }

function fetchAllData()
{
  setOffice_Name('')
  setOffice_Add('')
  axios.get(urlGetData).then(json => setData(json.data))
}

  const renderAddNewRow = () => {    
      return (
        <tr >
          <td><input type="text"  value={Office_Name} onChange={e => updateOfficeName(e.target.value)} /></td>
          <td><input type="text"  value={Office_Add}  onChange={e => updateOfficeAdd(e.target.value)} /></td> 
          <td><button value={"example"} onClick={handleSubmit} > Save </button> </td>         
        </tr>
      )
  }

  function updateOfficeName(eventvalue)
  {
    setOffice_Name(eventvalue);
  }

  function updateOfficeAdd  (eventvalue)
  {
    setOffice_Add(eventvalue);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
       
        <table id="users"> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>          
          {renderTable()}
          {renderAddNewRow()}
          </tbody>
      </table></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 1
        </a>
      </header>
    </div>
  );
}

export default App;

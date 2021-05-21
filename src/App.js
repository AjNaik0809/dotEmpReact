import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const url = 'https://yza2oma942.execute-api.eu-west-1.amazonaws.com/Prod/api/officeData'

  const [data, setData] = useState([])

  useEffect(() => {
   axios.get(url).then(json => setData(json.data))
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

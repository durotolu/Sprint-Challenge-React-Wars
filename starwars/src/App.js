import React from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters'

const api = 'https://swapi.co/api/people/';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  let [arrayApis, setarrayApis] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(api)
    .then((response) => {
      setarrayApis(response.data.results);
    })
    .catch((error => {
      console.log('error')
    }))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;

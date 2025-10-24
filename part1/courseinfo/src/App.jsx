import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
  }, []);
  console.log(persons);
  return (
    <div>

    </div>
  )
}

export default App
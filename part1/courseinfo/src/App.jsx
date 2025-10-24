import { useState } from 'react'

const Filter = (props) => {
  return (
    <div>
      filter shown with <input onChange={props.onChange} value={props.value}/>
    </div>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
        <div>
          name: <input onChange={props.onChange1} value={props.value1}/>
        </div>
        <div>
          number: <input onChange={props.onChange2} value={props.value2}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

const Persons = (props) => {
  return (
    <ul>
      {props.filter ?props.result.map(re => <li key={props.result.length+1}>{re.name} {re.number}</li>):props.persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
    </ul>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setnewNumber] = useState('');
  const [filter, setFilter] = useState ('');

  const handleNameSave = (e) => {
    e.preventDefault();
    const nameExists = persons.some(person => person.name === newName);
    if (nameExists) {
      alert (`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
    setNewName('');
    setnewNumber('');
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setnewNumber(e.target.value);
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    
  }
  const result = persons.filter(person => person.name.toLowerCase().startsWith(filter.toLowerCase()));
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange = {handleFilterChange} value = {filter}/>
      <h2>add a new</h2>
      <PersonForm onSubmit={handleNameSave} onChange1 = {handleNameChange} onChange2 = {handleNumberChange} value1 = {newName} value2 = {newNumber}/>
      <h2>Numbers</h2>
      <Persons result ={result} persons = {persons} filter = {filter} />
    </div>
  )
}

export default App
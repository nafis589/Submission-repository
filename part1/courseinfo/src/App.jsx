import {useState} from 'react'

const StatiscLine = (props) => {
  if (props.text === "positive"){
    return (
      <p>{props.text} {props.value} %</p>
    )
  }
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) =>{
  const all = props.good + props.neutral + props.bad;
  const average =(props.good - props.bad)/all;
  const positive = (props.good/all)*100;

  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatiscLine text = "good" value ={props.good} /></td>
          </tr>
          <tr>
            <td><StatiscLine text = "neutral" value ={props.neutral} /></td>
          </tr>
          <tr>
            <td><StatiscLine text = "bad" value ={props.bad} /></td>
          </tr>
          <tr>
            <td><StatiscLine text = "all" value ={all} /></td>
          </tr>
          <tr>
            <td><StatiscLine text = "average" value ={average} /> </td>
          </tr>
          <tr>
            <td><StatiscLine text = "positive" value ={positive} /> </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Button  = (props) =>{
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text ="good" />
      <Button onClick={handleNeutralClick} text ="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div> 
  )
}

export default App
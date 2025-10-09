import React from 'react'
const App = () => {
  const course = 'Half Stack application development'

  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10,
  },
  {
    name: 'Using props to pass data',
    exercises: 7,
  },
  {
    name: 'State of a component',
    exercises: 14,
  }
  ];

const Header = (props)=>{
    return (
      <h1>{props.course}</h1>
    )
  }

  const Part = (props)=>{
    return (
      props.parts.map(part=><p>{part.name} {part.exercises}</p>)
    )
  }

const Content = (props)=>{
    return (
      <div>
        <Part parts={props.parts}/>
      </div>
    )
  }

  const Total = (props) =>{ 
    let total=0;
    props.parts.map(part=>total+=part.exercises)
    return (
      <p>Number of exercices {total}</p>
    )
  }
  return (
    <div>
      <Header course= {course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
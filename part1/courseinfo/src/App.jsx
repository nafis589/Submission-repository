import React from 'react'
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
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
  ],
  }
  


const Header = (props)=>{
    return (
      <h1>{props.course.name}</h1>
    )
  }

  const Part = (props)=>{
    return (
      props.course.parts.map(part=><p key={part.name}>{part.name} {part.exercises}</p>)
      
    )
  }

const Content = (props)=>{
    return (
      <div>
        <Part course={props.course}/>
      </div>
    )
  }

  const Total = (props) =>{ 
    let total=0;
    props.course.parts.map(part=>total+=part.exercises)
    return (
      <p>Number of exercices {total}</p>
    )
  }
  return (
    <div>
      <Header course= {course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
import React from 'react'

export default function FactsComponent(props){
  return (
    <div className="facts-component-wrapper">
      <h1>{props.stats}</h1>
      <h3>{props.description}</h3>
      <p>{props.date}</p>
    </div>
  )
}
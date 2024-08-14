import React from 'react'

export default function ValuesComponent(props){
  return (
    <div className="values-wrapper">
    <p>{props.message}</p>
    </div>
  )
}
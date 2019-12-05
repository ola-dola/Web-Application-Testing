import React from 'react';

export default function Display(props) {
  return (
    <div className="display">
      <h2>Strikes: {props.count.strikes}</h2>
      <h2>Balls: {props.count.balls}</h2>
    </div>
  )
}
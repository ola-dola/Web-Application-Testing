import React from "react";

export default function Dashboard({count, setCount}) {
  const handleStrike = event => {
    if (count.strikes === 3) {   
      setCount({
        strikes: 0,
        balls: 0
      })
    }
    if (count.strikes < 3) {
      setCount({
        ...count,
        strikes: count.strikes + 1
      });
    }   
  }

  const handleBall = event => {
    if (count.balls === 4) {
      setCount({
        strikes: 0,
        balls: 0
      });
    }
    if (count.balls < 3) {
      setCount({
        ...count,
        balls: count.balls + 1
      });
    }
  }

  const handleFoul = event => {
    while (count.strikes < 2) {
      setCount({
        ...count,
        strikes: count.strikes + 1
      })
    }
  }

  const resetCount = event => {
    setCount({
      balls: 0,
      strikes: 0
    })
  }

  return (
    <div>
      <button onClick={handleStrike}>Strike</button>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleFoul}>Foul</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

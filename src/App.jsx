import React, { useEffect } from "react";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = React.useState([]);
  const [gameOn, setGameOn] = React.useState(false);

  function roll() {
    const randomDice = [];
    if (!gameOn) {
      //when starting the game, for loop will populate the dice array with random die objects
      for (let i = 0; i < 10; i++) {
        randomDice.push({
          id: i,
          value: Math.ceil(Math.random() * 6),
          on: false,
        });
      }
      setDice(randomDice);
      setGameOn(true);
    } else {
      //condition met every roll but the first, randomizing non selected dice
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.on === false
            ? { ...die, value: Math.ceil(Math.random() * 6) }
            : die
        )
      );
    }
  }

  // Function to check if all values are the same
  const allEqualDice = () => {
    const firstValue = dice[0].value; // Get the first value for comparison
    for (let i = 1; i < dice.length; i++) {
      if (dice[i].value !== firstValue) {
          return ; // Return false if any value is different
      }
  }
  setGameOn(false)
    return <Confetti/>; // All values are the same
  };

  function freeze(event, id) {
    setDice((prevArray) =>
      prevArray.map((die) => (die.id === id ? { ...die, on: !die.on } : die))
    );
    allEqualDice();
  }

  function Display() {
    return (
      <div className="dice">
        {dice.map((die, index) => (
          <button
            key={index}
            className={die.on === true ? `dice--each selected` : `dice--each`}
            onClick={(event) => {
              freeze(event, index);
            }}
          >
            {die.value}
          </button>
        ))}
      </div>
    );
  }

  return (
    <main className="main">
      <div className="tenzies">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all die are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <Display />
        {!gameOn && dice && <Confetti/>}
        
        <button className="rollButton" onClick={roll}>
          {gameOn ? "Roll" : "New Game"}
        </button>
      </div>
    </main>
  );
}

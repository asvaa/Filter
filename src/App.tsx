import React, { useState } from 'react';
import './App.css';

type FilterType = "all" | "dollar" | "ruble"


function App() {

  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])
  console.log((setMoney))
  const [filter, setFilter] = useState<FilterType>("all")


  let currentMoney = money;
  if (filter === "dollar") {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
  }

  if (filter === "ruble") {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
  }

  const oncklikFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
  }

  return (
    <>
      <ul>
        {currentMoney.map((objectMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objectMoneyArr.banknots}</span>
              <span>{objectMoneyArr.value}</span>
              <span>{objectMoneyArr.number}</span>
            </li>
          )
        })}
      </ul>
      <div style={{ marginLeft: "35px" }}>
        <button onClick={() => oncklikFilterHandler("all")}>all</button>
        <button onClick={() => oncklikFilterHandler("ruble")}>rubles</button>
        <button onClick={() => oncklikFilterHandler("dollar")}>dollars</button>
      </div>
    </>


  );
}

export default App;

import "./App.css";
import { useState, useEffect } from "react";
import Hut from "./hut.png";

function App() {
  const [money, setMoney] = useState(0);
  const [pizza, setPizza] = useState(0);

  useEffect(() => {
    setPizza(money / 20);
  }, [money]);

  return (
    <div className="App">
      <div className="flex flex-col bg-slate-600 w-screen h-screen justify-center align-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <img src={Hut} alt="Pizza Hut logo" width={200} />
          <span className="text-5xl text-white">Conversor</span>
        </div>
        <div className="flex justify-center">
          <div className="flex bg-white p-1 rounded items-center">
            <span>R$</span>
            <input
              type="number"
              className="p-1 focus:outline-none "
              onChange={(e) => setMoney(e.target.value)}
              placeholder="200"
            />
          </div>
        </div>
        <span className="text-2xl text-white">{pizza} pizzas</span>
      </div>
    </div>
  );
}

export default App;

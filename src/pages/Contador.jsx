import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div className="Contador">
      <div className="Content">
        <h1 className="flex-1 text-9xl">{count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-sky-500 p-3 hover:bg-sky-800 hover:text-white rounded-md text-lg tracking-widest"
        >
          Aumentar
        </button>
        <button onClick={() => setCount(0)} className="bg-sky-500 p-3 rounded-md text-lg tracking-widest hover:bg-sky-800 hover:text-white">
          Resetear
        </button>
      </div>
    </div>
  );
}

export default Contador;

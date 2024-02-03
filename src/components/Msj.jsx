import { useState, useEffect } from "react";

const Msj = () => {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <div>
      <input type="text" onChange={(e) => setMensaje(e.target.value)} />
      {/* <h1>{mensaje}</h1> */}
      <button
        onClick={() => {
          alert("el msj es: " + mensaje);
        }}>
        Save
      </button>

      <hr />

        <h1>Counter: {counter}</h1>
      <button onClick={() => {
        setCounter(counter+1)
      }}>
        Incrementar
      </button>
    </div>
  );
};
export default Msj;

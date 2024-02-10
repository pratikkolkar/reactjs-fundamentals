import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");

const applyColor =(col)=>{
  setColor(col)
}

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
          <button type="button" className="rounded-none bg-red-400 w-48 h-12" onClick={() => applyColor("red")}>RED</button>
          <button type="button" className="rounded-none bg-green-400 w-48 h-12" onClick={() => applyColor("green")}>Green</button>
          <button type="button" className="rounded-none bg-yellow-400 w-48 h-12" onClick={() => applyColor("yellow")}>Yellow</button>
          <button type="button" className="rounded-none bg-blue-400 w-48 h-12" onClick={() => applyColor("blue")}>Blue</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;

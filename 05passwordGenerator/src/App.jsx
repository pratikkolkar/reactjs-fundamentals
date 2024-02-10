import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState();

  // for highlighting password selection for copy
  const passwordRef = useRef(null);

  //optimize passowrd generator function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "0123456789";
    if (isChar) str += "!@#$%^&*-_+=[]{}~`";

    for (let index = 0; index <= length; index++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, isNumber, isChar, setPassword]);

  // optimize copy
  const copyToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //
  useEffect(passwordGenerator, [length, isNumber, isChar, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div>
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            value={password}
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyToClip}
          >
            copy
          </button>
        </div>
        <div>
          <input
            type="range"
            value={length}
            max={50}
            min={0}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={isNumber}
            onChange={() => setIsNumber((prev) => !prev)}
          />
          <label>Number</label>
        </div>

        <div>
          <input
            type="checkbox"
            value={isChar}
            onChange={() => setIsChar((prev) => !prev)}
          />
          <label>Character</label>
        </div>
      </div>
    </>
  );
}

export default App;

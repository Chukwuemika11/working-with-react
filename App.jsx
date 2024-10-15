import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function App() {
  const [count, setCount] = useState(0)
  const [showDialogue, setShowDialogue] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  function handleClick(){
    setShowDialogue(!showDialogue);
  }

  function togglePasswordVisibility(){
    setPasswordVisible(!passwordVisible);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

           <button onClick={handleClick}>click me</button>
           {!showDialogue ? (
            <p>click the above</p>
           ) :(
            <button>I was clicked!</button>
           ) }


           <input 
           type={passwordVisible ? 'text' : 'password'}
           placeholder='input your password'
           classname="mt-1 block w-full px-3 py-2 border"
           />
            <div className="absolute right-3 top-11 transform -translate-y-1/2">
          {passwordVisible ? (
            <FaRegEye onClick={togglePasswordVisibility}/>
          ):
          (
            <FaRegEyeSlash onClick={togglePasswordVisibility}/>
          )
          }
          </div>
    </>  
  )
}

export default App

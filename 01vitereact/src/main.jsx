import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <h1>My App in Vite</h1>
    )
}


const domElement = <h1>Dom Element</h1>

const reactElememt = React.createElement(
  'a',
  {href:"https://google.com", target: "_blank"},
  "Click me to visit google",
  "!!!"
)

    // <App /> -> Standard way of rendering component
    // MyApp() -> we can also pass function but not recommended convention
    // domElement -> we can pass html elements directly
    // reactElememt -> we can pass react element directly as mentioned above
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    // MyApp() 
    // domElement 
    // reactElememt

)

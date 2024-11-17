import './App.css'
import Searchbox from "./searchbox"

function App() {

  return (
    <>
      <div className="ext">
        {/* extension title */}
        <header className='ext-header'>
        <a href="https://stackoverflow.com" target="_blank">
          <img src="./stackoverflow.png" className="logo" alt="stack logo" />
        </a>
        <h1>Stackoverflow Extension</h1>
      </header>
      {/* searchbox component */}
      <div className="ext-searchbox">
        <Searchbox />
      </div>
      </div>
      
    </>
  )
}

export default App

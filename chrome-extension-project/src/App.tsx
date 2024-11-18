import './App.css'
import Searchbox from "./searchbox"
import Header from "./Header"
import Tabs from "./tabs"

function App() {
  

  return (

    <div id="ext">
    {/* extension title */}
      <Header /><hr/>
    {/* searchbox component */}
    <div className='content' >
      <div className="ext-searchbox" style={{ marginBottom: "20px" }} >
      <Searchbox />
      </div>
      {/* tabs */} 
      <div className='ext-tabs' style={{ marginBottom: "20px" }}>
        <Tabs />
      </div>

    </div>
   </div>
    
  );
}

export default App

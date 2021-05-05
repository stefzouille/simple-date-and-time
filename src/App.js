
import Time from './components/Time'
import "bootstrap/dist/css/bootstrap.css"
  // import './App.css';





function App() {
  return (
    <div className="App mt-50rem text-center">
      <header >
            <div className="py-5">
              <h1>JUST A SIMPLE DATE AND HOUR :</h1> 
              <p>By c0c0nut 0x9</p>
              <p className="text-success fs-3 mt-30rem">Have a nice day !</p>
          </div>
        <section className="text-danger fs-1">
            <hr/>
          <div className="mb-50rem mb-50rem">
            <p className="text-secondary">today we are :</p>
              <Time />
          </div>
        </section> 
          <hr/>
      </header>
       
      
      
    

    </div>
  );
}

export default App;
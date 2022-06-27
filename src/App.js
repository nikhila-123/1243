
import './App.css';
import './style.css';
import './index.css';
import script from './script';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      
      <Header></Header>
        <div id="cards">
            <div className="card">
                <h1 className="title">title</h1>
                
                <p>description</p>
                <p className="receipe">receipe</p>
                <p className="price">price</p> 
            </div>
        </div>
        
    </div>
   
  );
}

export default App;

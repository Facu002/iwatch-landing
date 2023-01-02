import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import ProductNav from './components/ProductNav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <ProductNav/>
      <Home/>
    </div>
  );
}

export default App;

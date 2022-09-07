import logo from './logo.svg';
import './App.css';
import BeerList from './components/Beers-list';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your Best Value Proposition</h1>
        <h2>“If you don’t try this app, you won’t become the superhero you were meant to be”</h2>
      </header>
      <main>
        <BeerList></BeerList>
        </main>
      
    </div>


  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation_bar';
import Body_design from './components/body';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Navigation/>
      <Body_design/>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation_bar';
import Body_design from './components/body';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <BrowserRouter>
      
      <Navigation/>
      {/* <Body_design/> */}
      
      <Routes>
        <Route path="/home" element={<Body_design/>}/>
        <Route path="/header" element={<Header/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

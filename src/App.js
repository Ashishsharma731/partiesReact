import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Navi_bar_header';
import Body_design from './components/body';
import APIget from './components/Getapi';

function App() {
  return (
    <div className="App">
      {/* <APIget/> */}
      <BrowserRouter>
      <Header/>
      
      {/* <Body_design/> */}
      
      <Routes>
        <Route path="/" element={<Body_design/>}/>
        <Route path="/apiget" element={<APIget/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

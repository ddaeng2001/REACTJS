import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom" //가상dom 내부에서 router 위치를 바꿔서 설치 필요 X
    // Router : 경로 설정을 위한 컴포넌트 단위

//컴포넌트 연결
import About from "./06ROUTE/About"
import Home from "./06ROUTE/Home"
import Contact from "./06ROUTE/Contact"

function App() {

  return (
    <div className="App">
      {/* <h1>REACT ROUTE</h1> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact/:name/:age" element={<Contact />}/>
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;

import logo from './logo.svg';
// import './App.css';

//컴포넌트 연결
import Component_01 from './STYLING/01Basic';
import Component_02 from './STYLING/02Scss';
import Component_03 from './STYLING/03BootStrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>09 스타일링</h1>
      {/*  */}
      <Component_01 />
      <hr />
      {/*  */}
      <Component_02 />
      <hr />
      {/*  */}
      <Component_03 />
      <hr />
    </div>
  );
}

export default App;

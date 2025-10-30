import logo from './logo.svg';
import './App.css';

//컴포넌트 연결
import ParentComponent_01 from "./07/01Parent"
import CustomProvider from './07/Provider'
function App() {

  return (
    <CustomProvider>
      {/* Custom Provider로 감싸면서 {children}이 Provider 영역으로 들어오게됨 */}
      <div className="App">
        <h1>컴포넌트 간 통신</h1>

        {/* 부모 -> 자식 전달(Props) */}

        {/* 부모 <- 자식 전달(callback)*/}
        <ParentComponent_01 />
        <hr />
        {/* 컴포넌트간의 데이터 공유 - ContextAPI */}

      </div>
    </CustomProvider>
  );
}

export default App;

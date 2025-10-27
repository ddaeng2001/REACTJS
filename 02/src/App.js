import logo from './logo.svg';
import './App.css';

//컴포넌트 연결
import { Element1, Element2, Element3, Element4, Element5 } from "./02JSX/01_Basic"
import Basic_01 from "./02JSX/01_Basic"
import CustomComponent from "./02JSX/CustomComponent"
import {Component_Event_01, Component_Event_02,Component_Event_03} from "./02JSX/03_Event"

function App() {
  //State - 여러가지 상태 정보값 저장이 가능함
  //컴포넌트 내에서 유지시켜야할 값(state) , 한쪽에서 다른 쪽으로 전달해야될 때의 값(props)
  //상위 컴포넌트에서 하위컴포넌트로 전달할 때의 값을 props라고 함
  //상태 정보값은 해당 컴포넌트 내에서 header에서 표시를 하고 싶다면 header내에 {headerState}를 삽입하면 됨!
  const footerState = "Footer State..."
  const headerState = "Header State..."

  return (
    <div className="App">           {/*{안쪽} : JSON형태 데이터 받아오기 {바깥} : 변수값 처리*/}
      <header className="gnb" style={{ height: "100px", backgroundColor: "red" }}>
        <h1>{headerState}</h1>
      </header>
      <main>
        <section>
          <h1>01_BASIC</h1>
          <div>
            <Element1 />
            <Element2 />
            <Element3 auth={"ROLE_USER"} name={"홍길동"} />
            <Element3 auth={"ROLE_ADMIN"} name={"티모"} />
            <hr />
            <Element4 auth={"ROLE_USER"} name={"김범수"} />
            <hr />
            <Element5 list={["aaa", "bbb", "ccc", "ddd"]} />
            <hr />
            <Basic_01.DefaultComponent1 />
            <Basic_01.DefaultComponent2 />
          </div>
        </section>
        <hr />
        <section>
          <h1>02_CUSTOM_COMPONENT</h1>
          <div>
            {/* default 컴포넌트가 하나면 .을 찍고 들어갈 필요가 없음 */}
            <CustomComponent />
          </div>
        </section>
        <hr />
        <section>
          <h1>03_EVENT_HANDLER</h1>

          <Component_Event_01 />
          <Component_Event_02 />
          <Component_Event_03 />
          
        </section>
      </main>
      <footer>

      </footer>




    </div>
  );
}

export default App;

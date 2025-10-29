//컴포넌트 : 상태값과 처리 작업을 컴포넌트 내에서 처리해줌
//01 클릭했을 때 동작하는 핸들러 생성(외부에서 생성한 함수를 컴포넌트로)
function handleClick_01(){
    console.log("clicked_01...");
}

//이벤트를 연결할 수 있는 버튼 생성
export function Component_Event_01() {
    return (
        <div> {/*1개 초과시 상위태그 최소 1개 필수*/}
            <h2>Component_Event_01...</h2>
            <button onClick={handleClick_01}>CLICK_ME</button>
                    {/*onClick = {함수명} : 이벤트 처리 가능 */}
        </div>
    )
}

export function Component_Event_02() {
    //State

    //Handler : 컴포넌트 내에서 처리해야 할 여러가지 이벤트가 있다면 안에다가 처리
    function handleClick_02(){
        console.log("clicked_02..");
    }


    return (
        <div>
            <h2>Component_Event_02...</h2>
            <button onClick={handleClick_02}>CLICK_ME</button>
        </div>
    )
}



// 키보드가 내려갈 때마다 이벤트 발생
export function Component_Event_03() {
    //State

    //Handler : 컴포넌트 내에서 처리해야 할 여러가지 이벤트가 있다면 안에다가 처리
    function handleKeyDown(event){
        console.log("clicked_03..",event.target.value); //event.target.value:event객체 내의 속성값 가져올 때 사용함
    }

    return (
        <div>
            <h2>Component_Event_03...</h2>
            <input type="text" onKeyDown={handleKeyDown} />
        </div>
    )
}
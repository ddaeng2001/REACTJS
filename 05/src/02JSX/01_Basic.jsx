// 01 기본 JSX요소 생성
export const Element1 = ()=>{return <h2>HELLO WORLD - 1</h2>} //외부에서 사용하기 위해 export 삽입

// 02 Function 예약어
export function Element2()
{
    return <h2>HELLO WORLD -2 </h2>
}

// 03 인자값 받는 요소생성(props - 다 받아낼 수 있음)
export function Element3(props){
    console.log("EL3's props : ", props);
    if(props.auth === "ROLE_ADMIN"){
        return <h2>관리자님 환영합니다, NAME = {props.name}</h2> //props값을 NAME에 띄우고자 할 때는 {} - 변수 안의 값을 꺼낼 때!
    }else if(props.auth === "ROLE_USER"){
        return <h2>유저님 환영합니다, NAME = {props.name} </h2>
    }
}

// 04 인자값 받는 요소생성(props) + 구조분해할당
//{auth,name} = props
export function Element4({auth,name}){
    console.log("EL4's attr : ", auth, name);
    if(auth === "ROLE_ADMIN"){
        return <h2>관리자님 환영합니다, NAME = {name}</h2> //props값을 NAME에 띄우고자 할 때는 {} - 변수 안의 값을 꺼낼 때!
    }else if(auth === "ROLE_USER"){
        return <h2>유저님 환영합니다, NAME = {name} </h2>
    }//기본적으로 return(<부모태그 최소 1개></>)형태이지만 한 줄이면 전부 생략 가능함
}

//05 반복문 사용하기
export const Element5 = (props) => {
    console.log("El5's props : ", props);
    const list = props.list; //["aaa","bbb","ccc","ddd"]
    //배열이기에 배열함수 사용 가능!

    //변수값 확인 시 {} 사용
    return (
        <ul> 
            {list.map((item,idx)=>{
                return <li key={idx}>{item}</li> //각각의 요소를 구분하는 용도로 key={idx}사용 - 반복처리시 구별되는 key값 부여 필수!
            })}
        </ul>
    )

}

//06 기본 컴포넌트 EXPORT
const DefaultComponent1 = ()=>{return <h2>DefaultComponent1</h2>}
const DefaultComponent2 = ()=>{return <h2>DefaultComponent2</h2>}

//이 컴포넌틀르 기본 컴포넌트로 지정하는 방법
export default {
    DefaultComponent1,
    DefaultComponent2
}
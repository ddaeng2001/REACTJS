import {useState,useEffect} from "react"

const MyComponent = () => {
    //state - 상태값 확인
    // let count = 0

    //useState를 사용해서 상태처리 - 분해 처리
    const [count,setCount] = useState(1) // 0 : count의 초기값 지정
                                        //setCount : useState를 쓰게 되면 상태값을 보관하려 하는 상태변수와
                                                    //여기에 맞는 setter함수르 같이 생성해줌(값 변경가능한 set함수)


    //handler
    const handleClick=()=>{
        // count++; //클릭하면 카운트 값 증가시키는 작업
        setCount(count+1)       //비동기 함수
        // console.log(count);     //: 값은 2로 변경이 되었으나 찍히는 시점은 1부터가 됨
    }
    //최초 1회 실행(1회만 랜더링)
    useEffect(()=>{
        console.log("init setting");
    },[]) //[상태값]이 비어있으면 한번만 실행됨

    //count state가 변경될 때마다 실행((변경될 때마다 랜더링 이후 처리 Hook))
    //확인할 상태값은 count!
    useEffect(()=> //상태값이 변경되었을 때 움직이는 로직
        {console.log("count state changed...", count);}, [count]
    ) 


    return (
        <>
            <h2>MyComponent...</h2>
            <button onClick={handleClick}>Btn Count : {count}</button>
        </>
    )
}

export default MyComponent
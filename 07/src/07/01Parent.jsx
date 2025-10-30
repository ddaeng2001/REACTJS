import { useState, useEffect, useContext } from "react"
import Son_01 from "./01Son"
import CustomContext from "./Context"

const Parent_01 = () => {
    const [name,setName] = useState("홍길동")

    const {globalState,setGlobalState} = useContext(CustomContext) //Context변수 중 2개를 꺼내오는 구조분해
    
    const handleChangeName = (name) => { {/*외부로 들어오는 이름을 받아서 set함수*/}
        setName(name)
    }
    return (
        <div>
            <h2>Parent_01 COMPONENT</h2>
            부모 상태값 name : {name}<br/>
            공유 변수 : {globalState}
            <hr/>

            {/*자식에서 부모 상태 바꾸기 */}
            <Son_01 
                user={name}
                onChangeName={handleChangeName}
                />
        </div>
    )
}

export default Parent_01
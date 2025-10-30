import {useState} from 'react'
import CustomContext from "./Context"

const CustomProvider = ({children}) => {

    //전역으로 사용할 예정인 변수
    const [globalState,setGlobalState] = useState("KOREA_GLOBAL")

    return (
        <CustomContext.Provider 
        value={{globalState,setGlobalState}}> {/*공유값을 걸어줄 변수항목 value*/}
            {children}
            {/* 컴포넌트 내부에 포함된 모든 자식 요소를 children이라 명명 */}
        </CustomContext.Provider>
    )
}


export default CustomProvider





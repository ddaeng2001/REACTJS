const Component_02 = ({ isAuth }) => {

    return ( //return안에는 화면에 표시될 렌더링 될 코드들
        <>
            {/* 기본 : {isAuth:():()} */}  {/*한 줄은 ()생략 가능*/}
            {isAuth ? (
                <>
                    <p>로그인완료</p>
                    <p>환영합니다</p>
                </>
            ) : (
                <>
                    <p>로그인실패</p>
                    <p>로그인을 하세요 - !</p>
                </>
            )}
        </>
    )

    // 한 줄로 줄일 경우
    // return isAuth?<p>로그인확인</p> : <p>로그인실패</p>
}

export default Component_02
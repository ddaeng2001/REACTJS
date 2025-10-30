
import Layout from "../layouts/Layout"

const Home = () => {
    console.log("/..")
    return (
        <Layout isShowAside={false}> {/*Side를 넣어줄건지 Layout에 지정 */}
            <h1> HOME PAGE</h1>
            <p> 
                홈페이지 메인 영역입니다 - !
            </p>
        </Layout>
    )
}

export default Home
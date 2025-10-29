import { Link, useParams } from "react-router-dom"

const Contact = () => {
    const { name, age } = useParams()
    // console.log(name,age)
    return (
        <>
            <nav>
                <ul>

                    <Link to="/">Home</Link> {/*Contact에서 Home으로 이동되도록 */}
                    {/* /: 에서 뒤에 ?를 붙일 경우 변수명을 지정하지 않아도 ㄱㅊ함 */}
                    <li> <Link to="/about">ABOUT</Link> </li>
                    <li> <Link to="/contact">CONTACT</Link> </li>


                </ul>
            </nav>
            <h1>CONTACT PAGE</h1>
            <Link to="/">HOME</Link>
        </>
    )
}

export default Contact

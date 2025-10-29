import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
            <h1>HOME PAGE</h1>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about?name=timo&age=100">ABOUT1</Link></li> {/*받는 위치 about.jsx */}
                <li><Link to="/about?name=yumi&age=100">ABOUT2</Link></li>
                <li><Link to="/contact/hyeon/25">CONTACT</Link></li>
            </ul>
        </>
    )

}

export default Home
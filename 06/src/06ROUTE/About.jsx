import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const About = () => {

    const location = useLocation();
    // console.log(location.search)
    const query = new URLSearchParams(location.search)
    console.log(query.get("name"), query.get("age"))
    return (
        <>
            <div>
                <h1>ABOUT PAGE</h1>
                <Link to="/">HOME</Link>
            </div>
            <div>
                Param : {query.get("name")}, {query.get("age")}
            </div>
        </>
    )
}

export default About
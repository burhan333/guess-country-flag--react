import { Link } from "react-router-dom"

const Welcome = () => {
    return(
        <div className="welcome">
            <div className="welcome_inner">
                <div className="welcome_btns">
                    <Link to="/login">LOGIN</Link>
                    <Link to="/home">PLAY AS GUEST</Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem('isLoggedIn')

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }

    return(
        <div className="navBar">
            <div>
                <Link className="navBar_link" to="/home">Home</Link>
                {isLoggedIn && <Link className="navBar_link" to="/profile">Profile</Link>}
                <Link className="navBar_link" to="/leaderboard">Leaderboard</Link>
            </div>
            <div>
                {isLoggedIn ? <a className="navBar_link" href="#" onClick={handleLogout}>Logout</a> : <Link className="navBar_link" to="/login">Login</Link>}
            </div>
        </div>
    )
}

export default Navbar
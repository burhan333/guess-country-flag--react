const Navbar = () => {
    return(
        <div className="navBar">
            <div>
                <a className="navBar_link" href="#">Home</a>
                <a className="navBar_link" href="#">Profile</a>
                <a className="navBar_link" href="#">Leaderboard</a>
            </div>
            <div>
                <a className="navBar_link" href="#">Logout</a>
            </div>
        </div>
    )
}

export default Navbar
import { useState } from "react"
// import { HttpService } from '../../services/HttpService'
 
const ForgetPassword = () => {

    // const httpService = new HttpService()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState(false)
    const [btnClass, setBtnClass] = useState('')

    const handleLogin = async () => {

        if (email === 'admin' && pass === 'ADMIN') {
            localStorage.setItem('isLoggedIn', true)
            window.location.reload()
        }
        else {
            setErr('Login Failed')
        }

        // const data = {
        //     username: email,
        //     password: pass
        // }

        // try {
        //     const response = await httpService.login(data)
        //     if (response.data.message === 'Login successful') {
        //         localStorage.setItem('isLoggedIn', true)
        //         localStorage.setItem('token', response.data.token)
        //         window.location.reload()
        //     }
        // }
        // catch(error) {
        //     if (error?.response?.data?.message === 'Login failed') {
        //         setErr(error.response.data.message)
        //     }
        //     else {
        //         console.log('error in login', error)
        //         setErr('Something Went Wrong')
        //     }
        // }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleLogin()
        }
    }

    const handleHover = () => {
        const toggleClass = () => {
            if (btnClass === 'left') {
                setBtnClass('right')
            }
            else {
                setBtnClass('left')
            }
        }

        if (!email) {
            toggleClass()
        }
    }

    return(
        <div className="login">
            <div className="login_body">
                <div className="login_box">
                    <p className="login_title">FORGET PASSWORD</p>
                    <label>Email</label>
                    <input type="text" placeholder="Email" onKeyDown={(e) => handleEnter(e)} onChange={(e) => setEmail(e.target.value)} />
                    {err && <p className="login_err">{err}</p>}
                    <button className={btnClass} onMouseEnter={handleHover} onClick={handleLogin}>SEND EMAIL</button>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
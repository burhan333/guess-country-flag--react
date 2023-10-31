import { useState } from "react"
import { Link } from "react-router-dom"
import { HttpService } from '../../services/HttpService'
import { alert } from "../../helpers"
 
const Login = () => {

    const httpService = new HttpService()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState(false)
    const [btnClass, setBtnClass] = useState('')

    const handleLogin = async () => {

        const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/
        const isValidEmail = emailRegex.test(email)

        if (!isValidEmail) {
            setErr('Invalid Email')
        }

        else if (pass.length < 6) {
            setErr('Password should be atleast 6 character')
        }

        else {
            const data = {
                email: email,
                password: pass
            }
    
            try {
                setErr('')
                const response = await httpService.login(data)
                if (response.data.status === 'Success') {
                    localStorage.setItem('isLoggedIn', true)
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('userId', response.data._id)
                    window.location.reload()
                }
            }
            catch(error) {
                if (error?.response?.data?.message === 'Auth Failed') {
                    alert('error', 'Invalid email or password')
                }
                else if (error?.response?.data?.message === 'Email is not Verified') {
                    alert('error', 'Kindly Verify your email first')
                }
                else {
                    console.log('error in login', error)
                    alert('error', 'Something Went Wrong')
                }
            }
        }
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

        if (!pass || !email) {
            toggleClass()
        }
    }

    return(
        <div className="login">
            <div className="login_body">
                <div className="login_box">
                    <p className="login_title">LOGIN</p>
                    <label>Email</label>
                    <input type="text" placeholder="Email" onKeyDown={(e) => handleEnter(e)} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder="Password" onKeyDown={(e) => handleEnter(e)} onChange={(e) => setPass(e.target.value)} />
                    {err && <p className="login_err">{err}</p>}
                    <button className={btnClass} onMouseEnter={handleHover} onClick={handleLogin} >LOGIN</button>
                    <div className="login_forget">
                        <div>
                            <Link to="/forget">Forget Password ?</Link>
                        </div>
                        <div>
                            <Link to="/signup">Don't have an account ? Signup.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
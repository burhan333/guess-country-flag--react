import { useState } from "react"
import { Link } from "react-router-dom"
import { HttpService } from '../../services/HttpService'
import { alert } from "../../helpers"
 
const Signup = () => {

    const httpService = new HttpService()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState(false)
    const [btnClass, setBtnClass] = useState('')

    const handleSignup = async () => {
        setErr('')
        const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/
        const nameRegex = /^[A-Za-z'\-]+$/
        const isValidEmail = emailRegex.test(email)
        const isValidName = nameRegex.test(name)

        if (!isValidName) {
            setErr('Name is required')
        }
        else if (!isValidEmail) {
            setErr('Invalid Email')
        }
        else if (pass.length < 6) {
            setErr('Password should be atleast 6 characters')
        }

        else {
            const data = {
                name: name,
                email: email,
                password: pass
            }
    
            try {
                const response = await httpService.signup(data)
                if (response.data.status === 'Success') {
                    alert('success', 'Registered successfully, Go to login page to continue', 10000)
                }
            }
            catch(error) {
                if (error.response.data.message === 'Email Already Exists') {
                    alert('error', 'Email already exist')
                }
                else {
                    alert('error', 'Something Went Wrong')
                    console.log('error in signup', error?.response?.data)
                }
            }
        }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSignup()
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

        if (!pass || !email || !name) {
            toggleClass()
        }
    }

    return(
        <div className="login">
            <div className="login_body">
                <div className="login_box">
                    <p className="login_title">SIGNUP</p>
                    <label>Name</label>
                    <input type="text" placeholder="Name" onKeyDown={(e) => handleEnter(e)} onChange={(e) => setName(e.target.value)} />
                    <label>Email</label>
                    <input type="text" placeholder="Email" onKeyDown={(e) => handleEnter(e)} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder="Password" onKeyDown={(e) => handleEnter(e)} onChange={(e) => setPass(e.target.value)} />
                    {err && <p className="login_err">{err}</p>}
                    <button className={btnClass} onMouseEnter={handleHover} onClick={handleSignup} >SIGNUP</button>
                    <div className="login_forget">
                        <Link to="/login">Already have an account ? Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
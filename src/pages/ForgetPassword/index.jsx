import { useState } from "react"
import { HttpService } from '../../services/HttpService'
import { alert } from "../../helpers"

const ForgetPassword = () => {

    const httpService = new HttpService()
    const [email, setEmail] = useState('')
    const [err, setErr] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [btnClass, setBtnClass] = useState('')

    const handleForget = async () => {

        const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/
        const isValidEmail = emailRegex.test(email)

        if (!isValidEmail) {
            setErr('Invalid Email')
        }

        else {
            setIsDisabled(true)
            const data = {
                email
            }
    
            try {
                const response = await httpService.forgetPassword(data)
                if (response.data.status === 'Success') {
                    alert('success', 'Verification email sent to your email address', 10000)
                    setIsDisabled(false)
                }
            }
            catch(error) {
                if (error?.response?.data?.message === 'Invalid Email') {
                    alert('error', 'Email does not exist')
                    setIsDisabled(false)
                }
                else {
                    console.log('error in forget password', error)
                    setErr('Something Went Wrong')
                    setIsDisabled(false)
                }
            }
        }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleForget()
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
                    <button className={btnClass} onMouseEnter={handleHover} onClick={handleForget} disabled={isDisabled}>SEND EMAIL</button>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
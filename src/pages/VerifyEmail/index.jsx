import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { HttpService } from '../../services/HttpService'
import { alert } from "../../helpers"

const VerifyEmail = () => {

    const httpService = new HttpService()
    const [email, setEmail] = useState('')
    const [OTP, setOTP] = useState('')
    const [err, setErr] = useState(false)
    const [btnClass, setBtnClass] = useState('')
    const navigate = useNavigate()

    const handleOTP = async () => {

        const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/
        const isValidEmail = emailRegex.test(email)

        if (!isValidEmail) {
            setErr('Invalid Email')
        }

        else if (!OTP) {
            setErr('Enter OTP')
        }

        else {
            const data = {
                email,
                OTP
            }
    
            try {
                const response = await httpService.verifyOTP(data)
                if (response.data.status === 'Success') {
                    alert('success', 'Email Verified, Login to continue', 10000)
                    navigate('/login')
                }
            }
            catch(error) {
                if (error?.response?.data?.message === 'Invalid Email') {
                    alert('error', 'Email does not exist')
                }
                else if (error?.response?.data?.message === 'Invalid OTP') {
                    alert('error', 'Invalid OTP')
                }
                else {
                    console.log('error in verify OTP', error)
                    setErr('Something Went Wrong')
                }
            }
        }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleOTP()
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

        if (!OTP) {
            toggleClass()
        }
    }

    return(
        <div className="login">
            <div className="login_body">
                <div className="login_box">
                    <p className="login_title">VERIFY EMAIL</p>
                    <label>Enter Your Email</label>
                    <input type="text" placeholder="Email" onKeyDown={(e) => handleEnter(e)} onChange={(e) => setEmail(e.target.value)} />
                    <label>Enter OTP which you have recieved in your email</label>
                    <input type="text" placeholder="OTP" onKeyDown={(e) => handleEnter(e)} onChange={(e) => setOTP(e.target.value)} />
                    {err && <p className="login_err">{err}</p>}
                    <button className={btnClass} onMouseEnter={handleHover} onClick={handleOTP}>SEND EMAIL</button>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail
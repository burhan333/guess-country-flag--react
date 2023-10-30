import { useState } from "react"
import { HttpService } from '../../services/HttpService'
import { useParams } from "react-router-dom"
import { alert } from "../../helpers"
 
const ResetPassword = () => {

    const httpService = new HttpService()
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [err, setErr] = useState(false)
    const [btnClass, setBtnClass] = useState('')
    const {token} = useParams()

    const handleReset = async () => {

        if (pass.length < 6) {
            setErr('Password should be atleast 6 characters')
        }
        else if (pass !== confirmPass) {
            setErr('Confirm password should be same')
        }
        else {
            const data = {
                resetPasswordLink: token,
                newPassword: pass
            }

            try {
                const response = await httpService.resetPassword(data)
                if (response.data.status === 'Success') {
                    alert('success', 'Password Reset Successfully!')
                }
            }
            catch(error) {
                if (error?.response?.data?.status === 'Failed') {
                    alert('error', 'Invalid or Expired Token')
                }
                else {
                    console.log('error in reset password', error)
                    alert('error', 'Something Went Wrong')
                }
            }
        }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleReset()
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

        if (!pass || !confirmPass) {
            toggleClass()
        }
    }

    return(
        <div className="login">
            <div className="login_body">
                <div className="login_box">
                    <p className="login_title">RESET PASSWORD</p>
                    <label>New Password</label>
                    <input type="password" placeholder="Password" onKeyDown={(e) => handleEnter(e)} onChange={(e) => setPass(e.target.value)} />
                    <label>Re-enter New Password</label>
                    <input type="password" placeholder="Password" onKeyDown={(e) => handleEnter(e)} onChange={(e) => setConfirmPass(e.target.value)} />
                    {err && <p className="login_err">{err}</p>}
                    <button className={btnClass} onMouseEnter={handleHover} onClick={handleReset} >RESET</button>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
import { HttpService } from '../../../services/HttpService'
import { alert } from "../../../helpers"

const ConfirmModal = ({setModal, modal, id, getUserData}) => {

    const httpService = new HttpService()

    const resetScore = async () => {

        const data = {
            _id: id
        }

        try {
            const response = await httpService.resetUserScore(data)
            if (response.data.status === 'Success') {
                getUserData()
                setModal('')
                alert('success', 'Profile Updated')
            }
        }
        catch(error) {
            alert('error', 'Something Went Wrong')
            console.log('error in resetting user score', error)
        }
    }

    const clearHistory = async () => {

        const data = {
            _id: id
        }

        try {
            const response = await httpService.clearUserHistory(data)
            if (response.data.status === 'Success') {
                setModal('')
                alert('success', 'History Cleared!')
            }
        }
        catch(error) {
            alert('error', 'Something Went Wrong')
            console.log('error in clearing history', error)
        }
    }

    const handleConfirm = () => {
        if (modal === 'resetScore') {
            resetScore()
        }
        else if (modal === 'clearHistory') {
            clearHistory()
        }
    }

    return(
        <div className="confirm">
            <div className="confirm_inner">
                <span className="confirm_close" onClick={() => setModal('')}>&#10005;</span>
                <p className="confirm_title">ARE YOU SURE YOU WANT TO DO THIS ?</p>
                <div className="confirm_btn">
                    <button onClick={() => handleConfirm()}>CONFIRM</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
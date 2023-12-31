import { useState, useEffect } from 'react'
import { HttpService } from '../../../services/HttpService'
import { alert } from "../../../helpers"

const UserHistoryModal = ({setModal, id}) => {

    const httpService = new HttpService()
    const [history, setHistory] = useState([])

    useEffect(() => {
        getUserHistory()
    }, [])

    const getUserHistory = async () => {

        const data = {
            _id: id
        }

        try {
            const response = await httpService.getUserHistory(data)
            if (response.data.status === 'Success') {
                if (response.data.data?.length > 0) {
                    setHistory(response.data.data)
                }
            }
        }
        catch(error) {
            alert('error', 'Something Went Wrong')
            console.log('error in getting user history', error)
        }
    }

    const handleDate = (param) => {
        const d = new Date(param)
        const date = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
        return date
    }

    return(
        <div className="history">
            <div className="history_inner">
                <span className="history_close" onClick={() => setModal('')}>&#10005;</span>
                <p className="history_title">USER HISTORY</p>
                {history.length > 0 ? <div className="history_head">
                    <p>LEVEL</p>
                    <p>SCORE</p>
                    <p>DATE</p>
                </div> : 'NO HISTORY FOUND'}
                {history.map((item, index) => (
                    <div key={index} className="history_body">
                        <p>{item.levelType}</p>
                        <p>{item.score}</p>
                        <p>{handleDate(item.time)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserHistoryModal
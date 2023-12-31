import { useState, useEffect } from "react"
import { HttpService } from '../../services/HttpService'
import { alert } from "../../helpers"

import EditProfileModal from "../../components/Modals/EditProfileModal"
import ConfirmModal from "../../components/Modals/ConfirmModal"
import UserHistoryModal from "../../components/Modals/UserHistoryModal"
import Navbar from "../../components/Navbar"

const Profile = () => {

    const httpService = new HttpService()
    const [userData, setUserData] = useState({})
    const [modal, setModal] = useState('')
    const id = localStorage.getItem('userId')

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {

        const data = {
            _id: id
        }

        try {
            const response = await httpService.getUserProfile(data)
            if (response.data.status === 'Success') {
                setUserData(response.data.data)
            }
        }
        catch(error) {
            alert('error', 'Something Went Wrong')
            console.log('error in getting user data', error)
        }
    }

    return(
        <div className="profile">
            {modal === 'edit' && <EditProfileModal getUserData={getUserData} setModal={setModal} id={id} oldName={userData.name} />}
            {(modal === 'resetScore' || modal === 'clearHistory') && <ConfirmModal getUserData={getUserData} setModal={setModal} modal={modal} id={id}/>}
            {modal === 'history' && <UserHistoryModal setModal={setModal} id={id} />}
            <Navbar />
            <p className="profile_title">PROFILE</p>
            <div className="profile_body">
                <div className="profile_info">
                    <div>
                        <p>Name</p>
                        <p>{userData.name}</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <p>{userData.email}</p>
                    </div>
                </div>
                <button className="profile_btn" onClick={() => setModal('edit')}>EDIT PROFILE</button>
                <div className="profile_score">
                    <p className="profile_scoreHeading">TOP SCORE</p>
                    <div>
                        <div>
                            <p>EASY</p>
                            <p>{userData.topScore?.easy ? userData.topScore?.easy : 'N/A'}</p>
                        </div>
                        <div>
                            <p>MEDIUM</p>
                            <p>{userData.topScore?.medium ? userData.topScore?.medium : 'N/A'}</p>
                        </div>
                        <div>
                            <p>HARD</p>
                            <p>{userData.topScore?.hard ? userData.topScore?.hard : 'N/A'}</p>
                        </div>
                    </div>
                </div>
                <button className="profile_btn" onClick={() => setModal('resetScore')}>RESET SCORES</button>
                <div className="profile_score">
                    <p className="profile_scoreHeading">LEVEL STATUS</p>
                    <div>
                        <div>
                            <p>EASY</p>
                            <p>{userData.levelStatus?.easy}</p>
                        </div>
                        <div>
                            <p>MEDIUM</p>
                            <p>{userData.levelStatus?.medium}</p>
                        </div>
                        <div>
                            <p>HARD</p>
                            <p>{userData.levelStatus?.hard}</p>
                        </div>
                    </div>
                </div>
                <button className="profile_btn" onClick={() => setModal('history')}>USER HISTORY</button>
                <button className="profile_btn" onClick={() => setModal('clearHistory')}>CLEAR HISTORY</button>
            </div>
        </div>
    )
}

export default Profile
import EditProfileModal from "../../components/Modals/EditProfileModal"
import ConfirmModal from "../../components/Modals/ConfirmModal"
import UserHistoryModal from "../../components/Modals/UserHistoryModal"
import Navbar from "../../components/Navbar"

const Profile = () => {
    return(
        <div className="profile">
            {/* <EditProfileModal /> */}
            {/* <ConfirmModal /> */}
            {/* <UserHistoryModal /> */}
            <Navbar />
            <p className="profile_title">PROFILE</p>
            <div className="profile_body">
                <div className="profile_info">
                    <div>
                        <p>Name</p>
                        <p>Burhan Ali</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <p>burhan@gmail.cm</p>
                    </div>
                </div>
                <button className="profile_btn">EDIT PROFILE</button>
                <div className="profile_score">
                    <p className="profile_scoreHeading">TOP SCORE</p>
                    <div>
                        <div>
                            <p>EASY</p>
                            <p>90</p>
                        </div>
                        <div>
                            <p>MEDIUM</p>
                            <p>0</p>
                        </div>
                        <div>
                            <p>HARD</p>
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <button className="profile_btn">RESET SCORES</button>
                <div className="profile_score">
                    <p className="profile_scoreHeading">LEVEL STATUS</p>
                    <div>
                        <div>
                            <p>EASY</p>
                            <p>Unlocked</p>
                        </div>
                        <div>
                            <p>MEDIUM</p>
                            <p>Locked</p>
                        </div>
                        <div>
                            <p>HARD</p>
                            <p>Locked</p>
                        </div>
                    </div>
                </div>
                <button className="profile_btn">USER HISTORY</button>
                <button className="profile_btn">CLEAR HISTORY</button>
            </div>
        </div>
    )
}

export default Profile
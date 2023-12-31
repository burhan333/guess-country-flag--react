import { useState, useEffect } from 'react'
import { HttpService } from '../../../services/HttpService'
import { alert } from "../../../helpers"

const EditProfileModal = ({getUserData, setModal, id, oldName}) => {

    const httpService = new HttpService()
    const [name, setName] = useState('')

    useEffect(() => {
        setName(oldName)
    }, [])

    const editProfile = async () => {

        const nameRegex = /^[A-Za-z '\-]+$/
        const isValidName = nameRegex.test(name)

        if (!isValidName) {
            alert('error', 'Invalid Name')
        }
        else {
            const data = {
                _id: id,
                name
            }
    
            try {
                const response = await httpService.editUserProfile(data)
                if (response.data.status === 'Success') {
                    getUserData()
                    setModal('')
                    alert('success', 'Profile Updated')
                }
            }
            catch(error) {
                alert('error', 'Something Went Wrong')
                console.log('error in getting user data', error)
            }
        }
    }

    return(
        <div className="edit">
            <div className="edit_inner">
                <span className="edit_close" onClick={() => setModal('')}>&#10005;</span>
                <p className="edit_title">EDIT PROFILE</p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name || ''} onChange={(e) => setName(e.target.value)} />
                <div className="edit_btn">
                    <button onClick={editProfile}>DONE</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfileModal
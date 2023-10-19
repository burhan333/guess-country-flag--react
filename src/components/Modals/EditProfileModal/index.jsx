const EditProfileModal = () => {
    return(
        <div className="edit">
            <div className="edit_inner">
                <span className="edit_close">&#10005;</span>
                <p className="edit_title">EDIT PROFILE</p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <div className="edit_btn">
                    <button >DONE</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfileModal
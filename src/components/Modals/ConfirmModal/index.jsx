const ConfirmModal = () => {
    return(
        <div className="confirm">
            <div className="confirm_inner">
                <span className="confirm_close">&#10005;</span>
                <p className="confirm_title">ARE YOU SURE YOU WANT TO DO THIS ?</p>
                <div className="confirm_btn">
                    <button >CONFIRM</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
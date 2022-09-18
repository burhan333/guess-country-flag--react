import { connect } from "react-redux"
import { set_step } from "../../../store/action"

const InstructionModal = (props) => {
    return (
        <div className="info">
            <div className="info_inner">
                <p className="info_title">INSTRUCTIONS</p>
                <p className="info_point">You will have to guess 15 flags</p>
                <p className="info_point">You will have about 10 seconds to choose your answer</p>
                <p className="info_point">At the end you will be able to see how much you have scored</p>
                <div>
                    <button className="info_btn" onClick={() => props.set_step(2)}>START</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    set_step: (data) => dispatch(set_step(data)),
})

export default connect(null, mapDispatchToProps)(InstructionModal)
import React, { useState } from "react"
import { connect } from 'react-redux'
import { set_step } from '../../store/action'
import { set_difficulty } from '../../store/action'

import Navbar from "../Navbar"
import InstructionModal from "../Modals/InstructionModal"

const Difficulty = (props) => {

    const [isSelected, setIsSelected] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleDifficulty = (index) => {
        props.set_difficulty(index)
        setIsSelected(true)
    }

    return (
        <div className="difficulty">
            <Navbar />
            <div className="difficulty_inner">
                <p className="difficulty_title">SELECT DIFFICULTY</p>
                <div className="difficulty_btns">
                    <button onClick={() => handleDifficulty(1)} className={props.difficulty === 1 ? 'difficulty_active' : ''}>EASY</button>
                    <button onClick={() => handleDifficulty(2)} className={props.difficulty === 2 ? 'difficulty_active' : ''}>MEDIUM</button>
                    <button onClick={() => handleDifficulty(3)} className={props.difficulty === 3 ? 'difficulty_active' : ''}>HARD</button>
                </div>
                <div>
                    <button className="difficulty_start" disabled={!isSelected} onClick={() => setShowModal(true)}>START</button>
                </div>
            </div>
            {showModal && <InstructionModal />}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    set_step: (data) => dispatch(set_step(data)),
    set_difficulty: (data) => dispatch(set_difficulty(data))
})

const mapStateToProps = (state) => ({
    difficulty: state.data.difficulty
})

export default connect(mapStateToProps, mapDispatchToProps)(Difficulty)
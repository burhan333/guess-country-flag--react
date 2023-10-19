import React from "react"
import { connect } from "react-redux"
import Navbar from "../Navbar"

const Summary = (props) => {

    const score = Math.round(props.score * 100 / 15)

    return (
        <div className="summary">
            <Navbar />
            <div className="summary_inner">
                <h1>You have Scored</h1>
                <h2>{score}%</h2>
                <button onClick={() => window.location.reload()} >BACK TO HOME</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    step: state.data.step,
    score: state.data.score
})

export default connect(mapStateToProps, null)(Summary)
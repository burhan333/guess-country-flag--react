import React from "react"
import { connect } from "react-redux"
// import { set_step } from "../../store/action"

const Summary = (props) => {

    const score = Math.round(props.score * 100 / 15)

    return (
        <React.Fragment>
            <h1>You have Scored</h1>
            <h2>{score}%</h2>
            <button onClick={() => window.location.reload()} >BACK TO HOME</button>
        </React.Fragment>
    )
}

// const mapDispatchToProps = (dispatch) => ({
//     set_step: (data) => dispatch(set_step(data))
// })

const mapStateToProps = (state) => ({
    step: state.data.step,
    score: state.data.score
})

export default connect(mapStateToProps, null)(Summary)
import React from "react"
import { connect } from "react-redux"
import { set_step } from '../../store/action'

const Instructions = (props) => {

    return (
        <React.Fragment>
            <h1>INSTRUCTIONS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, magnam provident voluptas aliquid fuga quibusdam saepe rem voluptatum odit error.</p>
            <button onClick={() => props.set_step(1)}>OKAY</button>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    set_step: (data) => dispatch(set_step(data))
})

export default connect(null, mapDispatchToProps)(Instructions)
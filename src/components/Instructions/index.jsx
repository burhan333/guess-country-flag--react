import React from "react"
import { connect } from "react-redux"
import { set_step } from '../../store/action'

const Instructions = (props) => {

    return (
        <div className="home">
            <div className="home_inner">
                <p className="home_title">Welcome</p>
                <p className="home_desc">This application is about identifying the flags of different countries. By using this application you can increase your knowledge about flags of different countries</p>
                <button className="home_btn" onClick={() => props.set_step(1)}>GET STARTED</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    set_step: (data) => dispatch(set_step(data))
})

export default connect(null, mapDispatchToProps)(Instructions)
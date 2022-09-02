import { useState } from "react"
import { connect } from "react-redux"

import Instructions from "../../components/Instructions"
import Difficulty from "../../components/Difficulty"
import QuestionScreen from "../../components/QuestionScreen"
import Summary from "../../components/Summary"

const Home = (props) => {
    const [step, setStep] = useState(0)

    console.log('props home', props);

    return (
        <div className="home">
            {props.step === 0 && <Instructions />}
            {props.step === 1 && <Difficulty />}
            {props.step === 2 && <QuestionScreen />}
            {step === 3 && <Summary />}
        </div>
    )
}

const mapStateToProps = (state) => ({
    step: state.data.step
})

export default connect(mapStateToProps, null)(Home)
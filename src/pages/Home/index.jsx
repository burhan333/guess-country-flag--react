import { connect } from "react-redux"

import Instructions from "../../components/Instructions"
import Difficulty from "../../components/Difficulty"
import QuestionScreen from "../../components/QuestionScreen"
import Summary from "../../components/Summary"

const Home = (props) => {

    return (
        <div className="home">
            {props.step === 0 && <Instructions />}
            {props.step === 1 && <Difficulty />}
            {props.step === 2 && <QuestionScreen />}
            {props.step === 3 && <Summary />}
        </div>
    )
}

const mapStateToProps = (state) => ({
    step: state.data.step,
    score: state.data.score
})

export default connect(mapStateToProps, null)(Home)
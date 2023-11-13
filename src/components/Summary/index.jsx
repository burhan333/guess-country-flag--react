import { useEffect, useState } from "react"
import { HttpService } from '../../services/HttpService'
import { connect } from "react-redux"
import Navbar from "../Navbar"

const Summary = (props) => {

    const [isDisabled, setIsDisabled] = useState(true)
    const score = Math.round(props.score * 100 / 15)
    const httpService = new HttpService()

    useEffect(() => {
        updateScore()
    }, [])

    const updateScore = async ()  => {
        let levelType
        const id = localStorage.getItem('userId')

        if (props.difficulty === 1) {
            levelType = 'easy'
        }
        else if (props.difficulty === 2) {
            levelType = 'medium'
        }
        else {
            levelType = 'hard'
        }
        const data = {
            _id: id,
            levelType,
            score: props.score
        }

        if (id) {
            try {
                const response = await httpService.updateUserScore(data)
                if (response.data.status === 'Success') {
                    setIsDisabled(false)
                }
            }
            catch(error) {
                console.log('error in updating user score', error);
                setIsDisabled(false)
            }
        }
    }

    return (
        <div className="summary">
            <Navbar />
            <div className="summary_inner">
                <h1>You have Scored</h1>
                <h2>{score}%</h2>
                <button onClick={() => window.location.reload()} disabled={isDisabled} >BACK TO HOME</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    step: state.data.step,
    score: state.data.score,
    difficulty: state.data.difficulty
})

export default connect(mapStateToProps, null)(Summary)
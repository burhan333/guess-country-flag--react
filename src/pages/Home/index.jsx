import {useState} from "react"
import Instructions from "../../components/Instructions"
import Difficulty from "../../components/Difficulty"
import QuestionScreen from "../../components/QuestionScreen"
import Summary from "../../components/Summary"

const Home = () => {
    const [step, setStep] = useState(0)
    const [difficulty, setDifficulty] = useState(0)

    return(
        <div className="home">
            {step === 0 && <Instructions setStep={setStep} />}
            {step === 1 && <Difficulty
                setStep={setStep}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
            />}
            {step === 2 && <QuestionScreen
                difficulty={difficulty}
                setStep={setStep}
            />}
            {step === 3 && <Summary/>}
        </div>
    )
}

export default Home
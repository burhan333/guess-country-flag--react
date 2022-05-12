import { useEffect, useState } from 'react'
import { Questions } from '../../utility/countries'

const QuestionScreen = ({difficulty}) => {

    const [questionNum, setQuestionNum] = useState(0)
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        // const shuffle = Questions[difficulty-1].easy.sort(() => Math.random() - 0.5)
        // shuffle.forEach((item) => {
        //     item.options.sort(() => Math.random() - 0.5)
        // })
        setQuestions(Questions[0].hard)
    }, [])

    // console.log('Questions all', Questions);
    // console.log('difficulty', difficulty);
    // console.log('questions', questions);

    console.log('questionNum', questionNum);

    return(
        <div className="question">
            <img src={questions[questionNum]?.countryFlag} alt="" />
            <button>{questions[questionNum]?.options[0]}</button>
            <button>{questions[questionNum]?.options[1]}</button>
            <button>{questions[questionNum]?.options[2]}</button>
            <button>{questions[questionNum]?.options[3]}</button>
            <div><button onClick={() => setQuestionNum(questionNum+1)}>next</button></div>
        </div>
    )
}

export default QuestionScreen
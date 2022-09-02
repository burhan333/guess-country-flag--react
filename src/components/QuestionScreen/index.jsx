import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { set_step } from '../../store/action'
import { set_difficulty } from '../../store/action'
import { Questions } from '../../utility/countries'

import Runner from '../../assets/images/runner.gif'

const QuestionScreen = (props) => {

    const [questionNum, setQuestionNum] = useState(0)
    const [questions, setQuestions] = useState([])
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (progress === 100) {
            setProgress(0)
            setQuestionNum(questionNum + 1)
        }
    }, [progress]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => prev + 1);
        }, 10000000);
        // else {
        //     clearInterval(interval)
        // }
        return () => {
            clearInterval(interval)
        };
    }, [])

    const nextQuestion = () => {
        setQuestionNum(questionNum + 1)
        setProgress(0)
    }

    const selectAnswer = (param) => {
        console.log('param', param);
    }

    console.log('progress', progress);

    useEffect(() => {
        const index = props.difficulty - 1
        if (index === 0) {
            const shuffle = Questions.easy.sort(() => Math.random() - 0.5)
            shuffle.forEach((item) => {
                item.options.sort(() => Math.random() - 0.5)
            })
            setQuestions(shuffle)
        }
        else if (0 === 1) {
            const shuffle = Questions.medium.sort(() => Math.random() - 0.5)
            shuffle.forEach((item) => {
                item.options.sort(() => Math.random() - 0.5)
            })
            setQuestions(shuffle)
        }
        else {
            const shuffle = Questions.hard.sort(() => Math.random() - 0.5)
            shuffle.forEach((item) => {
                item.options.sort(() => Math.random() - 0.5)
            })
            setQuestions(shuffle)
        }
    }, [])

    // console.log('props', props);

    return (
        <div className="question">
            <div className="question_inner">
                <h1>{questionNum} / 15</h1>
                <div className="question_timer">
                    {/* <img className='question_runner' src={Runner} alt="" /> */}
                    <img className='question_runner' src={Runner} alt="" style={{ left: `${progress}%` }} />
                </div>
                <img src={questions[questionNum]?.countryFlag} alt="" />
                {questions[questionNum]?.options.map((item, index) => (
                    <button key={index} onClick={() => selectAnswer(item)} >{item}</button>
                ))}
                {/* <button>{questions[questionNum]?.options[1]}</button>
                <button>{questions[questionNum]?.options[2]}</button>
                <button>{questions[questionNum]?.options[3]}</button> */}
                <div><button onClick={nextQuestion} disabled>next</button></div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen)
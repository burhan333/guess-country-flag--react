import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { set_step } from '../../store/action'
import { set_difficulty } from '../../store/action'
import { set_score } from '../../store/action'
import { Questions } from '../../utility/countries'

import Navbar from "../Navbar"

import Runner from '../../assets/images/runner.gif'

const QuestionScreen = (props) => {

    const [questionNum, setQuestionNum] = useState(0)
    const [questions, setQuestions] = useState([])
    const [progress, setProgress] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true)
    const [clickIndex, setClickIndex] = useState(-1)
    let interval;

    useEffect(() => {
        if (progress === 100) {
            if (questionNum < 14) {
                nextQuestion()
            }
            else {
                finishQuestion()
            }
        }
    }, [progress])

    useEffect(() => {
        schuffleQuestions()

        interval = setInterval(() => {
            setProgress((prev) => prev + 1);
        }, 100);
        return () => {
            clearInterval(interval)
        };
    }, [])

    const schuffleQuestions = () => {
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
    }

    const nextQuestion = () => {
        setQuestionNum(questionNum + 1)
        setProgress(0)
        setIsDisabled(true)
        setClickIndex(-1)
    }

    const finishQuestion = () => {
        props.set_step(3)
    }

    const selectAnswer = (param, index) => {
        if (param === questions[questionNum].correctAnswer) {
            props.set_score(props.score + 1)
        }
        setClickIndex(index)
        setIsDisabled(false)
        clearInterval(interval)
    }

    return (
        <div className="question">
            <Navbar />
            <div className="question_inner">
                <h1>{questionNum + 1} / 15</h1>
                <div className="question_timer">
                    <img className='question_runner' src={Runner} alt="" style={{ left: `${progress}%` }} />
                </div>
                <div className="question_flag">
                    <img src={questions[questionNum]?.countryFlag} alt="" />
                </div>
                <div className="question_btns">
                    {questions[questionNum]?.options.map((item, index) => (
                        <button className={index === clickIndex ? 'question_selected' : null} disabled={!isDisabled} key={index} onClick={() => selectAnswer(item, index)}>{item}</button>
                    ))}
                </div>
                <div>{questionNum < 14 ? <button className='question_next' onClick={nextQuestion} disabled={isDisabled}>NEXT</button> : <button className='question_next' onClick={finishQuestion} disabled={isDisabled}>FINISH</button>}</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    set_step: (data) => dispatch(set_step(data)),
    set_difficulty: (data) => dispatch(set_difficulty(data)),
    set_score: (data) => dispatch(set_score(data))
})

const mapStateToProps = (state) => ({
    difficulty: state.data.difficulty,
    score: state.data.score
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen)
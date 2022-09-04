const set_step = (step) => {
    return (dispatch) => {
        dispatch({type: 'set_step', payload: step})
    }
}

const set_difficulty = (step) => {
    return (dispatch) => {
        dispatch({type: 'set_difficulty', payload: step})
    }
}

const set_score = (step) => {
    return (dispatch) => {
        dispatch({type: 'set_score', payload: step})
    }
}

export {set_step, set_difficulty, set_score}
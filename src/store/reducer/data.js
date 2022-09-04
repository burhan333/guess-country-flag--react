const INITIAL_STATE = {
    step: 0,
    correctAnswer: 0,
    difficulty: 0,
    score: 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'set_step':
            return({
                ...state,
                step: action.payload
            })

        case 'set_difficulty':
            return({
                ...state,
                difficulty: action.payload
            })

        case 'set_score':
            return({
                ...state,
                score: action.payload
            })
    }
    return state
}
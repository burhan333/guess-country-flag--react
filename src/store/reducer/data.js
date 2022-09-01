const INITIAL_STATE = {
    step: 0,
    correctAnswer: 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'set_step':
            return({
                ...state,
                step: action.data
            })
    }
    return state
}
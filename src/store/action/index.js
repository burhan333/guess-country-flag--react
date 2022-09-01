const set_step = (step) => {
    return(dispatch) => {
        dispatch({type: 'set_step', payload: step})
    }
}

export {set_step}
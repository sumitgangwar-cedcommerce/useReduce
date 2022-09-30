const Reducer = (state , action) => {
    if(action.type === 'Modal'){
        return {...state , [action.type] : !state[action.type]}
    }
    else return {...state ,  [action.type] : action.payload}
}

export default Reducer
const initState = {
    value: '公共默认值'
}

const loverReducer = (state = initState, action) => {
    switch (action.type) {
        case 'add_action':
            return Object.assign({}, state, action)
        default:
            return state
    }
}

module.exports = {
    loverReducer
}
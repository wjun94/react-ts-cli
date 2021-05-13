import { SetData } from './active-type'

const initState = {
  data: [],
}

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case SetData:
      return {
        ...state,
        data: action.data,
      }
    default:
      return state
  }
}

const obj = {
  detailsReducer,
}

export default obj

export const QUACK = 'counter/QUACK'

const initialState = {
  quacking: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case QUACK:
      return {
        ...state,
        quacking: true
      }

    default:
      return state
  }
}

export const quack = () => {
  return dispatch => {
    dispatch({
      type: QUACK
    })
  }
}

export const quackAsync = () => {
  return dispatch => {
    return setTimeout(() => {
      dispatch({
        type: QUACK
      })
    }, 3000)
  }
}

import { formatSessionData } from '../../lib/helpers'
// Action
const GET_SESSION_BEGIN = 'GET_SESSION_BEGIN';
const GET_SESSION_SUCCESS = 'GET_SESSION_SUCCESS';
const GET_SESSION_ERROR = 'GET_SESSION_ERROR';

// Action creator
export const getSessionBegin = () => ({
  type: GET_SESSION_BEGIN
})
export const getSessionSuccess = (session) => ({
  type: GET_SESSION_SUCCESS,
  session: session
})
export const getSessionError = (error) => ({
  type: GET_SESSION_ERROR,
  error: error
})

// Async action creator
export const getSession = () => {
  return (dispatch) => {
    dispatch(getSessionBegin());
    fetch('https://r10app-95fea.firebaseio.com/sessions.json')
    .then(resp => resp.json())
    .then(data => {
      // console.log(data);
      dispatch(getSessionSuccess(formatSessionData(data)));
    })
    .catch(error => {
      dispatch(getSessionError(error));
    })
  }
}

// Reducer
const initialState = {
  isLoading: false,
  sessionData: [],
  errorMsg:'Fail to load'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SESSION_BEGIN:
      return {
        ...state,
        isLoading: true
      }
    case GET_SESSION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sessionData: action.session
      }
    case GET_SESSION_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.error
      }
    default:
      return state;
  }
}
// Action
const GET_CONDUCT_BEGIN = 'GET_CONDUCT_BEGIN';
const GET_CONDUCT_SUCCESS = 'GET_CONDUCT_SUCCESS';
const GET_CONDUCT_ERROR = 'GET_CONDUCT_ERROR';

// Action creator
export const getConductBegin = () => ({
  type: GET_CONDUCT_BEGIN,
});
export const getConductSuccess = (conduct) => ({
  type: GET_CONDUCT_SUCCESS,
  conduct: conduct,
});
export const getConductError = (error) => ({
  type: GET_CONDUCT_ERROR,
  error: error,
});

// Async action creator
export const getConduct = () => {
  return (dispatch) => {
    dispatch(getConductBegin());
    fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
      .then(resp => resp.json())
      .then(data => {
        dispatch(getConductSuccess(data));
      })
      .catch(error => {
        dispatch(getConductError(error));
      });
  };
};

// Reducer
const initialState = {
  isLoading: false,
  conductData: [],
  errorMsg: 'Fail to load',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONDUCT_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CONDUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        conductData: action.conduct,
      };
    case GET_CONDUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.error,
      };
    default:
      return state;
  }
};

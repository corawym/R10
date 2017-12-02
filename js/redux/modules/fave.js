import { queryFaves } from '../../config/models';

// Action
const GET_FAVES_SUCCESS = 'GET_FAVES_SUCCESS';

// Action creator
export const getFavesSuccess = (faves) => ({
  type: GET_FAVES_SUCCESS,
  faves: faves,
});

// Async action creator
export const getFaves = () => {
  return (dispatch) => {
    const allFaveID = queryFaves().reduce((acc, cur) => {
      acc.push(cur.id);
      return acc;
    }, []);
    dispatch(getFavesSuccess(allFaveID));
  };
};

// Reducer
const initialState = {
  favesData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVES_SUCCESS:
      return {
        ...state,
        favesData: action.faves,
      };
    default:
      return state;
  }
};

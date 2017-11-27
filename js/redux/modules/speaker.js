import { formatDataObject } from '../../lib/dataFormatHelpers'
// Action
const GET_SPEAKER_BEGIN = 'GET_SPEAKER_BEGIN';
const GET_SPEAKER_SUCCESS = 'GET_SPEAKER_SUCCESS';
const GET_SPEAKER_ERROR = 'GET_SPEAKER_ERROR';

// Action creator
export const getSpeakerBegin = () => ({
  type: GET_SPEAKER_BEGIN
})
export const getSpeakerSuccess = (speaker) => ({
  type: GET_SPEAKER_SUCCESS,
  speaker: speaker
})
export const getSpeakerError = (error) => ({
  type: GET_SPEAKER_ERROR,
  error: error
})

// Async action creator
export const getSpeaker = (speakerID) => {
  return (dispatch) => {
    dispatch(getSpeakerBegin());
    fetch(`https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerID}"`)
    .then(resp => resp.json())
    .then(data => {
      dispatch(getSpeakerSuccess(formatDataObject(data)));
    })
    .catch(error => {
      dispatch(getSpeakerError(error));
    })
  }
}

// Reducer
const initialState = {
  isLoading: false,
  speakerData: [],
  errorMsg:'Fail to load'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SPEAKER_BEGIN:
      return {
        ...state,
        isLoading: true
      }
    case GET_SPEAKER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        speakerData: action.speaker
      }
    case GET_SPEAKER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.error
      }
    default:
      return state;
  }
}
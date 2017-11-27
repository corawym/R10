import { combineReducers } from 'redux';
import { NavigationReducer } from '@expo/ex-navigation';

import ConductReducer from './modules/conduct';
import SessionReducer from './modules/session';
import SpeakerReducer from './modules/speaker';
import FaveReducer from './modules/fave';

export default combineReducers ({
  navigation: NavigationReducer,
  conduct: ConductReducer,
  session: SessionReducer,
  speaker: SpeakerReducer,
  fave: FaveReducer
});



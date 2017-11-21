import {
  createRouter,
} from '@expo/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Faves from '../scenes/Faves';


const Router = createRouter(() => ({
  schedule: () => Schedule,
  faves: () => Faves,
  about: () => About,
}));

export default Router;
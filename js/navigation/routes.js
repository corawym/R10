import {
  createRouter,
} from '@expo/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';


const Router = createRouter(() => ({
  schedule: () => Schedule,
  about: () => About,
}));

export default Router;
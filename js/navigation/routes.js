import {
  createRouter,
} from '@expo/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Faves from '../scenes/Faves';
import Session from '../scenes/Session';
import Speaker from '../scenes/Speaker';
import Layout from './NavigationLayout';

const Router = createRouter(() => ({
  layout: () => Layout,
  schedule: () => Schedule,
  faves: () => Faves,
  about: () => About,
  session: () => Session,
  speaker: () => Speaker,
}));

export default Router;

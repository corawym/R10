/**
 * R10 App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import Router from './navigation/routes';


export default class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('about')} />
      </NavigationProvider>
    );
  }
}


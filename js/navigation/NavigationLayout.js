import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import { Image } from 'react-native';

import Router from './routes';


const styles = () =>{

}


class NavigationLayout extends Component{
  static route = {
    navigationBar: {
      visible: false,
    }
  }
  render(){
    return(
      <TabNavigation
        initialTab="schedule">

        <TabItem
          id="schedule"
          title="Schedule"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Image style={{width: 20, height: 20}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} /> }>
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </TabItem>

        <TabItem
          id="faves"
          title="Faves"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Image style={{width: 20, height: 20}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} /> }>
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
          />
        </TabItem>

        <TabItem
          id="about"
          title="About"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Image style={{width: 20, height: 20}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} /> }>
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>

        
      </TabNavigation>
    );
  }
}
export default NavigationLayout;
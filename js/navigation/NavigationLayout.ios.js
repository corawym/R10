import React, { Component } from 'react';
import { View, StatusBar} from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Router from './routes';
import GradientBackground from '../components/GradientBackground';
import { colors, typography, textSizes } from '../config/styles';
import { styles } from './styles';


const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: {fontFamily: typography.fontRegular},
    renderBackground: () => (
      <GradientBackground colors={[colors.purple, colors.red]} gradientStyles={styles.gradientBg}/>
    )
  }
}


class NavigationLayout extends Component{
  // static route = {
  //   navigationBar: {
  //     visible: false,    
  //   }
  // }

  renderIcon(iconName, isSelected) {
    return(
      <Icon
        name={iconName}
        size={20}
        color={isSelected ? 'white' : colors.mediumGrey}
      />
    )
  }

  renderTitle(isSelected, title){
    return(
      <Text 
        style={{
          fontFamily: typography.fontRegular, 
          fontSize: textSizes.tabBar, 
          color: isSelected ? 'white' : colors.mediumGrey
        }}>
        {title}
      </Text>
    )
  }

  render(){
    return(
      <TabNavigation initialTab="schedule" tabBarColor='black'>

        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) => this.renderIcon('ios-calendar', isSelected) }>
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="faves"
          title="Faves"
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) => this.renderIcon('ios-heart', isSelected) }>
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) => this.renderIcon('ios-information-circle', isSelected) }>
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        
      </TabNavigation>
    );
  }

  
}
export default NavigationLayout;
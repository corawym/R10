import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Router from './routes';
import { colors, typography, textSizes } from '../config/styles';


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
          />
        </TabItem>

        
      </TabNavigation>
    );
  }

  renderIcon(iconName, isSelected) {
    return(
      <Icon
        name={iconName}
        size={20}
        color={isSelected ? 'white' : colors.MediumGrey}
      />
    )
  }

  renderTitle(isSelected, title){
    return(
      // , fontFamily: typography.baseFontRegular
      <Text style={{fontFamily: typography.baseFontRegular, fontSize: textSizes.tabBar, color: isSelected ? 'white' : colors.MediumGrey}}>{title}</Text>
    )
  }
}
export default NavigationLayout;
import React, { Component } from 'react';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Router from './routes';
import GradientBackground from '../components/GradientBackground';
import { colors, typography, textSizes, margins } from '../config/styles';
import styles from './styles';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: { fontFamily: typography.fontRegular },
    renderBackground: () => (
      <GradientBackground colors={[colors.purple, colors.red]} gradientStyles={styles.gradientBg} />
    ),
  },
};

class NavigationLayout extends Component {
  renderIcon(iconName, isSelected) {
    return (
      <Icon
        name={iconName}
        size={22}
        color={isSelected ? colors.purple : colors.mediumGrey}
      />
    );
  }

  renderTitle(title, isSelected) {
    return (
      <Text
        style={{
          fontFamily: typography.fontRegular,
          fontSize: textSizes.body,
          color: isSelected ? colors.purple : colors.mediumGrey,
          marginLeft: margins.marginS,
        }}>
        {title}
      </Text>
    );
  }

  render() {
    return (
      <DrawerNavigation
        id="schedule"
        initialItem="schedule"
        drawerWidth={220}
      >

        <DrawerNavigationItem
          id="schedule"
          selectedStyle={{ backgroundColor: colors.lightGrey }}
          renderIcon={isSelected => this.renderIcon('md-calendar', isSelected)}
          renderTitle={isSelected => this.renderTitle('Schedule', isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="faves"
          selectedStyle={{ backgroundColor: colors.lightGrey }}
          renderIcon={isSelected => this.renderIcon('md-heart', isSelected)}
          renderTitle={isSelected => this.renderTitle('Faves', isSelected)}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="about"
          selectedStyle={{ backgroundColor: colors.lightGrey }}
          renderIcon={isSelected => this.renderIcon('md-information-circle', isSelected)}
          renderTitle={isSelected => this.renderTitle('About', isSelected)}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

      </DrawerNavigation>
    );
  }
}

export default NavigationLayout;

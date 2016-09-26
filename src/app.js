import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './screens/register';
registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'Main',
      icon: require('../img/home.png'),
      title: 'Coders',
      label: 'Home'
    },
    {
      screen: 'Messages',
      icon: require('../img/messages.png'),
      title: 'Messages Title',
      label: 'Messages'
    },
    {
      screen: 'Profile',
      icon: require('../img/profile.png'),
      title: 'Profile Title',
      label: 'Profile'
    }
  ]
});

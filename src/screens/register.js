import {Navigation} from 'react-native-navigation';

import main from './main';
import messages from './messages';
import profile from './profile';

export function registerScreens() {
  Navigation.registerComponent('Main', () => main);
  Navigation.registerComponent('Messages', () => messages);
  Navigation.registerComponent('Profile', () => profile);
}

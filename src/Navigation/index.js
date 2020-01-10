import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import ChatScreen from '../screens/ChatScreen';
import StatusScreen from '../screens/StatusScreen';
import CallScreen from '../screens/CallScreen';
import {colors} from '../utils/colors';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from 'react-navigation-stack';
import WriteStatus from '../components/WriteStatus';

const Stacks = createStackNavigator ({
  Status: WriteStatus,
});

const AppNavigator = createMaterialTopTabNavigator (
  {
    chats: ChatScreen,
    status: StatusScreen,
    calls: CallScreen,
  },
  {
    initialRouteName: 'status',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,

      style: {
        backgroundColor: colors.green,
      },
      labelStyle: {
        fontSize: 15,
        fontWeight: 'bold',
      },
      indicatorStyle: {
        backgroundColor: 'white',
      },
    },
  },
  {
    swipeEnabled: true,
  }
);

const App = createSwitchNavigator ({
  ' ': AppNavigator,
  Stack: Stacks,
});

export default createAppContainer (App);

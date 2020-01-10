import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {colors} from './src/utils/colors';
import HomeHeader from './src/components/HomeHeader';
import Navigation from './src/Navigation';

const App = () => {
  return (
    <Fragment>
      <StatusBar
        backgroundColor={colors.greenHeader}
        barStyle="light-content"
      />
      <SafeAreaView />
      <HomeHeader />
      <Navigation />
    </Fragment>
  );
};

export default App;

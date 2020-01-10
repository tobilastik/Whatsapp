import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../utils/colors';

export default class CallScreen extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Text> textInComponent </Text>

        <View style={styles.button}>
          <Material name="phone-plus" size={30} color={colors.white} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  button: {
    position: 'absolute',
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: colors.lightGreen,
    bottom: 40,
    right: 10,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

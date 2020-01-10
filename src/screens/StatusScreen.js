import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../utils/colors';
import WriteStatus from '../components/WriteStatus';

export default class StatusScreen extends Component {
  state = {
    status: false,
  };
  openStatus = () => {
    this.setState ({
      status: !this.state.status,
    });
  };
  render () {
    return (
      <View style={{flex: 1}}>
        <Text> textInComponent </Text>
        <TouchableOpacity
          style={styles.statusBtn}
          onPress={() => this.props.navigation.navigate ('Status')}
        >
          <Material name="pencil" size={30} color={colors.green} />
        </TouchableOpacity>

        <View style={styles.button}>
          <Material name="camera" size={30} color={colors.white} />
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
    right: 15,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBtn: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#ecf5f6',
    bottom: 130,
    right: 20,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

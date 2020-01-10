import React, {Component} from 'react';
import {Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class AnimatableSearch extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 80,
            width: '100%',
            backgroundColor: 'whitesmoke',
            justifyContent: 'center',
            paddingHorizontal: 5,
          }}
        >
          <Animatable.View
            animation="slideInRight"
            style={{
              height: 50,
              backgroundColor: 'white',
              flexDirection: 'row',
              padding: 5,
              alignItems: 'center',
            }}
          >
            <FontAwesome name="search" size={25} color={'white'} />
            <Text>Search...</Text>
          </Animatable.View>
        </View>

      </View>
    );
  }
}

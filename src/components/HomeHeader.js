import React, {Component} from 'react';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../utils/colors';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import AnimatableSearch from '../utils/AnimatableSearch';

export default class HomeHeader extends Component {
  state = {
    searchPressed: false,
  };
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide ();
  };

  showMenu = () => {
    this._menu.show ();
  };

  render () {
    return (
      <View>
        <View
          style={{
            backgroundColor: colors.green,
            padding: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 70,
          }}
        >
          <Text style={{color: colors.white, fontSize: 23, fontWeight: '900'}}>
            WhatsApp
          </Text>
          <View
            style={{
              position: 'absolute',
              right: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}
          >
            <FontAwesome name="search" size={25} color={colors.white} />

            <Menu
              ref={this.setMenuRef}
              button={
                <Feather
                  onPress={this.showMenu}
                  style={{marginLeft: 12}}
                  name="more-vertical"
                  size={25}
                  color={colors.white}
                />
              }
            >

              <MenuItem onPress={this.hideMenu}>New group</MenuItem>
              <MenuItem onPress={this.hideMenu}>New broadcast</MenuItem>
              <MenuItem onPress={this.hideMenu}>WhatsApp Web</MenuItem>
              <MenuItem onPress={this.hideMenu}>Starred messages</MenuItem>
              <MenuItem onPress={this.hideMenu}>Settings</MenuItem>
            </Menu>

          </View>
        </View>
      </View>
    );
  }
}

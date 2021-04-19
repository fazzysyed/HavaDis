import React from 'react';
import {View, Text} from 'react-native';
import {Header, Left, Icon, Center, Right, Body} from 'native-base';

const HeaderWithIcon = (props) => {
  return (
    <Header style={{backgroundColor: 'transparent', elevation: 0}}>
      <Left style={{flex: 0.3}}>
        <Icon name="menu" onPress={props.menu} />
      </Left>
      <Body style={{width: '80%', alignItems: 'center'}}>
        <Text style={{fontSize: 17}}>My Orders</Text>
      </Body>
      <Right style={{flex: 0.3}}></Right>
    </Header>
  );
};

export default HeaderWithIcon;

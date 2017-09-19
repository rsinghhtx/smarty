import React from "react";
import { AppRegistry, Image, TouchableOpacity } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
import { View } from "react-native";
const routes = ["Home", "Settings" , "Addresses", "Support" , "Logout"];
export default class DrawBar extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Content>
          <View style={{backgroundColor:'#616161',height:150}}>
            <Text style={{color:'#fff',marginLeft:20,marginTop:65}}>Account Total : 3.4 Ethereum</Text>
          </View>
          <List>
            <ListItem 
                button
                onPress={() => this.props.navigation.navigate("Home")}>
              <Text>
              <Icon name='pie' />
                &nbsp;Home
              </Text>
            </ListItem>
            <ListItem>
              <Text>
              <Icon name='paper-plane' />
              &nbsp;Setting
              </Text>
            </ListItem>
            <ListItem>
              <Text>
              <Icon name='person' />
              &nbsp;Addresses
              </Text>
            </ListItem>
            <ListItem>
              <Text>
              <Icon name='paper' />
              &nbsp;Support
              </Text>
            </ListItem>
            <ListItem>
              <Text>
              <Icon name='home' />
              &nbsp;Logout
              </Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

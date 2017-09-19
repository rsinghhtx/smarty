import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Form,
  Text,
  Item,
  Label,
  Input,
  Picker,
  Icon
} from "native-base";
import { View, TouchableOpacity } from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from "./styles";
class OverviewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: "key0"
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  static navigationOptions = {
    tabBarLabel:'Overview'
  };
  render() {
    return (
      <Container>
        <Content>
          <View style = {styles.pickerBGStyle}>
            <Picker style = {styles.pickerColorStyle}
                mode="dropdown"
                iosHeader="Select one"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
                textStyle={{color:'white', marginLeft:40, fontSize:15}}
              >
                <Item label="My Ether Wallet" value="key0" />
                <Item label="ATM Card" value="key1" />
                <Item label="Debit Card" value="key2" />
                <Item label="Credit Card" value="key3" />
                <Item label="Net Banking" value="key4" />
            </Picker>
            <TouchableOpacity>
              <Icon active name="md-arrow-dropdown" style={styles.ddStyle} />
            </TouchableOpacity>
          </View>
          <Text style = {styles.topText}>
            3.4<Text>Eth</Text>
          </Text>
          <Form>
            <Item inlineLabel>
              <Label>Sep 6</Label>
              <Input placeholder="hsk32k35giux235!d"/>
              <Label style={styles.red}>-.25<Text style={styles.redSmallText}>eth</Text></Label>
            </Item>
            <Item inlineLabel style = {styles.mt20}>
              <Label>Sep 5</Label>
              <Input placeholder="kuyn5k3mk89bxfd25"/>
              <Label style={styles.green}>+1.2<Text style={styles.greenSmallText}>eth</Text></Label>
            </Item>
            <Item inlineLabel style = {styles.mt20}>
              <Label>Sep 1</Label>
              <Input placeholder="hka0d9y4l8f6247kds4"/>
              <Label style={styles.green}>+2.0<Text style={styles.greenSmallText}>eth</Text></Label>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default OverviewComp;

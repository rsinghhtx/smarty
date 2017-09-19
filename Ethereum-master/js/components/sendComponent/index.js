import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Text,
  Form,
  Input, 
  Label,
  Item
} from "native-base";
import styles from "./styles";
class SendComp extends Component {
  static navigationOptions = {
    tabBarLabel:'Send'
  };
  render() {
    const { props: { name, index, list } } = this;
    return (
      <Container>
        <Content padder>
          <Form style = {styles.mt30}>
            <Item inlineLabel>
              <Label>From</Label>
              <Input placeholder="My Ehtereum Wallet"/>
            </Item>
            <Item inlineLabel style = {styles.mt20}>
              <Label>To</Label>
              <Input />
            </Item>
            <Item inlineLabel style = {styles.mt20}>
              <Label>ETH</Label>
              <Input placeholder="0.000"/>
              <Label>USD</Label>
              <Input placeholder="0.000"/>
            </Item>
            <Item inlineLabel style = {styles.mt20}>
              <Label>Fee</Label>
              <Input placeholder="0.000"/>
              <Label>Time</Label>
              <Input placeholder="0.000" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default SendComp;

import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Container,
    Header,
    Content,
    Text,
    Form,
    Item,
    Label,
    Input
} from "native-base";
import { View } from "react-native";
import styles from "./styles";
class recieveComp extends Component {
    static navigationOptions = {
        tabBarLabel: 'Recieve'
    };
    render() {
        const { props: { name, index, list } } = this;
        return ( 
            <Container>
                <Content padder >
                    <View style = {styles.image} ></View> 
                    <Text style = {styles.textCenter}>
                    13 h6khk98bgu4glp3 @56 
                    </Text> 
                    <Form style = {styles.mg20}>
                      <Item inlineLabel >
                        <Label > ETH </Label> 
                        <Input placeholder = "0.000" />
                        <Label > USD </Label> 
                        <Input placeholder = "0.000" />
                      </Item> 
                      <Item inlineLabel style = {styles.mt20}>
                        <Label > To </Label> 
                        <Input placeholder = "My Ehtereum Wallet" />
                      </Item> 
                    </Form > 
                </Content> 
            </Container >
        );
    }
}

export default recieveComp;
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Overview from "../overviewComponent";
import Recieve from "../recieveComponent";
import Send from "../sendComponent";
import DrawBar from "../DrawBar";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Tab, 
  Tabs
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { setIndex } from "../../actions/list";
import { openDrawer } from "../../actions/drawer";
import styles from "./styles";

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    console.log(DrawNav, "786785786");
    return (
      <Container style={styles.container}>
        <Header style = {styles.headerStyle}>
          <Left>
            <Button
              transparent
              onPress={() => {
                DrawerNav.dispatch(
                  NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "Home" })]
                  })
                );
                DrawerNav.goBack();
              }}
            >
              <Icon style={styles.hColor} active name="power" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.headerColor}>Home</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => DrawerNav.navigate("DrawerOpen")}
            >
              <Icon style={styles.hColor} active name="md-more" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Tabs initialPage={0} tabBarUnderlineStyle = {{backgroundColor: '#ffff8c',height:2}}>
            <Tab heading="Send" tabStyle={{backgroundColor: '#616161'}} textStyle={{color: '#aaa'}} activeTabStyle={{backgroundColor: '#616161'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
              <Send />
            </Tab>
            <Tab heading="Overview" tabStyle={{backgroundColor: '#616161'}} textStyle={{color: '#aaa'}} activeTabStyle={{backgroundColor: '#616161'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
              <Overview />
            </Tab>
            <Tab heading="Recieve" tabStyle={{backgroundColor: '#616161'}} textStyle={{color: '#aaa'}} activeTabStyle={{backgroundColor: '#616161'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
              <Recieve />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer())
  };
}
const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list
});

const HomeSwagger = connect(mapStateToProps, bindAction)(Home);
const DrawNav = DrawerNavigator(
  {
    Home: { screen: HomeSwagger }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation;
  return {
    header: null
  };
};
export default DrawNav;
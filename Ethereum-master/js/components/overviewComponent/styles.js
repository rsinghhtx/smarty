import React, { Component } from 'react';
import { Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


const { StyleSheet } = React;
export default {
    mt20 : {
        marginTop : 20
    },
    topText : {
        marginTop: 20,
        marginBottom : 20,
        textAlign: 'center',
        fontSize: 50,
        color:'#aaa'
    },
    red : {
        color: '#f00'
    },
    green : {
        color : '#0f0'
    },
    pickerBGStyle : {
        backgroundColor:'#616161',
        flexDirection:'row'
    },
    pickerColorStyle : {
        color:'#fff',
        width: deviceWidth*0.95
    },
    redSmallText : {
        fontSize : 10,
        color: '#f00'
    },
    greenSmallText : {
        fontSize : 10,
        color : '#0f0'
    },
    ddStyle: {
        color:'white',
        fontSize:20,
        marginTop:20
    }
};
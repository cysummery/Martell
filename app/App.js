/**
 * Created by cy on 2017/9/25.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomePage from './pages/home/HomePage';
import ListPage from './pages/list/ListPage';
import PersonalPage from './pages/personal/PersonalPage';
import Chat from './pages/home/Chat';
import Detail from './pages/home/Detail';

const TabNav = TabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'Main'
        }
    },
    ListPage: {
        screen: ListPage,
        navigationOptions: {
            tabBarLabel: '内容列表'
        }

    },
    Personal: {
        screen: PersonalPage,
        navigationOptions: {
            tabBarLabel: '个人中心'
        }

    }
})

const Martell = StackNavigator({
    MainTab: {
        screen: TabNav,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    Chat: {
        screen: Chat,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    Detail: {
        screen: Detail
    }
}, {
    headerStyle: {
        backgroundColor: 'blue',
        color: 'white'
    }
});

const StackOptions = ({navigation}) => {

    let {state,goBack} = navigation;

    // 用来判断是否隐藏或显示header
    const visible= state.params ? state.params.isVisible : false;
    let header;
    if (visible === true){
        header = null;
    }
    const headerStyle = {backgroundColor:'#4ECBFC'};
    const headerTitleStyle = {fontSize:20,color:'white',fontWeight:'500'};
    const headerBackTitle = '返回';

    return {headerStyle,headerTitleStyle,headerBackTitle, header}
};


AppRegistry.registerComponent('Martell', () => Martell);

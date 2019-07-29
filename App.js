/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Home} from './app/views/Home.js';
import {Contact} from "./app/views/Contact";
import {StackNavigator} from 'react-navigation';
import { Video } from "./app/views/Videos";
import { VideoDetail } from "./app/views/VideoDetail";

const MyRoutes = StackNavigator({
    HomeRT: {
        screen: Home
    },
    ContactRT: {
        screen: Contact
    },
    LessonsRT: {
        screen: Video
    },
    VideoDetailRT: {
        screen : VideoDetail
    },
},
    {
        initialRouteName: 'HomeRT'

    }
);

export default class App extends React.Component {
    render() {
        return (
            <MyRoutes/>
        )
    }
}


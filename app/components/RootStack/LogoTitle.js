import * as React from 'react';
import { Image } from "react-native";

export default class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./assets/images/homemade-logo.png')}
                style={{height: 30,width: 30}}
            />
        );
    }
}
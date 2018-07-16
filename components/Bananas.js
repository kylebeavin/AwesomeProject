import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 400, height: 220}}/>
        );
    }
}

export default Bananas;
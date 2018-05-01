import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Free from './src/Component/free';
export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
          isReady: false
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });

        this.setState({ isReady: true });

    }
    render() {
      if (!this.state.isReady) {
        return <View><Text>app os loading</Text></View>;
      }
      return <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <Free />
      </View>;
    }
}
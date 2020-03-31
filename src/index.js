import React from "react";
import {Text, View} from "react-native";
import Home from './screens/home/home';
import Header from "./components/header/header";

class App extends React.Component {
    render() {
        return (
            <View>
                <Header/>
            </View>
        );
    }
};

export default App;


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { MotiView } from "moti";


function App(): React.JSX.Element {


    return (
        <SafeAreaView>
            <StatusBar backgroundColor="black" />
            <ScrollView contentInsetAdjustmentBehavior="automatic">


                <MotiView from={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "timing", delay: 300 }}>
                    <Text>Hello</Text>
                </MotiView>
                <MotiView style={{ height: 80, width: 80, backgroundColor: "blue", borderRadius: 10, alignSelf: "center" }} from={{ transform: [ { rotateZ: "0deg" } ] }} animate={{ transform: [ { rotateZ: "360deg" } ]}} transition={{ type: "timing", duration: 1000, loop: true }}>
                </MotiView>
                <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "timing", delay: 500 }}>
                    <Text>Hello</Text>
                </MotiView>
                <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "timing", delay: 600 }}>
                    <Text>Hello</Text>
                </MotiView>

            </ScrollView>
        </SafeAreaView>
    );
}

export default App;

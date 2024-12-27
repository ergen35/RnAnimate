/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import App from './App';
import { name as appName } from './app.json';

function AppRoot() {
    return (
        <GestureHandlerRootView>
            <App />
        </GestureHandlerRootView>
    )
}

AppRegistry.registerComponent(appName, () => AppRoot);

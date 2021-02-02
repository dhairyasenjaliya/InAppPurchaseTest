/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './src/app.js';
import { name as appName } from './app.json';

LogBox.ignoreAllLogs(true);
AppRegistry.registerComponent(appName, () => App);
 
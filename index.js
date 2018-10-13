import { YellowBox, AppRegistry } from 'react-native';
import App from './src/App';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('Manager', () => App);

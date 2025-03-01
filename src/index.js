import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// Adicione esta linha para rodar na web
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
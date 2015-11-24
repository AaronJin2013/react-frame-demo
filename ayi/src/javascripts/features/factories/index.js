
import Auth from './Auth.factory.js';
import Login from './Login.factory.js';
import Report from './Report.factory.js';
import Store from './Store.factory.js';
import Trade from './Trade.factory.js';
import LocalStorage from './LocalStorage.factory.js';

export default angular.module('factories', [Auth,Login,Report,Store,Trade,LocalStorage])
    .name;
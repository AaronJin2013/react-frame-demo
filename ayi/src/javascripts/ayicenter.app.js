'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngresource from 'angular-resource';
import features from './features/index';
import modules from './modules/index';

angular.module('app', [uirouter,ngresource,features,modules])

;

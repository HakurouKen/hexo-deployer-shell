/* global hexo required */
'use strict';

var deployer = require('./dist/deployer');
hexo.extend.deployer.register('shell',require('./dist/deployer'));
module.exports = deployer;

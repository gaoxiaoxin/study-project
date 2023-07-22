const path = require('path');

const log4js = require('log4js');

const logger = log4js.getLogger('开发日志');

logger.level = 'debug';

logger.debug("Some debug messages")
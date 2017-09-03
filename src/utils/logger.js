'use strict';
const chalk = require('chalk');
const fs = require('fs-extra');

const log = (msg) => {
	return console.log(chalk.blue('cloudeCompose') + ' :: ' + msg)
}

const err = (msg) => {
	return console.log(chalk.blue('cloudeCompose') + ' :: error :: ' + msg)
}

module.exports = {
	log:log,
	err:err
}

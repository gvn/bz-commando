#!/usr/bin/env node

var program = require('commander');
var openurl = require('openurl');
var git = require('git-rev');
var CSON = require('cson');
var fs = require('fs');

var baseURL = 'https://bugzilla.mozilla.org';

// Look in user's home path for a .bzrc file
var homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var configFilePath = homePath + '/.bzrc';
var config;

if (configFilePath) {
  config = CSON.parseSync(fs.readFileSync(configFilePath, {
    encoding: 'utf8'
  }));
}

function openURL(url) {
  openurl.open(url);
}

program
  .version('0.1.0');

program
  .command('open [ticket]')
  .description('Open ticket by ID number or branch name')
  .action(function (ticket) {
    // Try to open a number encoded as a string
    function tryToOpen(number) {
      if (!isNaN(number, 10)) {
        openURL(baseURL + '/show_bug.cgi?id=' + number);
      } else {
        console.error('Branch name "' + number + '" isn\'t a number.');
        process.exit(1);
      }
    }

    if (ticket) {
      tryToOpen(ticket);
    } else {
      git.branch(function (branchName) {
        tryToOpen(branchName);
      });
    }
  });

program
  .command('dash')
  .description('Open Bugzilla dashboard.')
  .action(function () {
    openURL(baseURL + '/page.cgi?id=mydashboard.html');
  });

program
  .command('new')
  .option('-m, --me', 'Assign to yourself')
  .option('-t, --title <title>', 'Set ticket title of <title>')
  .option('-c, --component <shortname>', 'Set ticket component to <shortname>')
  .option('-w, --whiteboard <whiteboard>', 'Set ticket whiteboard(s) to <whiteboard>')
  .description('Create new ticket.')
  .action(function (command) {
    var URL = baseURL + '/enter_bug.cgi';

    if (config.product) {
      URL += '?product=' + config.product;
    } else {
      console.error('Product value is missing from config.');
      process.exit(1);
    }

    if (command.component) {
      if (config.components[command.component]) {
        URL += '&component=' + encodeURIComponent(config.components[command.component]);
      } else {
        console.error('Component value for "' + command.component + '" key is not defined.');
        process.exit(1);
      }
    }

    if (command.me) {
      if (config.email) {
        URL += '&assigned_to=' + config.email;
      } else {
        console.error('Missing email in config.');
        process.exit(1);
      }
    }

    if (command.title) {
      URL += '&short_desc=' + encodeURIComponent(command.title);
    }

    if (command.whiteboard) {
      URL += '&status_whiteboard=' + encodeURIComponent(command.whiteboard);
    }

    openURL(URL);
  });

program.parse(process.argv);

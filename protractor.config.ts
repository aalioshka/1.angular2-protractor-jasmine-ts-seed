import {ProtractorBrowser} from 'protractor';

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to this config file
  specs: ['e2e/specs/**/*spec.js' ],


  // For angular tests
  useAllAngular2AppRoots: true,

  // Base URL for application server
  baseUrl: 'http://localhost:8080',

  onPrepare: function() {
    let globals = require('protractor');
    let browser: ProtractorBrowser = globals.browser;
    let Reporter = require('weird-reporter');
    jasmine.getEnv().addReporter(new Reporter( browser.params ));
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000,
    showTiming: true
  }
};

const GLOBAL_TIMEOUT = 30000;
const yargs = require('yargs').argv;
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'reports',
  filename: 'report.html',
  cleanDestination: true,
  showSummary: true,
  showConfiguration: true,
  reportTitle: null,
  reportFailedUrl: true,
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: true,
  inlineImages: true
});

exports.config = {
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../spec/*.js'],
  ignoreUncaughtException: true,
  capabilities: {
	browserName: yargs.browser || 'chrome',
	chromeOptions: {
		// args: ['no-sandbox', 'headless', 'disable-gpu'],
	},
	shardTestFiles: yargs.instances > 1,
	maxInstances: yargs.instances || 1,
  },
  disableChecks: true,  
  onPrepare: function () {
    jasmine.getEnv().addReporter(reporter);
    global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
    global.ec = protractor.ExpectedConditions;

    const chai = require('chai');
    chai.use(require('chai-as-promised'));
    global.expect = chai.expect;
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
  },
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
};

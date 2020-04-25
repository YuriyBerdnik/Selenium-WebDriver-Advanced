const GLOBAL_TIMEOUT = 30000;
const yargs = require('yargs').argv;

exports.config = {
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
        global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
        global.ec = protractor.ExpectedConditions;

        const chai = require('chai');
        chai.use(require('chai-as-promised'));
        global.expect = chai.expect;
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    }
};

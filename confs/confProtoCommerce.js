const { browser } = require('protractor');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/w3/hub',
    specs: ['../specs/protrctorCommerceSpec.js'],

    onPrepare: function() {

        browser.driver.manage().window().maximize();

        Jasmine2HtmlReporter.getEnv().addReporter{
            new Jasmine2HtmlReporter({
                savePath: '../ReportFolder/screenshots',
                takeScreenshots: true
            })
        };
    }
}
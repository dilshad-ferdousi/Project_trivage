// Dilshad
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});


exports.config = {
    directConnect: true,
    waitForAngular: false,

  
  
    // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },
    
  
    multiCapabilities: [
      {'browserName': 'chrome',
      //{'browserName': 'firefox'},
      chromeOptions: {
        //args: ['--headless','--window-size=1920,1080']
      }
    }
    ],
  
    framework: 'jasmine',
  
    //specs: [

      suites: {
        search1 : [
                './tests/searchGivsNoResult.js',
                  ],
        search2 : [
                './tests/2Adults2kids5NightsTripInParis2Rooms copy.js',  
                './tests/SignglePerson3NigntsTripToMadridWithUSD.js'  
              ]
      },
     
  
    jasmineNodeOpts: {
      defaultTimeoutInterval: 300000
    },

    onPrepare: function () {

      browser.driver.manage().window().maximize();
      browser.ignoreSynchronization = true;
      global.dvr = browser.driver;
      global.EC = protractor.ExpectedConditions;

      jasmine.getEnv().addReporter(reporter);
  

      const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
      jasmine.getEnv().addReporter(new SpecReporter({
          displayFailuresSummary: true,
          displayFailedSpec: true,
          displaySuiteNumber: true,
          displaySpecDuration: true,
          displayStacktrace: true,
          spec: {
              displayStacktrace: true
          },
          summary: {
              displayDuration: false
          }
      }));

},
};
const path = require('path');

module.exports = {
    //
    // ======
    // Suites
    // ======
    // Define your test suites here. 
    //
    suites: [{
        name: 'Selenium',
        cases: [{
            path: './tests/selenium-with-po.js'
        }]        
    },{
        name: 'Visual',
        cases: [{
            path: './tests/visual.js'
        }]        
    },{
        name: 'PDF',
        cases: [{
            path: './tests/pdf.js'
        }]        
    }],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. 
    // If "concurrency" value is greater than 1, tests with different capabilities will be executed in parallel.
    //
    concurrency: 1,
    capabilities: [{
        browserName: 'chrome',
    },{
        browserName: 'firefox',
    }],
    
      
    // ============
    // Parameters
    // ============
    //
    /*parameters : {
        file: '<excel or csv file path>',
        mode: 'seq', // can be 'random' or 'all' as well
    },*/
    
    // ============
    // Iterations
    // ============
    //
    // Tests will run only once if iterations number is not explicitly specified.
    //
    //iterations: 1,
    
    // ============
    // Selenium & Appium server URLs
    // ============
    //
    // If not specified, the default URLs will be used
    //
    //seleniumUrl: 'http://localhost:4444/wd/hub',
    //appiumUrl: 'http://localhost:4723/wd/hub',
    
    //
    // ========
    // Services
    // ========
    // List services you want to enable during the test execution.
    // Available services: selenium-standalone | devtools
    //
    services: ['devtools'],   
    //
    // =======
    // Modules
    // =======
    // List modules you want to enable during the test execution.
    // Loading unnecessary modules might slow down your test execution, 
    // so only load modules that are used in the test.
    // See a list of available modules here: http://docs.oxygenhq.org/
    //
    modules: ['web', 'db', 'log', 'assert', 'eyes', 'pdf', 'http', 'email', 'win'],
    //
    // =========
    // Framework
    // =========
    // Define a testing framework for this project. 
    // Available frameworks: oxygen | cucumber
    //
    framework: 'oxygen',
    //
    // =========
    // Reporting
    // =========
    // Define test reporter format and corresponding options. 
    // Multiple reporter formats can be specified.
    // Available reporters: json | html | junit | excel | pdf | xml
    //
    reporting: {
        outputDir: path.join(__dirname, 'reports'),
        reporters: ['json'],
    },
    //
    // =====
    // Hooks
    // =====
    // Oxygen provides several hooks that can be used to interfere with the test
    // execution process. 
    //
    hooks: {
        //
        // Hook that gets executed before the test starts.
        // At this point, Oxygen has been already initialized, so you
        // can access Oxygen via 'ox' global variable. 
        //
        beforeTest: function(runId, options, caps) {
            log.info('beforeTest');
        },
        beforeSuite: function(suiteDef) {
            log.info('beforeSuite');
        },
        beforeCase: function(caseDef) {
            log.info('beforeCase');
        },
        beforeCommand: function(cmdDef) {
            log.info('beforeCommand');
        },
        afterCommand: function(cmdResult) {
            log.info('afterCommand');
        },
        afterCase: function(caseDef, caseResult) {
            log.info('afterCase')
        },
        afterSuite: function(suiteDef, suiteResult) {
            log.info('afterSuite')
        },
        afterTest: function(runId, testResult) {
            log.info('afterTest')
        }
    }
};

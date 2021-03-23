import { Config } from "protractor";


let config: Config = {
    //Using directConnect, we dont need to start the selenium server locally
    directConnect:true,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    //This is browser capability
    capabilities: {
        browserName: 'chrome'
    },

    //Define the test specs/feature you would want to run
    specs: [''],
  
    cucumberOpts: {
      format: 'json:results.json',
      require: ''
    }
  };
# Project_trivago
Install Protractor
Install node.js from https://nodejs.org/en/. download and install then.
Next step to install protractor. To do try this:
npm install -g protractor
Protractor is a framework will be used to run end-to-end test on web browser. to run protractor, you need to install selenium server. to run selenium server, you need to install java JDK.
http://www.oracle.com/technetwork/java/javase/downloads/index.html
Now that we installed java, we need to run the selenium server in order to run our protractor test. When we install protractor manager, it also installed webdriver manager which we have showed earlier. Before running webdriver manager, we need to update webdriver manager to update. Run the following command:
webdriver-manager update
what this will do is to update webdriver manager to the latest version and get all the necessary libraries.
In order to generate a report, run the following command:
npm install jasmine-spec-reporter --save-dev
npm install protractor-jasmine2-screenshot-reporter --save-dev
Start the webdriver
Now we are ready to run our protractor test. Go to the location of the protractor configuration file and run the following command:
protractor conf.js    //for funning single spec file
protractor conf.js --suite search1,search2    //for running suite

# GiphyAutomationFramework
Simple Automation Framework built with Testcafe and K6. Using Github Actions run the test and deploy reports to a Github Page.


## Link To CI/CD Report

https://bobpetrowsky.github.io/GiphyAutomationFramework/


## Run Locally

Clone the project

```bash
  git clone https://github.com/BobPetrowsky/GiphyAutomationFramework.git
```

Go to the project directory

```bash
  cd GiphyAutomationFramework
```

Install dependencies

```bash
  npm install
```

```bash
  brew install k6
```
You'll need to create a .env folder to hold these environment variables
```text
  API_KEY=<Your API Key>
  USER_NAME=<Your Giphy User Name>
  PASSWORD-<Your Password>
```
Alternatively you can pass the ENV vairables into the command line when running

Run Testcafe and generate html report

```bash
  npm run testcafe-report
```

Run  and generate html report

```bash
  npm run k6-report
```
all reports are generated into the ./Reports folder

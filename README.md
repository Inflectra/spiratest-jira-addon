# SpiraTeam Webpanel for JIRA Cloud 

This plugin extends SpiraTeam's data sync feature with JIRA by providing an issue specific view of Spriteam information within a native JIRA web panel 

This project is built on top of the [Atlassian Connenct Express Project](https://bitbucket.org/atlassian/atlassian-connect-express)

Angular 1.4 is used on the front end 

## Steps to get the dev environment up and running
1. Make sure you have a working version of SpiraTeam with DataSync application running with Jira add-ons
2. Have a working Jira account (which can be a dev version) with development add-ons enabled
3. Clone and setup the code in this repo
4. Configure SpiraTeam and Jira

## 1. Working version of SpiraTeam.
First get your SpiraTeam data sync running with JIRA using the following:

[data sync guide](https://www.inflectra.com/Documents/SpiraTestPlanTeam%20External%20Bug%20Tracking%20Integration%20Guide.pdf)

## 2. Jira in dev mode
Jira provides some [useful information](https://developer.atlassian.com/static/connect/docs/latest/guides/development-setup.html) about setting up a development environment. This can be done in an existing Jira instance or in a dedicated Jira dev environment - including in the cloud.

## 3. Setting up this add-on locally
- to pipe localhost through to Jira Cloud you will need ngrok. This needs to be installed globally using:  `npm install -g ngrok`
- Clone the Repo 
- run `npm install` from the repo folder on your local machine
- `node app.js`
- This will run ngrok to expose the web server running on your local enviroment, which allows you to upload your atlassian-connect.json file when running a developerinstance of JIRA Cloud.
- See [Jira documentation for running local code and linking to Jira Cloud](https://developer.atlassian.com/static/connect/docs/latest/developing/developing-locally.html) - make sure to change the values for the URL in the atlassian-connect.json file to all match the ngrok url
- upload the ngrok url to your Jira instance - make sure ngrok can pass through your firewall first.


## 4. Configure SpiraTeam and Jira
Make sure that the data sync is working after following all the instructions in the [data sync guide](https://www.inflectra.com/Documents/SpiraTestPlanTeam%20External%20Bug%20Tracking%20Integration%20Guide.pdf) 

Next, go the the Settings of your JIRA project. There will be an admin tab called SpiraTeam API Acsess. Enter your SpiraTeam + Sync plugin, information there.


## Extending the plugin further

The Webpanel by default only presents test case coverage information from the corresponsding SpiraTeam Requirement, but you can customize it to add anything you want by doing the following:

1)Open the poster factory
2)The "response" parameter in the "set" function contains a set of information as expressed in the following documentation 

[API endpoint documentation](http://api.inflectra.com/Spira/Services/v4_0/RestServiceOperation.aspx?uri=projects%2f%7bproject_id%7d%2frequirements%2f%7brequirement_id%7d&method=GET)

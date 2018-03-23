# SpiraTest Test Coverage for Jira Cloud

This plugin extends SpiraTest's data sync feature with JIRA by providing an issue specific view of Spritest information inside of Jira as an addon. When connected to SpiraTest, this addon will show test coverage for requirements / stories.

## Requirements
- working version of SpiraTest, SpiraTeam or SpiraPlan, which is accessible over the internet
- working instance of cloud Jira
- working datasync between relevant projects of SpiraTest and Jira. Refer to Inflectra's [bug tracking documentation](https://www.inflectra.com/Documents/SpiraTestPlanTeam%20External%20Bug%20Tracking%20Integration%20Guide.pdf) for details of how to set this up
- a place to publicly host the files of this addon (i.e. as a website). For information, this is really easy to do using S3 or other services, given no server logic or code is required

## Steps to install the add-on
1. Clone this repo and make any required changes (make sure to change the baseline URL in atlassian-connect.json to that of the host site the files are served from)
2. Host the files on a public website.
3. Navigate to Jira in your Atlassian Cloud instance, then choose the cog menu > Add-ons. Click Manage add-ons >  Upload add-on. If you don't see this option you need to enable developer mode for add ons from the settings button on this page
4. Configure the add-on inside Jira (refer to the [addon marketplace page](https://marketplace.atlassian.com/plugins/spiratest/cloud/overview) for how to do this.

## Extending the plugin further - useful tips and links
- [API endpoint documentation](http://api.inflectra.com/Spira/Services/v4_0/RestServiceOperation.aspx?uri=projects%2f%7bproject_id%7d%2frequirements%2f%7brequirement_id%7d&method=GET)
- the addon consists of static files with javascript that communicates with Jira and SpiraTest. It uses Vue JS as its data binding framework.

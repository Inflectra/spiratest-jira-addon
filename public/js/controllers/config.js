// Define the `spiraDisplayApp` module
var spiraDisplayApp = angular.module('spiraDisplayApp', ['ngRoute']);

// Define the `PhoneListController` controller on the `spiraDisplayApp` module
spiraDisplayApp.controller('ConfigController', function ConfigController($scope, $window, $http, $route, $location) {

    //base URL: https://femidev.atlassian.net
    var baseUrl = $window.base;

    //JIRA current project - FEM
    $scope.projectKey;

    //Atlassian object: Makes iframe responsive
    AP.resize();

    //Atlassian object: decode query string to get JIRA project key
    AP.require(["_util", 'request'], function(util, request) {
        var hostString = util.decodeQueryComponent(window.location.href);
        var qs = URI(hostString).query(true);
        $scope.projectKey = qs['projectKey'];
        var url = baseUrl + '/rest/api/latest/project/' + $scope.projectKey + '/properties/spira';
        //Atlassian object: Request Spirateam data stored in JIRA
        populateFields(url, request);

    });

    //form submission function
    $scope.submit = function() {

        //prepare object for form submission
        var submission = {
            spiraURL: $scope.spiraURL,
            username: $scope.username,
            apiKey: $scope.apiKey,
            projectID: $scope.projectID,
            dataMappingID: $scope.dataMappingID
        }

        //turn submission data into json format
        submission = angular.toJson(submission, true);

        //submits and updates configuration data. Page refreshes on update sucsess 
        AP.require('request', function(request) {
            request({
                url: baseUrl + '/rest/api/latest/project/' + $scope.projectKey + '/properties/spira',
                type: 'PUT',
                contentType: "application/json",
                data: submission,
                success: function(responseText) {
                    location.reload();
                },
                error: function(responseText) {
                    alert('error');
                    console.log(responseText.responseText)
                }
            });
        });
    }

    function populateFields(url, request) {
        request({
            url: baseUrl + '/rest/api/latest/project/' + $scope.projectKey + '/properties/spira',
            success: function(response) {
                response = JSON.parse(response);
                $scope.spiraURL = response.value.spiraURL
                $scope.apiKey = response.value.apiKey
                $scope.username = response.value.username
                $scope.projectID = response.value.projectID
                $scope.dataMappingID = response.value.dataMappingID
                $scope.$apply();
            },
            contentType: "application/json"
        });
    }

});
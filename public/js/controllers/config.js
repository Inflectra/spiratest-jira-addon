angular.module('ConfigController', []).controller('ConfigController', function ConfigController($scope, $window, $http, $location, requestURL) {


//FORM POPULATION OPERATIONS 
    var baseUrl = $window.base;
    $scope.projectKey;
    AP.resize();
 
   /*
   Within callback:
   1) Create url used to request Config data
   2) Set $scope.projectKey from url query string
   */ 
    AP.require(["_util", 'request'], function(util, request) {
        var response = requestURL.makeURL(util, request, $scope.projectKey, baseUrl)
        var url = response.url
        $scope.projectKey = response.projectKey
        populateFields(url, request);
    });

  /*
   Within function:
   1) GET request Config data
   2) populate form fields on succsess 
   */ 
    function populateFields(url, request) {
        request({
            url: url,
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
//END OF FORM POPULATION OPERATIONS 



//FORM SUBMISSION OPERATIONS 

    //Sets up form data for submission, then passed data to "update" function
    $scope.submit = function() {
        var submission = {
            spiraURL: $scope.spiraURL,
            username: $scope.username,
            apiKey: $scope.apiKey,
            projectID: $scope.projectID,
            dataMappingID: $scope.dataMappingID
        }
        submission = angular.toJson(submission, true);

        AP.require('request', function(request) {
            update(request, submission)
        });
    }

    //makes put request to update config data
    function update(request, submission) {
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
                console.log('ERROR TEXT')
                console.log(responseText.responseText)
            }
        });
    }
    
//END OF FORM SUBMISSION OPERATIONS 
});

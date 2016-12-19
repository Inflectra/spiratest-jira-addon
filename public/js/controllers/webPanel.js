//module + Controller both set named as "WebPanelController"
angular.module('WebPanelController', []).controller('WebPanelController', function WebPanelController($scope, $window, $http, object, poster, datasetter) {

    //base URL set form window object 
    var baseUrl = $window.base;

    //chartJS color scheme 
    $scope.labels = ["Failed", "Passed", "Not Run", "Blocked", "Caution"];
    $scope.colors = ['#f47457', '#7eff7a', '#e0e0e0', '#f4f356', '#f29e56'];

    //Atlassian object: Makes iframe responsive
    AP.resize();

    //Run function "getData" with until and request dependencies 
    AP.require(["_util", 'request'], function(util, request) {
        url = getJiraData(util, request);
        getSpiraData(url, request);
    });

    //requesting stored SpiraTeam API Acsess config from JIRA 
    function getJiraData(util, request) {

        var hostString = util.decodeQueryComponent(window.location.href);
        var qs = URI(hostString).query(true);
        $scope.issueKey = qs['issueKey'];
        $scope.projectKey = qs['projectKey'];
        var url = baseUrl + '/rest/api/latest/project/' + $scope.projectKey + '/properties/spira'
        return url
    }


    //Making calls to the SpiraTeam API for requirment information
    function getSpiraData(url, request) {

        request({
            url: url,
            success: function(response) {

                //factory driven AJAX calls to get Spriteam Requirement data (object,poster,datasetter)
                poster.postmaker($http, object.objectmaker(response, $scope.issueKey))

                .then(function successCallback(response) {

                    $scope.data = datasetter.set(response)

                }, function errorCallback(response) {

                    return response
                });
            }
        });

    }
});

angular.module("requestURL", []).factory("requestURL", function() {
    return {

        makeURL: function(util, request, projectKey, baseUrl) {

            var response = {}

            var hostString = util.decodeQueryComponent(window.location.href);

            var qs = URI(hostString).query(true);
            response.projectKey = qs['projectKey'];
            response.url = baseUrl + '/rest/api/latest/project/' + response.projectKey + '/properties/spira';
            return response
        }
    }
});

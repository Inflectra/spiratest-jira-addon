module.exports = {

    postoptions: function(req) {

        var options = {
            method: 'POST',
            url: req.body.url,
            headers: {
                'content-type': 'application/json',
                authorization: 'Basic ' + req.body.encoded
            },
            body: req.body.data,
            json: true
        }

        return options

    },

    getoptions: function(req, response) {
        
      
        var requirement = response[0].ArtifactIds[0];
        var options = {
            method: 'GET',
            url: req.body.reqUrl + requirement,
            headers: {
                'content-type': 'application/json',
                authorization: 'Basic ' + req.body.encoded
            },
            json: true
        };

        return options

    }





}
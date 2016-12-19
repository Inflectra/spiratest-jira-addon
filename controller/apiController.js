var rp = require('request-promise');
var apiOptions = require('./apiOptions')
module.exports = function(req, res) {


    rp(apiOptions.postoptions(req))
        .then(function(data) {
            getSpiraInfo(data);
        })
        .catch(function(err) {
            console.log(err)
            res.send(err)
        });


    function getSpiraInfo(response) {
        
        console.log(apiOptions.getoptions(req,response))
        
        rp(apiOptions.getoptions(req,response))
            .then(function(data) {
                console.log(data)
                res.json(data);
            })
            .catch(function(err) {
               console.log(err)
            });

    }



}
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

        //if response body is empty, we end the response here 
        if (JSON.stringify(response) == '[]') {
            res.send('There is no matching requirement in Spirateam')
        }

        else {
            rp(apiOptions.getoptions(req, response))
                .then(function(data) {
                    console.log(data)
                    res.json(data);
                })
                .catch(function(err) {
                    console.log(err)
                });
        }

    }
}
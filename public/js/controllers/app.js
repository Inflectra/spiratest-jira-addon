//app module defined with factory + library dependencies defined 
var spiraDisplayApp = angular.module('spiraDisplayApp', ["chart.js", "object", "poster", "datasetter", "WebPanelController"])
    //Config blocks for chartJS presentation + setting syntax for angular brackets 
    .config(function(ChartJsProvider) {
        ChartJsProvider.setOptions({
            responsive: false
        });
    })
    .config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    });
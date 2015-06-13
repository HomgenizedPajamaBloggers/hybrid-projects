$(".button-collapse").sideNav();
    
$.ajax({
    type: "GET",
    url: "http://www.mockaroo.com/api/generate.json?key=bede6760&schema=classExample&callback=?",
    dataType: "jsonp",
    jsonpCallback: 'jsonCallback',
    contentType: "application/json"
});

angular.module('dataApp',[])
    .controller('dataController', function($scope){
   
   jsonCallback = function(data){
        $scope.dataList = data;
        $scope.$apply()
   }
});
 
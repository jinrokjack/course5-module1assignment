(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.inputText = "";
  $scope.MessagetoUser = "";
  $scope.displayMessage = function(inputText){
    var items = inputText.split(',').length;
    if(inputText==""){
      $scope.MessagetoUser = "Please input at least 1 value";
    }
    else if(items>0 && items <=3){
      $scope.MessagetoUser = "Enjoy!";
    }
    else if(items>3){
      $scope.MessagetoUser =  "Too Much!";
    }
  };
}
})();

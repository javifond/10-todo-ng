angular
  .module('app')
  .controller('homeCtrl', ['$scope', function($scope) {
    $scope.title = "My task to do";
  }]);
var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.products = ["Milk", "Bread", "Cheese", "Beer", "Other"];
  $scope.addItem = function () {
      if ($scope.products.indexOf($scope.item) == -1) {
          $scope.products.push($scope.item);
      }else {
          $scope.errortext = "The item is already in your shopping list.";
          console.log($scope.errortext);
      }

    }
    $scope.removeItem = function (x) {
        $scope.products.splice(x,1);
    }
  
});
    
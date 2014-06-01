/**
 */

'use strict';

angular.module('myApp').controller('PricingCtrl', ['$scope',
    function($scope) {

        $scope.platinum = "user.platinum";
        $scope.gold = 'user.gold';
        $scope.bronze = 'user.bronze';

    }
]);
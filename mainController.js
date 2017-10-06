angular.module('triviaApp').controller('mainController', function ($scope, dataService) {

    dataService.getTrivia().then(questions => {
        $scope.allTrivia = questions;
    })
})
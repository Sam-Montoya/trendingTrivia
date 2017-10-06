angular.module('triviaApp').controller('mainController', function($scope, dataService) {

    dataService.getTrivia().then((trivia) => {
        $scope.trivia = trivia;
    }) 
})
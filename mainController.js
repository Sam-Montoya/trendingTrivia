angular.module('triviaApp').controller('mainController', function($scope, dataService) {

    dataService.getTrivia().then((response) => {
        $scope.allTrivia = response.data;
    }) 
})
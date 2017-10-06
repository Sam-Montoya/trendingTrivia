angular.module('triviaApp').service('dataService', function($http) {

    this.addTrivia = function() {
        return $http.post('https://practiceapi.devmountain.com/api/trivia/questions');
    }

    this.deleteTrivia = function() {
        return $http.delete('https://practiceapi.devmountain.com/api/trivia/questions/:id');
    }

    this.modifyTrivia = function() {
        return $http.put('https://practiceapi.devmountain.com/api/trivia/questions/:id')
    }

    this.getTrivia = function() {
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/');
    }

    this.getTriviaByDifficulty = function() {
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/difficulty/:difficulty');
    }
})
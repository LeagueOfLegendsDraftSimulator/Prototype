var app = angular.module('ChampApp', []);

    app.controller('SelectionController', ['$scope', '$http', function($scope, $http) {
        $http.get('App/data.json').success(function(data) {
            $scope.Champions = data;

            $scope.currentChampionName = function (champ) {
                $scope.selectChamp = champ;
            };

        });



        $scope.placeholdName= 'Enter Champion Name';
        $scope.placeholdPosition= 'Enter Champion Position';
        $scope.placeholdDmg= 'Enter Damage Type';

    }]);

    app.controller('TabController', function() {
        this.tab = 1;

        this.selectTab = function (setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });
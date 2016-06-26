var app = angular.module('ChampApp', []);

    app.controller('SelectionController', function ($scope, $http) {
        $http.get('App/data.json')
            .success (function(data) {
            $scope.Champions = data;
            });

        $scope.placeholdName= 'Enter Champion Name';
        $scope.placeholdPosition= 'Enter Champion Position';
        $scope.placeholdDmg= 'Enter Damage Type';

    });



    app.controller('TabController', function() {
        this.tab = 1;

        this.selectTab = function (setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });
    // $scope.currentChampionName = null;
    // $scope.currentPosition = null;
    //
    // function setCurrentPosition (position) {
    //     $scope.currentPosition = position;
    // };
    //
    // $scope.setCurrentPosition = setCurrentPosition;
    //
    // function setCurrentName (ChampionName) {
    //     $scope.currentChampionName = ChampionName;
    // };
    //
    // $scope.setCurrentName = setCurrentName;
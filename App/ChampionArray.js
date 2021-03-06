var app = angular.module('ChampApp', []);

    app.controller('SelectionController', function ($scope){
        $scope.Champions =
            [
                {ChampionName:"Aatrox",Position:"Mid",Damage:"AD",url:"http://champion.gg/champion/Aatrox",src:"./Assets/ChampIcon/Aatrox_Square_0.png"},{ChampionName:"Ahri",Position:"Mid",Damage:"AP",url:"http://champion.gg/champion/Ahri",src:"Assets/ChampIcon/Ahri_Square_0.png"},{ChampionName:"Akali",Position:"Mid",Damage:"Mixed",url:"http://champion.gg/champion/Akali",src:"Assets/ChampIcon/Akali_Square_0.png"},{ChampionName:"Alistar",Position:"Support",Damage:"AP",url:"http://champion.gg/champion/Alisar",src:"Assets/ChampIcon/Alistar_Square_0.png"},{ChampionName:"Amumu",Position:"Jungle",Damage:"AP",url:"http://champion.gg/champion/Amumu",src:"Assets/ChampIcon/Amumu_Square_0.png"},{ChampionName:"Anivia",Position:"Mid",Damage:"AP",url:"http://champion.gg/champion/Anivia",src:"Assets/ChampIcon/Anivia_Square_0.png"},{ChampionName:"Annie",Position:"Mid",Damage:"AP",url:"http://champion.gg/champion/Annie",src:"Assets/ChampIcon/Annie_Square_0.png"},{ChampionName:"Ashe",Position:"ADC",Damage:"AD",url:"http://champion.gg/champion/Ashe",src:"Assets/ChampIcon/Ashe_Square_0.png"},{ChampionName:"Aurelion Sol",Position:"Mid",Damage:"AP",url:"http://champion.gg/champion/AurelionSol",src:"Assets/ChampIcon/AurelionSol_Square_0.png"},{ChampionName:"Azir",Position:"Mid",Damage:"AP",url:"http://champion.gg/champion/Azir",src:"Assets/ChampIcon/Azir_Square_0.png"},{ChampionName:"Bard",Position:"Support",Damage:"Ap",url:"http://champion.gg/champion/Bard",src:"Assets/ChampIcon/Bard_Square_0.png"},{ChampionName:"Blitzcrank",Position:"Support",Damage:"AP",url:"http://champion.gg/champion/Blitzcrank",src:"Assets/ChampIcon/Blitzcrank_Square_0.png"},{ChampionName:"Cassiopeia",Position:"Mid",Damage:"AP",url:"http://champion.gg/champion/Cassiopeia",src:"Assets/ChampIcon/Cassiopeia_Square_0.png"},{ChampionName:"Darius",Position:"Top",Damage:"AD",url:"http://champion.gg/champion/Darius",src:"Assets/ChampIcon/Darius_Square_0.png"},{ChampionName:"Ezreal",Position:"ADC",Damage:"Mixed",url:"http://champion.gg/champion/Ezreal",src:"Assets/ChampIcon/Ezreal_Square_0.png"},{ChampionName:"Fiddlesticks",Position:"Jungle",Damage:"AP",url:"http://champion.gg/champion/Fiddlesticks",src:"Assets/ChampIcon/Fiddlesticks_Square_0.png"},{ChampionName:"Gangplank",Position:"Top",Damage:"AD",url:"http://champion.gg/champion/Gangplank",src:"Assets/ChampIcon/Gangplank_Square_0.png"},
            ]
        

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
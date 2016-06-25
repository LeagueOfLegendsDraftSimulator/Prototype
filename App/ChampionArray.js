var app = angular.module('ChampApp', []);
    app.controller('SelectionController', function ($scope){
        $scope.Champions = [

            {ChampionName: "Ahri", Position: "Mid", Damage: "AP", url:"http://champion.gg/champion/Ahri", src: "Assets/ChampIcon/Aatrox_Square_0.png"},
            {ChampionName: "Blitzcrank", Position: "Support", Damage: "AP", url:"http://champion.gg/champion/Blitzcrank", src: "Assets/ChampIcon/Blitzcrank_Square_0.png" },
            {ChampionName: "Cassiopeia", Position: "Mid", Damage: "AP", url:"http://champion.gg/champion/Cassiopeia", src: "Assets/ChampIcon/Cassiopeia_Square_0.png" },
            {ChampionName: "Darius", Position: "Top", Damage: "AD", url:"http://champion.gg/champion/Darius", src: "Assets/ChampIcon/Darius_Square_0.png" },
            {ChampionName: "Ezreal", Position: "ADC", Damage: "Mixed", url:"http://champion.gg/champion/Ezreal", src: "Assets/ChampIcon/Ezreal_Square_0.png" },
            {ChampionName: "Fiddlesticks", Position: "Jungle", Damage: "AP", url:"http://champion.gg/champion/Fiddlesticks", src: "Assets/ChampIcon/Fiddlesticks_Square_0.png" },
            {ChampionName: "Gangplank", Position: "Top", Damage: "AD", url:"http://champion.gg/champion/Gangplank", src: "Assets/ChampIcon/Gangplank_Square_0.png" },

        ]
    });
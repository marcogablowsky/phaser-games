MAG.GeoStrike.MainMenu = function () {
    this.music = null;
    this.playButton = null;
};

MAG.GeoStrike.MainMenu.prototype = {
    create: function () {
        this.startGame();
    },

    startGame: function () {
        this.state.start('Game');
    }
};
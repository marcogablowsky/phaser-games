// this is here for testing/debugging reasons, shall be removed after game is finished
var mygame = (function () {
    'use strict';

    var conf = MAG.GeoStrike.gameConfig.game;
    var game = new Phaser.Game(conf.width, conf.height, conf.renderer, 'game');

    /* This has to be done in callback function since the State scripts are loaded after Main.js */
    MAG.GeoStrike.onBoot(game);

    return game;
})();

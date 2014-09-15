// this is here for testing/debugging reasons, shall be removed after game is finished
var mygame = (function () {
    'use strict';

    var conf = NAMESPACE.GameName.gameConfig.game;
    var game = new Phaser.Game(conf.width, conf.height, conf.renderer, 'game');

    /* This has to be done in callback function since the State scripts are loaded after Main.js */
    NAMESPACE.GameName.onBoot(game);

    return game;
})();

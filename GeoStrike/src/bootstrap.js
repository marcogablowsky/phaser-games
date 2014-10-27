(function () {
    var conf = MAG.GeoStrike.gameConfig.game;
    var game = new Phaser.Game(conf.width, conf.height, conf.renderer, 'game');
    MAG.GeoStrike.onBoot(game);
})();

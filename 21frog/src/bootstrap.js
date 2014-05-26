// this is here for testing/debugging reasons, shall be removed after game is finished
var mygame = (function () {

    var game = new Phaser.Game(640, 360, Phaser.AUTO, 'game');
    //	Add the States your game has.
    game.state.add('Boot', MAG.Frog21.Boot);
    game.state.add('Preloader', MAG.Frog21.Preloader);
    game.state.add('MainMenu', MAG.Frog21.MainMenu);
    game.state.add('Game', MAG.Frog21.Game);

    //	Now start the Boot state.
    game.state.start('Boot');
    return game;
})();

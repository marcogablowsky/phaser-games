MAG.GeoStrike.Game = function (game) {
    'use strict';

    var _game = game,
        _gameConfig = MAG.GeoStrike.gameConfig,
        _entityManager,
        _state = {
            gameOver: false,
            lives: 3,
            score: 0
        },

        quitGame = function () {
            //	Here you should destroy anything you no longer need.
            //	Stop music, delete sprites, purge caches, free resources, all that good stuff.
            //	Then let's go back to the main menu.
            this.state.start('MainMenu');
        },

        shallQuit = function () {
            if (_state.gameOver) {
                return true;
            } else {
                return false;
            }
        },

        create = function () {
            this.physics.startSystem(_gameConfig.physics.constant);
            _game.add.sprite(0,0,'notebook');
            _entityManager = new MAG.phaser.EntityManager(_game, MAG.GeoStrike.entities);
        },

        update = function () {
            _entityManager.update();
            if (shallQuit()) {
                quitGame();
            }
        },

        score = function(amount){
            _state.score += amount;
        },

        lives = function(amount){
            _state.lives += amount;
        };

    return {
        create: create,
        update: update,
        score: score,
        lives: lives
    };
};

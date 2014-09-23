NAMESPACE.GameName.Game = function (game) {
    'use strict';

    var _game = game,
        _gameConfig = NAMESPACE.GameName.gameConfig,
        _gameOver = false,
        _entityManager,

        quitGame = function () {
            //	Here you should destroy anything you no longer need.
            //	Stop music, delete sprites, purge caches, free resources, all that good stuff.
            //	Then let's go back to the main menu.
            this.state.start('MainMenu');
        },

        shallQuit = function () {
            if (_gameOver) {
                return true;
            } else {
                return false;
            }
        },

        create = function () {
            this.physics.startSystem(_gameConfig.physics.constant);
            _game.add.sprite(0,0,'notebook');
            _entityManager = new NAMESPACE.phaser.EntityManager(_game, NAMESPACE.GameName.entities);
        },

        update = function () {
            _entityManager.update();
            if (shallQuit()) {
                quitGame();
            }
        };

    return {
        create: create,
        update: update
    };
};

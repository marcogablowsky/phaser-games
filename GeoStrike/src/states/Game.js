MAG.GeoStrike.Game = function (game) {
    'use strict';

    var _gameConfig = MAG.GeoStrike.gameConfig,
        _entityManager,

        resetState = function () {
            return {
                stageId: 1,
                stage: undefined,
                gameOver: false,
                lives: 3,
                score: 0
            };
        },
        _state = resetState(),

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

            var entityFactory = new MAG.phaser.EntityFactory(game, MAG.GeoStrike.entities);
            _entityManager = new MAG.phaser.EntityManager(entityFactory);

            _entityManager.createEntity('StaticBackground');
            _entityManager.createEntity('Player');

            _state.stage = new MAG.GeoStrike.Stage(_entityManager, MAG.GeoStrike.stages['stage' + _state.stageId]);
        },

        update = function () {
            _entityManager.update();
            _state.stage.update();
            if (shallQuit()) {
                quitGame();
            }
        },

        render = function(){
            _entityManager.render();
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
        render: render,
        score: score,
        lives: lives
    };
};

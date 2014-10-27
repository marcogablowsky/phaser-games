MAG.GeoStrike.Game = function (game) {
    var entityFactory = new MAG.phaser.EntityFactory(game, MAG.GeoStrike.entities);
    this._entityManager = new MAG.phaser.EntityManager(game, entityFactory);
    this._state = this._resetState();
};

MAG.GeoStrike.Game.prototype = {
    _resetState: function () {
        return {
            stageId: 1,
            stage: undefined,
            gameOver: false,
            lives: 3,
            score: 0
        };
    },

    _quitGame: function () {
        //	Here you should destroy anything you no longer need.
        //	Stop music, delete sprites, purge caches, free resources, all that good stuff.
        //	Then let's go back to the main menu.
        this.state.start('MainMenu');
    },

    _shallQuit: function () {
        return this._state.gameOver;
    },

    create: function () {
        this.physics.startSystem(MAG.GeoStrike.gameConfig.physics.constant);
        this._entityManager.createEntity('StaticBackground');
        var beam = this._entityManager.createBeam();
        this._entityManager.createEntity('Player', beam);

        this._state.stage = new MAG.GeoStrike.Stage(this._entityManager, MAG.GeoStrike.stages['stage' + this._state.stageId]);
    },

    update: function () {
        this._entityManager.update();
        this._state.stage.update();
        if (this._shallQuit()) {
            this._quitGame();
        }
    },

    render: function () {
        this._entityManager.render();
    },

    score: function (amount) {
        this._state.score += amount;
    },

    lives: function (amount) {
        this._state.lives += amount;
    }
};

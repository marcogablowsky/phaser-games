MAG.GeoStrike.Game = function (game) {
    this._entityManager = new MAG.phaser.EntityManager(game, MAG.GeoStrike.entities,false);
    this._resetState();

    game.magcustom = {};
    game.magcustom.playstate = this;
};

MAG.GeoStrike.Game.prototype = {
    _resetState: function () {
        this._state = {
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
        this._entityManager.createPlayer();
        this._state.stage = new MAG.GeoStrike.Stage(this._entityManager, this._state.stageId);
    },

    update: function () {
        this._entityManager.update();
        this._state.stage.update();
        if (this._shallQuit()) {
            this._resetState();
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
        console.log('lives: '+this._state.lives);
        if(this._state.lives <= 0){
            this._state.gameOver = true;
        }
        return this._state.lives;
    }
};

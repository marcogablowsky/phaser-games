MAG.Frog21.Game = function (game) {
    /*
     //	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:
     this.game;		//	a reference to the currently running game
     this.add;		//	used to add sprites, text, groups, etc
     this.camera;	//	a reference to the game camera
     this.cache;		//	the game cache
     this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
     this.load;		//	for preloading assets
     this.math;		//	lots of useful common math operations
     this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
     this.stage;		//	the game stage
     this.time;		//	the clock
     this.tweens;	//	the tween manager
     this.world;		//	the game world
     this.particles;	//	the particle manager
     this.physics;	//	the physics manager
     this.rnd;		//	the repeatable random number generator
     */
    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
    this.gameConfig = MAG.Frog21.gameConfig;
    this.gameOver = false;
};

MAG.Frog21.Game.prototype = {

    quitGame: function (pointer) {
        //	Here you should destroy anything you no longer need.
        //	Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //	Then let's go back to the main menu.
        this.state.start('MainMenu');
    },

    shallQuit: function () {
        if (this.gameOver) {
            return true;
        } else {
            return false;
        }
    },

    create: function () {
        this.physics.startSystem(this.gameConfig.physics);
    },

    update: function () {
        if (this.shallQuit()) {
            this.quitGame();
        }
    },

    render: function () {
        if (this.gameConfig.debug.renderTouchAreas) {
            this.renderTouchAreas();
        }
    },

    renderTouchAreas: function () {
        var touchWidth = this.game.width / 10;
        var touchHeight = this.game.height / 4;

        var row;
        var col;

        for (row = 0; row < 4; row++) {
            for (col = 0; col < 10; col++) {

                this.game.debug.geom(new Phaser.Rectangle(col * touchWidth, row * touchHeight, touchWidth, touchHeight), 'rgba(0,255,0,1)', false)
            }
        }
    }

};

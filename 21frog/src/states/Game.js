var MAG = MAG;
MAG.Frog21.Game = function () {
    'use strict';
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

    this.entityManager = new MAG.Phaser.EntityManager();
};

MAG.Frog21.Game.prototype = {
    quitGame: function () {
        'use strict';
        //	Here you should destroy anything you no longer need.
        //	Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //	Then let's go back to the main menu.
        this.state.start('MainMenu');
    },

    shallQuit: function () {
        'use strict';
        if (this.gameOver) {
            return true;
        } else {
            return false;
        }
    },

    configureKeyCapture: function () {
        'use strict';
        /* Prevent defaults in Browser */
        this.game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN
        ]);
    },

    create: function () {
        'use strict';
        this.physics.startSystem(this.gameConfig.physics.constant);
        this.physics[this.gameConfig.physics.name].gravity.y = 2600;
        this.configureKeyCapture();

        this.entityManager.addEntity('player', new MAG.Frog21.Player(this.game, 200, this.game.height - 40));

        // Create some ground for the player to walk on
        this.ground = this.game.add.group();
        for (var x = 0; x < this.game.width; x += 40) {
            // Add the ground blocks, enable physics on each, make them immovable
            var groundBlock = this.game.add.sprite(x, this.game.height - 2, 'ground');
            this.game.physics.enable(groundBlock, Phaser.Physics.ARCADE);
            groundBlock.body.immovable = true;
            groundBlock.body.allowGravity = false;
            this.ground.add(groundBlock);
        }
    },

    update: function () {
        'use strict';
        if (this.shallQuit()) {
            this.quitGame();
        }

        this.game.physics.arcade.collide(this.entityManager.findByName('player').sprite, this.ground);
        this.entityManager.update();
    },

    render: function () {
        'use strict';
        if (this.gameConfig.debug.renderTouchAreas) {
            this.renderTouchAreas();
        }
    },

    renderTouchAreas: function () {
        'use strict';
        var touchWidth = this.game.width / 10;
        var touchHeight = this.game.height / 4;

        var row;
        var col;

        for (row = 0; row < 4; row++) {
            for (col = 0; col < 10; col++) {
                this.game.debug.geom(new Phaser.Rectangle(col * touchWidth, row * touchHeight, touchWidth, touchHeight), 'rgba(0,255,0,1)', false);
            }
        }
    }
};

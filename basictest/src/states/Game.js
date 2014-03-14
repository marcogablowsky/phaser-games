
MagGame.Game = function (game) {

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

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

MagGame.Game.prototype = {

    createMap: function(){
        this.map = this.game.add.tilemap('testmap');
        //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
        //  The second parameter maps this name to the Phaser.Cache key 'tiles'
        this.map.addTilesetImage('basictiles16x16', 'tiles');

        this.map.setCollisionBetween(0, 7);
        //  Creates a layer from the World1 layer in the map data.
        //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
        this.layer = this.map.createLayer('main');
        //this.layer.debug = true;

        //  This resizes the game world to match the layer dimensions
        this.layer.resizeWorld();
    },

    createPlayer: function(){
        this.player = this.game.add.sprite(16, 32, 'player');
        //What is this? Causes slowdown walking right
        //this.player.body.linearDamping = 1;
        this.player.body.collideWorldBounds = true;
        this.game.camera.follow(this.player);
    },

	create: function () {
        this.createMap();
        this.createPlayer();
        this.cursors = this.game.input.keyboard.createCursorKeys();
    },

	update: function () {
        this.game.physics.collide(this.player,this.layer);

        this.player.body.velocity.x = 0;

        if (this.player.body.blocked.down){
            this.player.body.gravity.y = 200;
        }
        else{
            this.player.body.gravity.y = 600;
        }

        if (this.cursors.up.isDown && this.player.body.blocked.down){
            this.player.body.velocity.y = -250;
        }
        if (this.cursors.right.isDown){
            this.player.body.velocity.x = 150;
            this.player.scale.x = 1;
        }
        if (this.cursors.left.isDown){
            this.player.body.velocity.x = -150;
            this.player.scale.x = -1;
        }


    },

    render: function(){

        //this.game.debug.renderCameraInfo(this.game.camera, 320, 320);
        //this.game.debug.renderPhysicsBody(this.player.body);
    },

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.game.state.start('MainMenu');

	}

};

MagGame.Game = function (game) {

    this.playerVelocity = {x: 150, y: -270},
        this.playerScale = {x: 1, y: 1}
    this.boundsIndex = 0;
    this.worldBounds = [
        {x: 0, y: 480, w: 1024, h: 480},
        {x: 1024, y: 0, w: 512, h: 960},
        {x: 0, y: 0, w: 1024, h: 480}
    ];

};

MagGame.Game.prototype = {

    createMap: function () {
        this.map = this.game.add.tilemap('testmap');
        this.map.addTilesetImage('basictiles16x16', 'tiles');
        this.map.setCollisionBetween(0, 14);

        //this.map.createLayer('bg');
        this.layer = this.map.createLayer('main');
        this.layer.resizeWorld();
        this.layer.debug = true;
    },

    createPlayer: function () {
        this.player = this.game.add.sprite(40, 800, 'player');
        this.game.physics.arcade.enable(this.player);
        this.player.scale.x = this.playerScale.x;
        this.player.scale.y = this.playerScale.y;
        this.player.anchor.setTo(0.5, 0.5);
        this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_PLATFORMER);
        this.world.setBounds(0, 480, 1024, 480);
    },

    create: function () {

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.createMap();
        this.createPlayer();
        this.cursors = this.game.input.keyboard.createCursorKeys();
        //this.music = this.add.audio('brinstar', 1, true);
        //this.music.play('',0,1,true);
    },

    handleCollision: function () {
        this.game.physics.arcade.collide(this.player, this.layer);
    },

    handleInput: function () {
        var cur = this.cursors;
        var body = this.player.body;

        function adjustPlayerGravity() {
            if (body.blocked.down) {
                body.gravity.y = 200;
            }
            else {
                body.gravity.y = 600;
            }
        }

        adjustPlayerGravity();

        if (!cur.left.isDown && !cur.right.isDown) {
            this.player.body.velocity.x = 0;
        }
        if (cur.up.isDown) {
            if (this.player.body.blocked.down) {
                body.velocity.y = this.playerVelocity.y;
            }
        }
        if (cur.right.isDown) {
            body.velocity.x = this.playerVelocity.x;
            this.player.scale.x = this.playerScale.x;
        }
        if (cur.left.isDown) {
            body.velocity.x = -this.playerVelocity.x;
            this.player.scale.x = -this.playerScale.x;
        }
    },

    update: function () {
        this.handleCollision();
        this.handleInput();

        if (this.cursors.down.justReleased(20)) {
            this.boundsIndex++;
            if (this.boundsIndex >= this.worldBounds.length) {
                this.boundsIndex = 0;
            }
            console.log('boundsIndex:' + this.boundsIndex);

            var bounds = this.worldBounds[this.boundsIndex];
            this.camera.bounds.setTo(bounds.x, bounds.y, bounds.w, bounds.h);
        }

    },

    render: function () {
        this.game.debug.body(this.player);

        this.game.debug.cameraInfo(this.game.camera, 32, 32);
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

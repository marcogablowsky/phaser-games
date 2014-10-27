MAG.GeoStrike.entities.Player = function (game) {
    this._conf = MAG.GeoStrike.gameConfig;
    this._game = game;

    this._sprite = game.add.sprite(game.width / 2, game.height - 150, 'ship');
    this._sprite.anchor.setTo(0.5);
    game.physics.enable(this._sprite, this._conf.physics.constant);
    this._body = this._sprite.body;
    this._body.collideWorldBounds = true;
    this._body.height = this._sprite.height / 2;
    this._body.width = this._sprite.width / 2;

    this._speed = 7;
    this._cursors = game.input.keyboard.createCursorKeys();
    this._fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this._fireDelay = 300;
    this._beamTimer = game.time.now;

    this._beams = game.add.group();
    this._beams.enableBody = true;
    this._beams.physicsBodyType = this._conf.physics.constant;
    this._beams.createMultiple('12', 'beam');
    this._beams.setAll('anchor.x', 0.5);
    this._beams.setAll('anchor.y', 1);
    this._beams.setAll('outOfBoundsKill', true);
    this._beams.setAll('checkWorldBounds', true);
};

MAG.GeoStrike.entities.Player.prototype = {
    _fire: function () {
        if (this._game.time.now > this._beamTimer) {
            var bullet = this._beams.getFirstExists(false);
            if (bullet) {
                bullet.reset(this._sprite.x, this._sprite.y - this._sprite.height / 2);
                bullet.body.velocity.y = -400;
                this._beamTimer = this._game.time.now + this._fireDelay;
            }
        }
    },

    update: function () {
        if (this._cursors.up.isDown) {
            this._sprite.y -= this._speed;
        }
        else if (this._cursors.down.isDown) {
            this._sprite.y += this._speed;
        }

        if (this._cursors.left.isDown) {
            this._sprite.x -= this._speed;
        }
        else if (this._cursors.right.isDown) {
            this._sprite.x += this._speed;
        }

        if (this._fireButton.isDown) {
            this._fire();
        }
    },

    render: function () {
        this._game.debug.body(this._sprite);
    }
};

MAG.GeoStrike.entities.Player.preload = function (game) {
    game.load.image('ship', 'assets/ship.png');
    game.load.image('beam', 'assets/beam.png');
};

Object.defineProperty(MAG.GeoStrike.entities.Player.prototype, 'entityType', {
    get: function () {
        return MAG.phaser.entityTypes.player;
    }
});
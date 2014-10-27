MAG.GeoStrike.entities.Player = function (game, beam) {
    this._conf = MAG.GeoStrike.gameConfig;
    this._game = game;
    this._beam = beam;

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

};

MAG.GeoStrike.entities.Player.prototype = {
    _fire: function () {
        this._beam.spawn(this._sprite.x, this._sprite.y, this._sprite.width / 2);
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

};

Object.defineProperty(MAG.GeoStrike.entities.Player.prototype, 'entityType', {
    get: function () {
        return MAG.phaser.entityTypes.player;
    }
});
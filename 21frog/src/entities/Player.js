MAG.Frog21.Player = function (game, x, y) {
    var config = MAG.Frog21.gameConfig;

    this.game = game;
    this.sprite = this.game.add.sprite(x, y, 'frog');
    this.sprite.anchor.set(0.5);
    this.game.physics.enable(this.sprite, config.physics);
    this.sprite.body.collideWorldBounds = true;

    // define movement constants here
    this.JUMP_SPEED = -1000;
};

MAG.Frog21.Player.preload = function (game) {
    game.load.image('frog', 'assets/frog2.png');
};

MAG.Frog21.Player.prototype = {

    update: function () {
        var onTheGround = this.sprite.body.touching.down;

        if (onTheGround && this.upInputIsActive()) {
            // Jump when the player is touching the ground and the up arrow is pressed
            this.sprite.body.velocity.y = this.JUMP_SPEED;
        }
    },

    upInputIsActive: function () {
        var isActive = this.game.input.keyboard.justPressed(Phaser.Keyboard.UP);
        isActive |= (this.game.input.activePointer.justPressed());

        return isActive;
    }
};

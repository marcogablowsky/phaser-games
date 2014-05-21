MAG.Frog21.Player = function (game, x, y) {
    'use strict';
    var config = MAG.Frog21.gameConfig;

    this.game = game;
    this.sprite = this.game.add.sprite(x, y, 'frog');
    this.sprite.anchor.set(0.5);
    this.game.physics.enable(this.sprite, config.physics);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.bounce.x = 1.0;
    this.game.input.keyboard.addCallbacks(this, MAG.Frog21.Controls.keyDownCallback);

    this.velocity = {x: 150, y: -400};
};

MAG.Frog21.Player.preload = function (game) {
    "use strict";
    game.load.image('frog', 'assets/frog2.png');
};

MAG.Frog21.Player.prototype = {

    update: function () {
        "use strict";
        var input = this.game.input;
        var onTheGround = this.sprite.body.touching.down;

        if (onTheGround) {
            this.sprite.body.velocity.x = 0;
        }

        if (onTheGround && input.activePointer.justPressed()) {
            var body = this.sprite.body;
            var factorX = this.calculateFactorX(input.activePointer.x);
            var factorY = this.calculateFactorY(input.activePointer.y);
            console.log('X:' + factorX + ' ; y:' + factorY);
            this.sprite.body.velocity.x = factorX * this.velocity.x;
            this.sprite.body.velocity.y = factorY * this.velocity.y;
            console.log('VelX:' + body.velocity.x + ' ; VelY:' + body.velocity.y);
        }
    },

    calculateFactorX: function (coordX) {
        "use strict";
        var ref = this.game.width / 10;
        var factor = Math.ceil(coordX / ref);
        if (factor > 5) {
            return factor - 5;
        } else {
            return -(6 - factor);
        }
    },

    calculateFactorY: function (coordY) {
        "use strict";
        var ref = this.game.height / 4;
        return 5 - Math.ceil(coordY / ref);
    }
};

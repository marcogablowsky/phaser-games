MAG.Frog21.Controls = {};

MAG.Frog21.Controls.keyDownCallback = function (event) {
    "use strict";
    var key = event.keyCode;
    var factors;

    console.log('Keycode:' + key);
    switch (key) {
        // first row
    case Phaser.Keyboard.ONE:
        factors = {x: -5, y: 4};
        break;
    case Phaser.Keyboard.TWO:
        factors = {x: -4, y: 4};
        break;
    case Phaser.Keyboard.THREE:
        factors = {x: -3, y: 4};
        break;
    case Phaser.Keyboard.FOUR:
        factors = {x: -2, y: 4};
        break;
    case Phaser.Keyboard.FIVE:
        factors = {x: -1, y: 4};
        break;
    case Phaser.Keyboard.SIX:
        factors = {x: 1, y: 4};
        break;
    case Phaser.Keyboard.SEVEN:
        factors = {x: 2, y: 4};
        break;
    case Phaser.Keyboard.EIGHT:
        factors = {x: 3, y: 4};
        break;
    case Phaser.Keyboard.NINE:
        factors = {x: 4, y: 4};
        break;
    case Phaser.Keyboard.ZERO:
        factors = {x: 5, y: 4};
        break;

        // second row
    case Phaser.Keyboard.Q:
        factors = {x: -5, y: 3};
        break;
    case Phaser.Keyboard.W:
        factors = {x: -4, y: 3};
        break;
    case Phaser.Keyboard.E:
        factors = {x: -3, y: 3};
        break;
    case Phaser.Keyboard.R:
        factors = {x: -2, y: 3};
        break;
    case Phaser.Keyboard.T:
        factors = {x: -1, y: 3};
        break;
    case Phaser.Keyboard.Z:
        factors = {x: 1, y: 3};
        break;
    case Phaser.Keyboard.U:
        factors = {x: 2, y: 3};
        break;
    case Phaser.Keyboard.I:
        factors = {x: 3, y: 3};
        break;
    case Phaser.Keyboard.O:
        factors = {x: 4, y: 3};
        break;
    case Phaser.Keyboard.P:
        factors = {x: 5, y: 3};
        break;

        //third row
    case Phaser.Keyboard.A:
        factors = {x: -5, y: 2};
        break;
    case Phaser.Keyboard.S:
        factors = {x: -4, y: 2};
        break;
    case Phaser.Keyboard.D:
        factors = {x: -3, y: 2};
        break;
    case Phaser.Keyboard.F:
        factors = {x: -2, y: 2};
        break;
    case Phaser.Keyboard.G:
        factors = {x: -1, y: 2};
        break;
    case Phaser.Keyboard.H:
        factors = {x: 1, y: 2};
        break;
    case Phaser.Keyboard.J:
        factors = {x: 2, y: 2};
        break;
    case Phaser.Keyboard.K:
        factors = {x: 3, y: 2};
        break;
    case Phaser.Keyboard.L:
        factors = {x: 4, y: 2};
        break;
    case Phaser.Keyboard.COLON:
        factors = {x: 5, y: 2};
        break;

        //fourth row
    case Phaser.Keyboard.Y:
        factors = {x: -5, y: 1};
        break;
    case Phaser.Keyboard.X:
        factors = {x: -4, y: 1};
        break;
    case Phaser.Keyboard.C:
        factors = {x: -3, y: 1};
        break;
    case Phaser.Keyboard.V:
        factors = {x: -2, y: 1};
        break;
    case Phaser.Keyboard.B:
        factors = {x: -1, y: 1};
        break;
    case Phaser.Keyboard.N:
        factors = {x: 1, y: 1};
        break;
    case Phaser.Keyboard.M:
        factors = {x: 2, y: 1};
        break;
    case 188:
        factors = {x: 3, y: 1};
        break;
    case 190:
        factors = {x: 4, y: 1};
        break;
    case 189:
        factors = {x: 5, y: 1};
        break;
    }
    if (factors && this.sprite.body.touching.down) {
        this.sprite.body.velocity.x = factors.x * this.velocity.x;
        this.sprite.body.velocity.y = factors.y * this.velocity.y;
    }
}

MAG.GeoStrike.entities.Infinito = function(game){
    this._sprite = game.add.sprite(game.rnd.integerInRange(20, game.width - 20), 20, 'infinito');
    game.physics.enable(this._sprite, MAG.GeoStrike.gameConfig.physics.constant);
    this._body = this._sprite.body;
    this._game = game;

    this._body.velocity.x = 140;
    this._body.velocity.y = 120;
    this._body.height = this._sprite.height / 2;
    this._body.width = this._sprite.width / 2;
    this._sprite.anchor.setTo(0.5);
};

MAG.GeoStrike.entities.Infinito.prototype = {
    update: function () {
        if (this._body.velocity.x > 0 && this._sprite.x > this._game.width - this._game.width - 20) {
            this._body.velocity.x = -this._body.velocity.x;
        } else if (this._body.velocity.x < 0 && this._sprite.x < this._game.width - 20) {
            this._body.velocity.x = -this._body.velocity.x;
        }
        this._sprite.rotation += 0.10;
    },

    render: function () {
        this._game.debug.body(this._sprite);
    }
};

MAG.GeoStrike.entities.Infinito.preload = function(game){
    game.load.image('infinito', 'assets/infinito.png');
};

Object.defineProperty(MAG.GeoStrike.entities.Infinito.prototype, 'entityType', {
    get: function () {
        return MAG.phaser.entityTypes.enemy;
    }
});
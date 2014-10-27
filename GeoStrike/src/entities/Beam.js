MAG.GeoStrike.entities.Beam = function (game) {
    this._game = game;
    this._beams = game.add.group();
    this._beams.enableBody = true;
    this._beams.physicsBodyType = MAG.GeoStrike.gameConfig.physics.constant;
    this._beams.createMultiple('24', 'beam');
    this._beams.setAll('anchor.x', 0.5);
    this._beams.setAll('anchor.y', 1);
    this._beams.setAll('outOfBoundsKill', true);
    this._beams.setAll('checkWorldBounds', true);

    this._beamTimer = game.time.now;
    this._fireDelay = 300;
};

MAG.GeoStrike.entities.Beam.prototype = {
    spawn: function (x, y, offsetY) {
        if (this._game.time.now > this._beamTimer) {
            var bullet = this._beams.getFirstExists(false);
            if (bullet) {
                bullet.reset(x, y - offsetY);
                bullet.body.velocity.y = -400;
                this._beamTimer = this._game.time.now + this._fireDelay;
            }
        }
    },

    collidable: function () {
        return this._beams;
    }
};

MAG.GeoStrike.entities.Beam.preload = function (game) {
    game.load.image('beam', 'assets/beam.png');
};

Object.defineProperty(MAG.GeoStrike.entities.Beam.prototype, 'entityType', {
    get: function () {
        return MAG.phaser.entityTypes.player;
    }
});

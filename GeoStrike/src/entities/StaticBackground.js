MAG.GeoStrike.entities.StaticBackground = function (game) {
    this.sprite = game.add.sprite(0,0,'static-bg');
};

MAG.GeoStrike.entities.StaticBackground.preload = function (game) {
    game.load.image('static-bg', 'assets/notebook.png');
};

Object.defineProperty(MAG.GeoStrike.entities.StaticBackground.prototype, 'entityType',{
    get: function () {
        return MAG.phaser.entityTypes.statics;
    }
});

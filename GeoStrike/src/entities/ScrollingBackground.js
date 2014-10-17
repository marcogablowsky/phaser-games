MAG.GeoStrike.entities.ScrollingBackground = function (game) {
    this.sprite = game.add.tileSprite(10, 10, 1004, 748, 'scrolling-bg');
};

MAG.GeoStrike.entities.ScrollingBackground.prototype = {
    update: function () {
        this.sprite.tilePosition.y += 2;
    }
};

MAG.GeoStrike.entities.ScrollingBackground.preload = function (game) {
    game.load.image('scrolling-bg', 'assets/stage_bg.png');
};

Object.defineProperty(MAG.GeoStrike.entities.ScrollingBackground.prototype, 'entityType',{
    get: function () {
        return MAG.phaser.entityTypes.statics;
    }
});
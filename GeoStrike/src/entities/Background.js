MAG.GeoStrike.entities.Background = function (game) {
    'use strict';

    var _sprite = game.add.tileSprite(10, 10, 1004, 748, 'bg'),

        update = function () {
            _sprite.tilePosition.y += 2;
        };

    return {
        update: update,
        entityType: 'statics'
    };

};

MAG.GeoStrike.entities.Background.preload = function (game) {
    'use strict';
    game.load.image('bg', 'assets/stage_bg.png');
};

NAMESPACE.GameName.entities.Background = function(game){
    'use strict';

    var _sprite = game.add.tileSprite(0, 0, 1024, 768, 'bg'),

        update = function(){
            _sprite.tilePosition.y += 2;
        };

    return {
        update: update
    };

};

NAMESPACE.GameName.entities.Background.preload = function(game){
    'use strict';
    game.load.image('bg', 'assets/stage_bg.png');
};
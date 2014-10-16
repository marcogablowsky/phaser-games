MAG.GeoStrike.entities.Infinito = function(game){
    'use strict';
    var _sprite = game.add.sprite(game.rnd.integerInRange(20,game.width-20), 20, 'infinito'),

        update = function(){
            if(_sprite.body.velocity.x > 0 && _sprite.x > game.width - game.width / 4){
                _sprite.body.velocity.x = -_sprite.body.velocity.x;
            }else if(_sprite.body.velocity.x < 0 && _sprite.x < game.width / 4){
                _sprite.body.velocity.x = -_sprite.body.velocity.x;
            }

            _sprite.rotation += 0.08;
        },

        render = function (){
            game.debug.body(_sprite);
        };

    game.physics.enable(_sprite, MAG.GeoStrike.gameConfig.physics.constant);

    _sprite.body.velocity.x = 100;
    _sprite.body.velocity.y = 50;

    _sprite.body.height = _sprite.height /2;
    _sprite.body.width = _sprite.width /2;

    _sprite.body.collideWorldBounds = true;

    _sprite.anchor.setTo(0.5);

    return {
        update: update,
        render: render,
        entityType: 'enemy'
    };
};

MAG.GeoStrike.entities.Infinito.preload = function(game){
    'use strict';
    game.load.image('infinito', 'assets/infinito.png');
};
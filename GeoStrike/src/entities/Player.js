
NAMESPACE.GameName.entities.Player = function(game){
    'use strict';
    var _sprite = game.add.sprite(game.width /2, game.height - 100, 'ship'),
        _speed = 7,
        _cursors = game.input.keyboard.createCursorKeys(),

        update = function(){
            if (_cursors.up.isDown)
            {
                _sprite.y -= _speed;
            }
            else if (_cursors.down.isDown)
            {
                _sprite.y += _speed;
            }

            if (_cursors.left.isDown)
            {
                _sprite.x -= _speed;
            }
            else if (_cursors.right.isDown)
            {
                _sprite.x += _speed;
            }
        };

    _sprite.scale.setTo(0.5,0.5);

    return {
        update: update
    };
};

NAMESPACE.GameName.entities.Player.preload = function(game){
    'use strict';
    game.load.image('ship', 'assets/ship.png');
};
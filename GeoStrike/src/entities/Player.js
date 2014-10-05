
NAMESPACE.GameName.entities.Player = function(game){
    'use strict';
    var _sprite = game.add.sprite(game.width /2, game.height - 150, 'ship'),
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

    // create debugging object for player entity
    if(NAMESPACE.GameName.debug){
        NAMESPACE.GameName.debug.Player = {
            speed : function(newSpeed){
                if(newSpeed){
                    _speed = newSpeed;
                }
                return _speed;
            },
            scale: function(newScale){
                if(newScale){
                    _sprite.scale.setTo(newScale,newScale);
                }
                return _sprite.scale;
            }
        };
    }

    return {
        update: update
    };
};

NAMESPACE.GameName.entities.Player.preload = function(game){
    'use strict';
    game.load.image('ship', 'assets/ship.png');
};
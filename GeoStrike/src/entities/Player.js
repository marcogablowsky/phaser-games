MAG.GeoStrike.entities.Player = function (game) {
    'use strict';
    var _sprite = game.add.sprite(game.width / 2, game.height - 150, 'ship'),
        _speed = 7,
        _cursors = game.input.keyboard.createCursorKeys(),
        _fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
        _fireDelay = 300,
        _beamTimer = game.time.now,
        _beams,
        _gameConf = MAG.GeoStrike.gameConfig,

        _initBeams = function () {
            _beams = game.add.group();
            _beams.enableBody = true;
            _beams.physicsBodyType = _gameConf.physics.constant;
            _beams.createMultiple('12', 'beam');
            _beams.setAll('anchor.x', 0.5);
            _beams.setAll('anchor.y', 1);
            _beams.setAll('outOfBoundsKill', true);
            _beams.setAll('checkWorldBounds', true);
        },

        _fire = function () {
            if (game.time.now > _beamTimer) {
                var bullet = _beams.getFirstExists(false);
                if (bullet) {
                    bullet.reset(_sprite.x , _sprite.y - _sprite.height /2);
                    bullet.body.velocity.y = -400;
                    _beamTimer = game.time.now + _fireDelay;
                }
            }
        },

        _configurePhysicsBody = function(){
            game.physics.enable(_sprite, _gameConf.physics.constant);
            _sprite.body.collideWorldBounds = true;
            _sprite.body.height = _sprite.height /2;
            _sprite.body.width = _sprite.width /2;
        },

        update = function () {
            if (_cursors.up.isDown) {
                _sprite.y -= _speed;
            }
            else if (_cursors.down.isDown) {
                _sprite.y += _speed;
            }

            if (_cursors.left.isDown) {
                _sprite.x -= _speed;
            }
            else if (_cursors.right.isDown) {
                _sprite.x += _speed;
            }

            if (_fireButton.isDown) {
                _fire();
            }
        },

        render = function (){
            game.debug.body(_sprite);
            _beams.forEachAlive(function(elem){
                game.debug.body(elem);
            });
        };

    _configurePhysicsBody();
    _sprite.anchor.setTo(0.5);

    _initBeams();


    // create debugging object for player entity
    if (MAG.GeoStrike.debug) {
        MAG.GeoStrike.debug.Player = {
            speed: function (newSpeed) {
                if (newSpeed) {
                    _speed = newSpeed;
                }
                return _speed;
            },
            scale: function (newScale) {
                if (newScale) {
                    _sprite.scale.setTo(newScale, newScale);
                }
                return _sprite.scale;
            },
            fireDelay: function (newDelay) {
                if (newDelay) {
                    _fireDelay = newDelay;
                }
                return _fireDelay;
            },

            sprite: function(){
                return _sprite;
            }
        };
    }

    return {
        update: update,
        render: render
    };
};

MAG.GeoStrike.entities.Player.preload = function (game) {
    'use strict';
    game.load.image('ship', 'assets/ship.png');
    game.load.image('beam', 'assets/beam.png');
};
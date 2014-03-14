'use strict';

// create the player entity
MagGame.Game.entityFactory.player = function(game, spriteRef){

    var p = game.add.sprite(16, 32, spriteRef);

    p.body.bounce.y = 0.2;
    p.body.linearDamping = 1;
    p.body.collideWorldBounds = true;

    game.camera.follow(p);

    return p;

}

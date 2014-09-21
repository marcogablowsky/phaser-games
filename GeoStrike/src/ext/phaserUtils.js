NAMESPACE.phaser.utils = {};

NAMESPACE.phaser.utils.preload = function(game, entityContainer){
    'use strict';
    var loopCount = 0,
        entities = Object.getOwnPropertyNames(entityContainer);

    for(loopCount ; loopCount < entities.length; loopCount++){
        if(entityContainer[entities[loopCount]].preload){
            entityContainer[entities[loopCount]].preload(game);
        }
    }
};

NAMESPACE.phaser.EntityManager = function(game, entityContainer){
    'use strict';
    var entities = {},
        index = [],

    createEntity = function(name, Entity){
        if(typeof Entity === 'function'){
            entities[name] = new Entity(game);
            index.push(name);
        }
    },

    initializeEntities = function(){
        var loopCount = 0,
            entityCandidates = Object.getOwnPropertyNames(entityContainer);

        for(loopCount; loopCount < entityCandidates.length; loopCount++){
            createEntity(entityCandidates[loopCount],entityContainer[entityCandidates[loopCount]]);
        }
    },

    update = function(){
        var loopCount = 0;

        for(loopCount; loopCount < index.length; loopCount++){
            if(entities[index[loopCount]].update){
                entities[index[loopCount]].update();
            }
        }
    };

    initializeEntities();

    return {
        update: update
    };
};

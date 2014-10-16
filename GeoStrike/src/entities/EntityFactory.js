MAG.phaser.EntityFactory = function(game, entityPackage){
    'use strict';
    this.game = game;
    this.entityPackage = entityPackage;
};

MAG.phaser.EntityFactory.prototype = {

    create: function(entityName){
        'use strict';
        var isValidEntity = function(entityName){
            return this.entityPackage[entityName] && typeof this.entityPackage[entityName] === 'function';
        };

        if(isValidEntity(entityName)){
            return new this.entityPackage[entityName](this.game);
        }
    }
};

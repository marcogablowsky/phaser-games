MAG.phaser.EntityFactory = function(game, entityPackage){
    this.game = game;
    this.entityPackage = entityPackage;
};

MAG.phaser.EntityFactory.prototype = {

    /**
     * Creates a new entity for the given entityName.
     * @param entityName the name (equals the constructor function of the entity class) of the entity to create
     * @param config optional configuration object required to initialize the entity
     */
    create: function (entityName, config) {
        'use strict';
        var isValidEntity = this.entityPackage[entityName] && typeof this.entityPackage[entityName] === 'function';
        if (isValidEntity) {
            return new this.entityPackage[entityName](this.game, config);
        }
    }
};

MAG.phaser.EntityManager = function (entityFactory, doRender) {
    'use strict';
    this.entityFactory = entityFactory;
    this.doRender = doRender || false;
    this.creationCount = 0;

    this.entities = MAG.phaser.EntityManager.createEntityStorage();
};

MAG.phaser.EntityManager.createEntityStorage = function(){
    var storage = {
        index: {}
    };
    storage[MAG.phaser.entityTypes.statics] = {};
    storage[MAG.phaser.entityTypes.player] = {};
    storage[MAG.phaser.entityTypes.enemy] = {};
    storage.index[MAG.phaser.entityTypes.statics] = [];
    storage.index[MAG.phaser.entityTypes.player] = [];
    storage.index[MAG.phaser.entityTypes.enemy] = [];

    return storage;
};

MAG.phaser.EntityManager.prototype = {

    callEach: function (indexArray, container, funcName) {
        'use strict';
        var loopCount = 0;
        for (loopCount; loopCount < indexArray.length; loopCount++) {
            if (container[indexArray[loopCount]][funcName]) {
                container[indexArray[loopCount]][funcName]();
            }
        }
    },

    createEntity: function (name, config) {
        'use strict';
        var entity = this.entityFactory.create(name, config);
        var entityId;
        if (!entity.entityType) {
            throw 'Invalid entity: No entityType attribute on ' + name;
        }
        entityId = name + '_' + this.creationCount++;
        this.entities[entity.entityType][entityId] = entity;
        this.entities.index[entity.entityType].push(entityId);
    },

    update: function () {
        'use strict';
        var funcName = 'update';
        this.callEach(this.entities.index[MAG.phaser.entityTypes.statics], this.entities[MAG.phaser.entityTypes.statics], funcName);
        this.callEach(this.entities.index[MAG.phaser.entityTypes.player], this.entities[MAG.phaser.entityTypes.player], funcName);
        this.callEach(this.entities.index[MAG.phaser.entityTypes.enemy], this.entities[MAG.phaser.entityTypes.enemy], funcName);
    },

    render: function () {
        'use strict';
        if (this.doRender) {
            var funcName = 'render';
            this.callEach(this.entities.index[MAG.phaser.entityTypes.statics], this.entities[MAG.phaser.entityTypes.statics], funcName);
            this.callEach(this.entities.index[MAG.phaser.entityTypes.player], this.entities[MAG.phaser.entityTypes.player], funcName);
            this.callEach(this.entities.index[MAG.phaser.entityTypes.enemy], this.entities[MAG.phaser.entityTypes.enemy], funcName);
        }
    }
};

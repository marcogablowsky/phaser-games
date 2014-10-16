MAG.phaser.EntityManager = function (entityFactory, doRender) {
    'use strict';
    this.entityFactory = entityFactory;
    this.doRender = doRender;
    this.creationCount = 0;

    this.entities = {
        statics: {},
        player: {},
        enemy: {},
        index: {
            statics: [],
            player: [],
            enemy: []
        }
    };
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
        this.creationCount++;
        entityId = name + '_' + this.creationCount;
        this.entities[entity.entityType][entityId] = entity;
        this.entities.index[entity.entityType].push(entityId);
    },

    update: function () {
        'use strict';
        var funcName = 'update';
        this.callEach(this.entities.index.statics, this.entities.statics, funcName);
        this.callEach(this.entities.index.player, this.entities.player, funcName);
        this.callEach(this.entities.index.enemy, this.entities.enemy, funcName);
    },

    render: function () {
        'use strict';
        if (this.doRender) {
            var funcName = 'render';
            this.callEach(this.entities.index.statics, this.entities.statics, funcName);
            this.callEach(this.entities.index.player, this.entities.player, funcName);
            this.callEach(this.entities.index.enemy, this.entities.enemy, funcName);
        }
    }

};

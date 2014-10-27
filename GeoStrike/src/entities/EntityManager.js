MAG.phaser.EntityManager = function (game, entityFactory, doRender) {
    this.game = game;
    this.entityFactory = entityFactory;
    this.doRender = doRender || false;
    this.creationCount = 0;

    this.entities = MAG.phaser.EntityManager.createEntityStorage();
};

MAG.phaser.EntityManager.createEntityStorage = function () {
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
        var loopCount = 0;
        for (loopCount; loopCount < indexArray.length; loopCount++) {
            if (container[indexArray[loopCount]][funcName]) {
                container[indexArray[loopCount]][funcName]();
            }
        }
    },

    createEntity: function (name, config) {
        var entity = this.entityFactory.create(name, config);
        var entityId;
        if (!entity.entityType) {
            throw 'Invalid entity: No entityType attribute on ' + name;
        }
        entityId = name + '_' + this.creationCount++;
        this.entities[entity.entityType][entityId] = entity;
        this.entities.index[entity.entityType].push(entityId);
        return entity;
    },

    createBeam: function () {
        this.beams = this.entityFactory.create('Beam');
        return this.beams;
    },

    update: function () {
        var funcName = 'update';
        this.callEach(this.entities.index[MAG.phaser.entityTypes.statics], this.entities[MAG.phaser.entityTypes.statics], funcName);
        this.callEach(this.entities.index[MAG.phaser.entityTypes.player], this.entities[MAG.phaser.entityTypes.player], funcName);
        this.callEach(this.entities.index[MAG.phaser.entityTypes.enemy], this.entities[MAG.phaser.entityTypes.enemy], funcName);

        for (var i = 0; i < this.entities.index[MAG.phaser.entityTypes.enemy].length; i++) {
            var enemy = this.entities[MAG.phaser.entityTypes.enemy][this.entities.index[MAG.phaser.entityTypes.enemy][i]];
            this.game.physics.arcade.overlap(this.beams.collidable(), enemy.collidable(), this.beamCollidesWithEnemy, null, this);
        }

    },

    render: function () {
        if (this.doRender) {
            var funcName = 'render';
            this.callEach(this.entities.index[MAG.phaser.entityTypes.statics], this.entities[MAG.phaser.entityTypes.statics], funcName);
            this.callEach(this.entities.index[MAG.phaser.entityTypes.player], this.entities[MAG.phaser.entityTypes.player], funcName);
            this.callEach(this.entities.index[MAG.phaser.entityTypes.enemy], this.entities[MAG.phaser.entityTypes.enemy], funcName);
        }
    },

    beamCollidesWithEnemy: function (beam, enemy) {
        beam.kill();
        enemy.kill();
    }
};

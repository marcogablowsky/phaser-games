MAG.GeoStrike.Wave = function (waveDef, entityManager) {

    this.entityManager = entityManager;
    this.entityType = waveDef.type;
    this.entities = [];
    this.amount = waveDef.amount;
    this.spawnDelay = waveDef.spawnDelay;
    this.intervalStart = Date.now();

};

MAG.GeoStrike.Wave.prototype = {

    update: function () {
        if (this.entities.length < this.amount) {
            if (Date.now() - this.intervalStart > this.spawnDelay) {
                var entity = this.entityManager.createEntity(this.entityType);
                this.entities.push(entity);
                this.intervalStart = Date.now();
            }
        }
    }
};
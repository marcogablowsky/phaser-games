MAG.GeoStrike.Stage = function (entityManager, stageDef) {
    this.entityManager = entityManager;
    this.pendingWaves = stageDef.waves.reverse();
    this.maxWaves = stageDef.maxActiveWaves;
    this.waveDelay = stageDef.waveDelay;
    this.waveTimer = Date.now() - this.waveDelay; // instant spawn of first wave

    this.activeWaves = [];

    MAG.GeoStrike.Stage.initialize(entityManager, stageDef);
};

MAG.GeoStrike.Stage.initialize = function (entityManager, stageDef) {
    entityManager.createEntity(stageDef.backgroundType);
};


MAG.GeoStrike.Stage.prototype = {

    isFinished: function () {
        return this.pendingWaves.length === 0 && this.activeWaves.length === 0;
    },

    update: function () {
        var loopCount = 0;
        for (loopCount; loopCount < this.activeWaves.length; loopCount++) {
            this.activeWaves[loopCount].update();
        }

        if (this.activeWaves.length < this.maxWaves) {
            if (Date.now() - this.waveTimer > this.waveDelay) {
                var nextWave = this.pendingWaves.pop();
                if (nextWave) {
                    this.activeWaves.push(new MAG.GeoStrike.Wave(nextWave, this.entityManager));
                }
                this.waveTimer = Date.now();
            }
        }
    }
};
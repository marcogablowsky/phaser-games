MAG.GeoStrike.Preloader = function () {
    this.background = null;
    this.preloadBar = null;
    this.ready = false;
};

MAG.GeoStrike.Preloader.prototype = {

    preload: function () {
        var loopCount = 0,
            entityContainer = MAG.GeoStrike.entities,
            entities = Object.getOwnPropertyNames(entityContainer);

        for (loopCount; loopCount < entities.length; loopCount++) {
            if (entityContainer[entities[loopCount]].preload) {
                entityContainer[entities[loopCount]].preload(this.game);
            }
        }
    },

    update: function () {
        this.state.start('MainMenu');
    }
};
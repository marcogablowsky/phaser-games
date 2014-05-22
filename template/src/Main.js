var NAMESPACE = NAMESPACE || {};

NAMESPACE.GameName = {
    /* Your game can check GameName.orientated in internal loops to know if it should pause or not */
    orientated: false,

    /* define global engine settings */
    gameConfig: {
        physics: Phaser.Physics.ARCADE,

        device: {
            desktop: {
                minWidth: 480,
                minHeight: 272,
                maxWidth: 1920,
                maxHeight: 1080,
                scaleMode: Phaser.ScaleManager.SHOW_ALL
            },
            other: {
                minWidth: 480,
                minHeight: 272,
                maxWidth: 1920,
                maxHeight: 1080,
                scaleMode: Phaser.ScaleManager.SHOW_ALL
            }
        },

        debug: {

        }
    }
};

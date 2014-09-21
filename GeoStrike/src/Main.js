var NAMESPACE = NAMESPACE || {};

NAMESPACE.GameName = {

    /* configure the Phaser.Game states on bootstrapping */
    onBoot: function(game) {
        game.state.add('Boot', NAMESPACE.GameName.Boot);
        game.state.add('Preloader', NAMESPACE.GameName.Preloader);
        game.state.add('MainMenu', NAMESPACE.GameName.MainMenu);
        game.state.add('Game', NAMESPACE.GameName.Game);
        game.state.start('Boot');
    },

    /* Your game can check GameName.orientated in internal loops to know if it should pause or not */
    orientated: false,

    /* define global engine settings */
    gameConfig: {
        /* configure the Phaser.Game objects init parameters */
        game: {
            width: 1024,
            height: 768,
            renderer: Phaser.AUTO
        },

        physics: {
            constant: Phaser.Physics.ARCADE,
            name: 'arcade'
        },

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

NAMESPACE.phaser = {};
NAMESPACE.GameName.entities = {};

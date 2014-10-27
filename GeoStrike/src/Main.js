var MAG = MAG || {}; // jshint ignore:line

MAG.GeoStrike = {

    /* configure the Phaser.Game states on bootstrapping */
    onBoot: function (game) {
        if (window.location.search.indexOf('debugConsole') > -1) {
            MAG.GeoStrike.debug = {};
        }
        game.state.add('Boot', MAG.GeoStrike.Boot);
        game.state.add('Preloader', MAG.GeoStrike.Preloader);
        game.state.add('MainMenu', MAG.GeoStrike.MainMenu);
        game.state.add('Game', MAG.GeoStrike.Game);
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
        }
    }
};

MAG.phaser = {};
MAG.GeoStrike.entities = {};
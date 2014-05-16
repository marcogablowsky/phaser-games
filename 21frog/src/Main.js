var MAG = MAG || {};

MAG.Frog21 = {

    /* Here we've just got some global level vars that persist regardless of State swaps */
    score: 0,

    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    music: null,

    /* Your game can check Frog21.orientated in internal loops to know if it should pause or not */
    orientated: false,

    /* define global engine settings */
    gameConfig: {
        physics: Phaser.Physics.ARCADE,

        device: {
            desktop: {
                minWidth: 480,
                minHeight: 260,
                maxWidth: 1024,
                maxHeight: 768,
                scaleMode: Phaser.ScaleManager.SHOW_ALL
            },
            other: {
                minWidth: 480,
                minHeight: 260,
                maxWidth: 1024,
                maxHeight: 768,
                scaleMode: Phaser.ScaleManager.SHOW_ALL
            }
        },

        debug: {

        }
    }
};

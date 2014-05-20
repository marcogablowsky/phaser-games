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
                minHeight: 272,
                maxWidth: 1920,
                maxHeight: 1080,
                scaleMode: Phaser.ScaleManager.SHOW_ALL
            },
            other: {
                minWidth: 480,
                minHeight: 272,
                maxWidth: 1280,
                maxHeight: 720,
                scaleMode: Phaser.ScaleManager.SHOW_ALL
            }
        },

        debug: {
            renderTouchAreas: false
        }
    }
};

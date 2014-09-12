var MAG = MAG;
MAG.Frog21.Boot = function () {
    'use strict';
    this.desktopDevice = MAG.Frog21.gameConfig.device.desktop;
    this.otherDevices = MAG.Frog21.gameConfig.device.other;
};

MAG.Frog21.Boot.prototype = {
    preload: function () {
        'use strict';
        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        // this.load.image('preloaderBackground', 'images/preloader_background.jpg');
        // this.load.image('preloaderBar', 'images/preloadr_bar.png');
    },

    setupDevice: function () {
        'use strict';
        if (this.game.device.desktop) {
            this.scale.scaleMode = this.desktopDevice.scaleMode;
            this.scale.setMinMax(this.desktopDevice.minWidth,this.desktopDevice.minHeight, this.desktopDevice.maxWidth,this.desktopDevice.maxHeight);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);
            this.scale.refresh();
        }
        else {
            this.scale.scaleMode = this.otherDevices.scaleMode;
            this.scale.setMinMax(this.otherDevices.minWidth,this.otherDevices.minHeight, this.otherDevices.maxWidth,this.otherDevices.maxHeight);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
            this.scale.setScreenSize(true);
            this.scale.refresh();
        }
    },

    create: function () {
        'use strict';
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.setupDevice();
        this.state.start('Preloader');
    },

    gameResized: function (width, height) {
        'use strict';
        //  This could be handy if you need to do any extra processing if the game resizes.
        //  A resize could happen if for example swapping orientation on a device.
    },

    enterIncorrectOrientation: function () {
        'use strict';
        MAG.Frog21.orientated = false;
        document.getElementById('orientation').style.display = 'block';
    },

    leaveIncorrectOrientation: function () {
        'use strict';
        MAG.Frog21.orientated = true;
        document.getElementById('orientation').style.display = 'none';
    }
};
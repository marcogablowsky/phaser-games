NAMESPACE.GameName.Boot = function (game) {
    this.desktopDevice = NAMESPACE.GameName.gameConfig.device.desktop;
    this.otherDevices = NAMESPACE.GameName.gameConfig.device.other;
};

NAMESPACE.GameName.Boot.prototype = {

    preload: function () {
        'use strict';
        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
       // this.load.image('preloaderBackground', 'images/preloader_background.jpg');
       // this.load.image('preloaderBar', 'images/preloadr_bar.png');
    },

    setupDevice: function () {
        'use strict';
        var configureCommons = function (obj, deviceSettings) {
            obj.scale.scaleMode = deviceSettings.scaleMode;
            obj.scale.setMinMax(deviceSettings.minWidth, deviceSettings.minHeight, deviceSettings.maxWidth, deviceSettings.maxHeight);
            obj.scale.pageAlignHorizontally = true;
            obj.scale.pageAlignVertically = true;
            obj.scale.setScreenSize(true);
        };

        if (this.game.device.desktop) {
            configureCommons(this,this.desktopDevice);
            this.scale.refresh();
        }
        else {
            configureCommons(this,this.otherDevices);
            this.scale.forceOrientation(true, false);
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
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
        NAMESPACE.GameName.orientated = false;
        document.getElementById('orientation').style.display = 'block';
    },

    leaveIncorrectOrientation: function () {
        'use strict';
        NAMESPACE.GameName.orientated = true;
        document.getElementById('orientation').style.display = 'none';
    }

};
var NAMESPACE = NAMESPACE;
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
    setMinMaxDimensions: function(source) {
        'use strict';
        this.scale.minWidth = source.minWidth;
        this.scale.minHeight = source.minHeight;
        this.scale.maxWidth = source.maxWidth;
        this.scale.maxHeight = source.maxHeight;
    },
    setupDevice: function () {
        'use strict';
        if (this.game.device.desktop) {
            this.scale.scaleMode = this.desktopDevice.scaleMode;
            this.setMinMaxDimensions(this.desktopDevice);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);
        }
        else {
            this.scale.scaleMode = this.otherDevices.scaleMode;
            this.setMinMaxDimensions(this.otherDevices);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
            this.scale.hasResized.add(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
            this.scale.setScreenSize(true);
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
MAG.GeoStrike.Boot = function () {
    'use strict';
    var _desktopDevice = MAG.GeoStrike.gameConfig.device.desktop,
        _otherDevices = MAG.GeoStrike.gameConfig.device.other,

        preload = function () {
            //  Here we load the assets required for our preloader (in this case a background and a loading bar)
            // this.load.image('preloaderBackground', 'images/preloader_background.jpg');
            // this.load.image('preloaderBar', 'images/preloadr_bar.png');
        },

        enterIncorrectOrientation = function () {
            MAG.GeoStrike.orientated = false;
            document.getElementById('orientation').style.display = 'block';
        },

        leaveIncorrectOrientation = function () {
            MAG.GeoStrike.orientated = true;
            document.getElementById('orientation').style.display = 'none';
        },

        setupDevice = function (state) {
            var configureCommons = function (obj, deviceSettings) {
                obj.scale.scaleMode = deviceSettings.scaleMode;
                obj.scale.setMinMax(deviceSettings.minWidth, deviceSettings.minHeight, deviceSettings.maxWidth, deviceSettings.maxHeight);
                obj.scale.pageAlignHorizontally = true;
                obj.scale.pageAlignVertically = true;
                obj.scale.setScreenSize(true);
            };

            if (state.game.device.desktop) {
                configureCommons(state, _desktopDevice);
                state.scale.refresh();
            }
            else {
                configureCommons(this, _otherDevices);
                state.scale.forceOrientation(true, false);
                // state.scale.setResizeCallback(gameResized, state);
                state.scale.enterIncorrectOrientation.add(enterIncorrectOrientation, state);
                state.scale.leaveIncorrectOrientation.add(leaveIncorrectOrientation, state);
                state.scale.refresh();
            }
        },

        create = function () {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            setupDevice(this);
            this.state.start('Preloader');
        };

    return {
        preload: preload,
        create: create
    };
};
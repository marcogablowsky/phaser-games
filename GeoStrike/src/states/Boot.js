MAG.GeoStrike.Boot = function () {
};
MAG.GeoStrike.Boot.prototype = {
    create: function () {
        var _desktopDevice = MAG.GeoStrike.gameConfig.device.desktop,
            _otherDevices = MAG.GeoStrike.gameConfig.device.other,

            configureCommons = function (obj, deviceSettings) {
                obj.scale.scaleMode = deviceSettings.scaleMode;
                obj.scale.setMinMax(deviceSettings.minWidth, deviceSettings.minHeight, deviceSettings.maxWidth, deviceSettings.maxHeight);
                obj.scale.pageAlignHorizontally = true;
                obj.scale.pageAlignVertically = true;
                obj.scale.setScreenSize(true);
            };

        if (this.game.device.desktop) {
            configureCommons(this, _desktopDevice);
            this.scale.refresh();
        }
        else {
            configureCommons(this, _otherDevices);
            this.scale.forceOrientation(true, false);
            // state.scale.setResizeCallback(gameResized, state);
            this.scale.enterIncorrectOrientation.add(function () {
                MAG.GeoStrike.orientated = false;
                document.getElementById('orientation').style.display = 'block';
            }, this);
            this.scale.leaveIncorrectOrientation.add(function () {
                MAG.GeoStrike.orientated = true;
                document.getElementById('orientation').style.display = 'none';
            }, this);
            this.scale.refresh();
        }
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.state.start('Preloader');
    }
};
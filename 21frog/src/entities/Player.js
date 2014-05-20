
MAG.Frog21.Player = function(game, x, y){
    this.game = game;
    this.cursors = null;
    this.sprite = this.game.add.sprite(x,y, 'frog');
    this.sprite.anchor.set(0.5);
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
};

MAG.Frog21.Player.preload = function(game){
    game.load.image('frog', 'assets/frog2.png');
};

MAG.Frog21.Player.prototype = {

    update: function(){

    }
};

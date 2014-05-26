var MAG = MAG;

MAG.Frog21.EntityManager = function(){
    'use strict';
    this.entities = {};
    this.index = [];
};

MAG.Frog21.EntityManager.prototype = {
    addEntity: function (name, entity){
        'use strict';
        this.index.push(name);
        this.entities[name] = entity;
    },

    findByName: function (name){
        'use strict';
        return this.entities[name];
    },

    update: function(){
        'use strict';
        for(var i=0; i < this.index.length; i++){
            this.entities[this.index[i]].update();
        }
    }
};

define(function (require) {

    const Game = require('./Game.js')
    const World = require('../world/World.js')
    const Storage = require('../core/Storage.js')

    /**
     * @class {PreviewGame}
     * @extends {Game}
     */
    class PreviewGame extends Game{

        /**
         * @type {PreviewGame}
         */
        static instance

        /**
         * @override
         */
        async init(){
            const world = World.get()
            await Storage.get().loadLocal(Storage.type.WORLD, world)
            await super.init()
        }

    }

    return PreviewGame

})
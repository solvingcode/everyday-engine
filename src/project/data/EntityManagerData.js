define(function(require){

    const Data = require('./Data.js')

    /**
     * @class {EntityManagerData}
     * @extends {Data}
     */
    class EntityManagerData extends Data{

        entities

    }

    return EntityManagerData

})
import Data from './Data.js'

/**
 * @class {EntityManagerData}
 * @extends {Data}
 */
class EntityManagerData extends Data {

    entities

    /**
     * @param {EntityData} entities
     */
    setEntities(entities) {
        this.entities = entities
    }

    /**
     * @return {EntityData[]}
     */
    getEntities() {
        return this.entities
    }


}

export default EntityManagerData
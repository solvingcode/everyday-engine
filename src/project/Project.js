define(function (require) {

    const EntityManager = require('../world/manager/EntityManager.js')
    const Storage = require('../core/Storage.js')

    class Project {

        /**
         * @type {Project}
         */
        static instance

        constructor() {
            this.storage = Storage.get()
        }

        save(){
            const data = _.cloneDeep(
                this.storage
                    .updateAndValidate(Storage.type.ENTITY, EntityManager.get().entities)
            )
            const dataExport = data.export(Storage.format.XML)
            console.log(dataExport)
        }

        /**
         * @param {Object} file
         */
        load(file){

        }

        static get() {
            if (!Project.instance) {
                Project.instance = new Project()
            }
            return Project.instance
        }

    }

    return Project

})
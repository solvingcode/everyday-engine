define(function (require) {

    const World = require('../world/World.js')
    const Storage = require('../core/Storage.js')
    const FileHelper = require('../utils/FileHelper.js')

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
                    .updateAndValidate(Storage.type.WORLD, World.get())
            )
            const dataExport = data.export(Storage.format.XML)
            FileHelper.save(dataExport, FileHelper.type.XML)
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
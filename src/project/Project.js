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
            this.fileType = FileHelper.type.XML
            this.dataFormat = Storage.format.XML
        }

        save(){
            const data = _.cloneDeep(
                this.storage
                    .updateAndValidate(Storage.type.WORLD, World.get())
            )
            const dataExport = data.export(this.dataFormat)
            FileHelper.save(dataExport, this.fileType)
        }

        /**
         * @param {Blob} file
         */
        async load(file){
            const data = await FileHelper.load(file, this.fileType)
            if(data){
                const dataImport = this.storage.import(data, this.dataFormat)
                dataImport && this.storage.load(Storage.type.WORLD, dataImport.project, World)
            }
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
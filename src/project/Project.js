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

        async save(){
            const data = _.cloneDeep(
                await this.storage
                    .updateAndValidate(Storage.type.WORLD, World.get())
            )
            const dataExport = data.export(Storage.type.WORLD, this.dataFormat)
            FileHelper.save(dataExport, this.fileType)
        }

        /**
         * @param {Blob} file
         */
        async load(file){
            const data = await FileHelper.load(file, this.fileType)
            if(data){
                const dataImport = this.storage.import(data, this.dataFormat)
                dataImport && await this.storage.load(Storage.type.WORLD, dataImport.project, World.get())
            }
        }

        async export(){

        }

        static get() {
            if (!this.instance) {
                this.instance = new this()
            }
            return this.instance
        }

    }

    return Project

})
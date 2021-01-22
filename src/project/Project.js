define(function (require) {

    const World = require('../world/World.js')
    const Storage = require('../core/Storage.js')
    const FileHelper = require('../utils/FileHelper.js')
    const ProjectExport = require('./export/ProjectExport.js')

    class Project {

        /**
         * @type {Project}
         */
        static instance

        constructor() {
            this.storage = Storage.get()
            this.saveFileType = FileHelper.type.XML
            this.saveFormat = Storage.format.XML
            this.exportFormat = Storage.format.BIN
        }

        async save(){
            const data = await this.storage
                .updateAndValidate(Storage.type.WORLD, World.get())
            const dataExport = data.export(Storage.type.WORLD, this.saveFormat)
            FileHelper.save(dataExport, this.saveFileType)
        }

        /**
         * @param {Blob} file
         */
        async load(file){
            const data = await FileHelper.load(file, this.saveFileType)
            if(data){
                const dataImport = this.storage.import(data, this.saveFormat)
                dataImport && await this.storage.load(Storage.type.WORLD, dataImport.project, World.get())
            }
        }

        async export(){
            const data = await this.storage
                .updateAndValidate(Storage.type.WORLD, World.get())
            const dataExport = data.export(Storage.type.WORLD, this.exportFormat)
            ProjectExport.save(dataExport, this.exportFormat)
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
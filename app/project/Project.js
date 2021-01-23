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
            this.saveFormat = Storage.format.XML
            this.saveFileType = FileHelper.type.XML
            this.exportFormat = Storage.format.WEB
            this.exportFileType = FileHelper.type.JS
        }

        async save(){
            await this.storage.save(Storage.type.WORLD, World.get())
            const dataExport = this.storage.export(Storage.type.WORLD, this.saveFormat)
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
            await this.storage.save(Storage.type.WORLD, World.get())
            const dataExport = this.storage.export(Storage.type.WORLD, this.exportFormat)
            FileHelper.save(dataExport, this.exportFileType)
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
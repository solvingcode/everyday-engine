import World from '../world/World.js'
import Storage from '../core/Storage.js'
import FileHelper from '../utils/FileHelper.js'
import JsProjectExporter from './exporter/JsProjectExporter.js'
import ClientError from '../exception/type/ClientError.js'

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
    }

    async save() {
        await this.storage.save(Storage.type.WORLD, World.get())
        const dataExport = this.storage.export(Storage.type.WORLD, this.saveFormat)
        FileHelper.save(dataExport, this.saveFileType)
    }

    /**
     * @param {Blob} file
     */
    async load(file) {
        const data = await FileHelper.load(file, this.saveFileType)
        if (data) {
            const dataImport = this.storage.import(data, this.saveFormat)
            dataImport && await this.storage.load(Storage.type.WORLD, dataImport.project, World.get())
        }
    }

    async export() {
        await this.storage.saveForGame(Storage.type.WORLD, World.get())
        const dataExport = this.storage.export(Storage.type.WORLD, this.exportFormat)
        await this.getProjectExporter(this.exportFormat).export(dataExport)
    }

    /**
     * @param {string} type
     * @return {ProjectExporter}
     */
    getProjectExporter(type) {
        switch (type) {
            case Storage.format.WEB:
                return new JsProjectExporter()
            default:
                throw new ClientError(`${type} not recognized as export type!`)
        }
    }

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}

export default Project
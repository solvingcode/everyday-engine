import World from '../world/World.js'
import Storage from '../core/Storage.js'
import FileHelper from '../utils/FileHelper.js'
import JsProjectExporter from './exporter/JsProjectExporter.js'
import ClientError from '../exception/type/ClientError.js'
import ClipboardManager from '../manager/ClipboardManager.js'
import DataGenerator from '../generator/data/DataGenerator.js'

class Project {

    /**
     * @type {Project}
     */
    static instance

    /**
     * @type {FileSystemFileHandle}
     */
    handle

    constructor() {
        this.storage = Storage.get()
        this.saveFormat = Storage.format.XML
        this.saveFileType = FileHelper.type.XML
        this.exportFormat = Storage.format.WEB
    }

    /**
     * @return {FileSystemFileHandle}
     */
    getHandle(){
        return this.handle
    }

    /**
     * @param {FileSystemFileHandle} handle
     */
    setHandle(handle){
        this.handle = handle
    }

    /**
     * @param {FileSystemFileHandle} handle
     * @return {Promise<void>}
     */
    async save(handle) {
        await this.storage.save(Storage.type.WORLD, World.get())
        const dataExport = this.storage.export(Storage.type.WORLD, this.saveFormat)
        FileHelper.save(dataExport, this.saveFileType, '', handle)
    }

    /**
     * @param {string} type
     * @param {*} data
     */
    async saveClipboard(type, data){
        ClipboardManager.get().setContent(await this.storage.serialize(type, data, this.saveFormat))
    }

    /**
     * @param {string} type
     */
    async loadClipboard(type){
        const clipboard = ClipboardManager.get().getContent()
        const dataImport = this.storage.import(type, clipboard, this.saveFormat)
        dataImport && await this.storage.load(type, dataImport[type], DataGenerator)
    }

    /**
     * @param {Blob} file
     */
    async load(file) {
        const data = await FileHelper.load(file, this.saveFileType)
        if (data) {
            const dataImport = this.storage.import(Storage.type.WORLD, data, this.saveFormat)
            dataImport && await this.storage.load(Storage.type.WORLD, dataImport[Storage.type.WORLD], World.get())
        }
    }

    /**
     * @param {FileSystemFileHandle} handle
     * @return {Promise<void>}
     */
    async export(handle) {
        await this.storage.saveForGame(Storage.type.WORLD, World.get())
        const dataExport = this.storage.export(Storage.type.WORLD, this.exportFormat)
        await this.getProjectExporter(this.exportFormat).export(dataExport, handle)
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
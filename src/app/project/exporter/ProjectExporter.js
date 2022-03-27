/**
 * @abstract
 * @class {ProjectExporter}
 */
class ProjectExporter {

    /**
     * @abstract
     * @param {World} world
     * @param {string} data
     * @param {FileSystemFileHandle} handle
     */
    async export(world, data, handle) {
        throw new TypeError('ProjectExport.export must be implemented!')
    }

}

export default ProjectExporter
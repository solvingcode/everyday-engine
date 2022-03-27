import ProjectExporter from './ProjectExporter.js'
import ZipHelper from '../../utils/ZipHelper.js'

/**
 * @class {JsProjectExporter}
 * @extends {ProjectExporter}
 */
export default class JsProjectExporter extends ProjectExporter {

    /**
     * @override
     */
    async export(world, data, handle) {
        const libs = await this.getLibs()
        const scripts = this.getScripts(world)
        const entryPoint = this.getEntryPoint()
        const worldData = {name: 'world.js', data}
        const files = entryPoint.concat(libs, worldData, scripts)
        ZipHelper.save(files, handle, 'game')
    }

    /**
     * @param {World} world
     * @return {{name: string, data: string}[]}
     */
    getScripts(world) {
        let scripts = []
        world.getCompiledClassRegistry().getInstances().forEach(instance => {
            scripts.push(`EEClass["${instance.getName()}"] = ${instance.getCode()}; var ${instance.getName()}=EEClass["${instance.getName()}"];
            `)
        })
        return [{
            name: 'script.js',
            data: `(function(){${scripts.join('')}})()`
        }]
    }

    /**
     * @return {{name: string, data: string}[]}
     */
    async getLibs() {
        const fileNames = ['bundle.js', 'data.js', 'style.css']
        const files = []
        const headers = new Headers()
        headers.append('pragma', 'no-cache')
        headers.append('cache-control', 'no-cache')
        for (const iFile in fileNames) {
            if (fileNames.hasOwnProperty(iFile)) {
                const file = fileNames[iFile]
                const fileData = await fetch(`/run/${file}`, {method: 'GET', headers})
                files.push({name: file, data: await fileData.blob()})
            }
        }
        return files
    }

    /**
     * Get the entry point for the exported files
     * @return {{name: string, data: string}[]}
     */
    getEntryPoint() {
        const data = `
            <!DOCTYPE>
            <html lang="en">
                <head>
                    <title>Game</title>
                    <link rel="stylesheet" href="./style.css" />
                </head>
                <body>
                    <canvas id="object"></canvas>
                    <script src="./data.js"></script>
                    <script src="./world.js"></script>
                    <script src="./bundle.js"></script>
                    <script src="./script.js"></script>
                </body>
            </html>
        `
        return [{name: 'index.html', data}]
    }

}
const fs = require('fs')
const path = require('path')
global._ = require('lodash')
import World from '../src/app/world/World.js'
import AEvent from '../src/app/flow/event/AEvent.js'

import StringHelper from '../src/app/utils/StringHelper.js'

const world = World.get()
const functionRegistry = world.getFunctionRegistry()

functionRegistry.init()
const implPath = 'build/impl/'

const files = fs.readdirSync(implPath)
for (const file of files) {
    fs.unlinkSync(path.join(implPath, file))
}
const scripts = []

functionRegistry.getInstances().forEach(instance => {
    if (!(instance instanceof AEvent)) {
        const functionName = StringHelper.normalize(instance.getName())
        const scriptName = `${implPath}__${functionName}.js`
        console.log(functionName)
        const params = instance.getInputs().map(input => input.getAttrName())
        let genFunctionCode = `export default function(${params.join(',')}){`
        if (typeof instance['execute'] === 'function') {
            scripts.push(functionName)
            let functionCode = instance['execute'].toString()
            functionCode = functionCode.replaceAll(/this.getInputValue\('([a-zA-Z0-9]+)'\)/g, '$1')
            functionCode = functionCode.replace(/this.setOutputValue\((.*)\)/, 'return $1')
            const funcMatch = functionCode.match(/execute\([^)]*\)[\s]*{(.*)}/s)
            if (!funcMatch) {
                throw new Error(`${scriptName}: Cannot parse ${functionCode}`)
            }
            fs.writeFileSync(scriptName, `${genFunctionCode}${funcMatch[1]}}`)
        }
    }
})

fs.writeFileSync(`${implPath}__.js`, '')
scripts.forEach(script => {
    fs.appendFileSync(`${implPath}__.js`, `export {default as ${script}} from '../flow/function/impl/__${script}.js'
    `)
})
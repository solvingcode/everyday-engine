import UnitActor from './UnitActor.js'
import ClientError from '../exception/type/ClientError.js'
import SystemError from '../exception/type/SystemError.js'
import {EEClass} from './EEClass.js'

export default class JsCompiler {

    /**
     * @param {string} code
     * @return {UnitActor}
     */
    static compile(code) {
        const actor = new UnitActor()
        const classRegex = new RegExp('^class[\\s]+extends[\\s]+([^{]+)[\\s]*\{(.*)\}$', 's')
        const attrRegex = new RegExp('^[a-zA-Z0-9_]+$')
        const functionRegex = new RegExp('^([a-zA-Z0-9]+)\\(([a-zA-Z0-9,]*)\\)[\\s]*\{$')
        const classMatch = code.match(classRegex)
        const parentClass = classMatch[1]
        const classContent = classMatch[2]
        const parentClazz = parentClass === 'UnitActor' ? UnitActor : EEClass[parentClass]
        if (!parentClazz) {
            throw new ClientError(`Class "${parentClass}" not compiled!`)
        }
        const clazz = class extends parentClazz {
        }
        let openBracketCount = 0
        let currentFunctionName
        let functionParams = []
        let functionCodeLines = []
        const instructions = classContent.split(/[;\n]/).filter(line => line)
        instructions.forEach(instruction => {
            if (instruction.match(attrRegex)) {
                this.createAttribute(clazz, instruction)
            } else {
                const functionMatch = instruction.match(functionRegex)
                if (functionMatch) {
                    if (openBracketCount) {
                        throw new SystemError(`Brackets not closed on function "${currentFunctionName}"\n${functionCodeLines.join('\n')}`)
                    }
                    currentFunctionName = functionMatch[1]
                    functionParams = functionMatch[2].split(',')
                    functionCodeLines = []
                    openBracketCount++
                } else {
                    if (instruction.match('{')) {
                        openBracketCount++
                    } else if (instruction.match('}')) {
                        openBracketCount--
                    }
                    if (openBracketCount === 0 && currentFunctionName) {
                        this.createFunction(clazz, actor, currentFunctionName, functionParams, functionCodeLines)
                    } else {
                        functionCodeLines.push(instruction)
                    }
                }
            }
        })
        if (openBracketCount) {
            throw new SystemError(`Brackets not closed on function "${currentFunctionName}"\n${functionCodeLines.join('\n')}\n\n${code}`)
        }
        return clazz
    }

    /**
     * @param {Function} clazz
     * @param {string} instruction
     */
    static createAttribute(clazz, instruction) {
        clazz.prototype[instruction] = null
    }

    /**
     * @param {Function} clazz
     * @param {UnitActor} actor
     * @param {string} functionName
     * @param {string[]} params
     * @param {string[]} codeLines
     */
    static createFunction(clazz, actor, functionName, params, codeLines) {
        if (functionName.match(/^On.*/i) && typeof actor[functionName] !== 'function') {
            throw new ClientError(`Event ${functionName} not supported by UnitActor`)
        }
        const code = codeLines.join('\n')
        try {
            clazz.prototype[functionName] = new Function(...params, code)
        } catch (e) {
            throw new ClientError(`${e.message}\n${code}`)
        }
    }
}
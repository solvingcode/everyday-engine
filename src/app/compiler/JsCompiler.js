import UnitActor from './UnitActor.js'
import ClientError from '../exception/type/ClientError.js'
import SystemError from '../exception/type/SystemError.js'

export default class JsCompiler {

    /**
     * @param {string} code
     * @return {UnitActor}
     */
    static compile(code) {
        const actor = new UnitActor()
        const classRegex = new RegExp('^class[\\s]+([a-zA-Z0-9]+)[\\s]*\{(.*)\}$', 's')
        const attrRegex = new RegExp('^[a-zA-Z0-9_]+$')
        const functionRegex = new RegExp('^([a-zA-Z]+)\\(\\)[\\s]*\{$')
        const classMatch = code.match(classRegex)
        const classContent = classMatch[2]
        let openBracketCount = 0
        let currentFunctionName
        let functionCodeLines = []
        const instructions = classContent.split(/[;\n]/).filter(line => line)
        instructions.forEach(instruction => {
            if (instruction.match(attrRegex)) {
                this.createAttribute(actor, instruction)
            } else {
                const functionMatch = instruction.match(functionRegex)
                if (functionMatch) {
                    if (openBracketCount) {
                        throw new SystemError(`Brackets not closed on function "${currentFunctionName}"\n${functionCodeLines.join('\n')}`)
                    }
                    currentFunctionName = functionMatch[1]
                    functionCodeLines = []
                    openBracketCount++
                } else {
                    if (instruction.match('{')) {
                        openBracketCount++
                    } else if (instruction.match('}')) {
                        openBracketCount--
                    }
                    if (openBracketCount === 0 && currentFunctionName) {
                        this.createFunction(actor, currentFunctionName, functionCodeLines)
                    } else {
                        functionCodeLines.push(instruction)
                    }
                }
            }
        })
        if (openBracketCount) {
            throw new SystemError(`Brackets not closed on function "${currentFunctionName}"\n${functionCodeLines.join('\n')}\n\n${code}`)
        }
        return actor
    }

    /**
     * @param {UnitActor} actor
     * @param {string} instruction
     */
    static createAttribute(actor, instruction) {
        actor[instruction] = null
    }

    /**
     * @param {UnitActor} actor
     * @param {string} functionName
     * @param {string[]} codeLines
     */
    static createFunction(actor, functionName, codeLines) {
        if (typeof actor[functionName] !== 'function') {
            throw new ClientError(`${functionName} not supported by UnitActor`)
        }
        const code = codeLines.join('\n')
        try {
            actor[functionName] = new Function(code)
        } catch (e) {
            throw new ClientError(`${e.message}\n${code}`)
        }
    }
}
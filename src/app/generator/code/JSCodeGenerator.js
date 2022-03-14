import CodeGenerator from './CodeGenerator.js'
import {OPERATIONS} from '../../operation/StackOperation.js'
import StackRegistryHelper from '../../utils/StackRegistryHelper.js'
import StringHelper from '../../utils/StringHelper.js'
import ScriptHelper from '../../utils/ScriptHelper.js'
import {TYPES} from '../../pobject/AttributeType.js'
import {CONSTANTS} from '../../operation/StackRegister.js'

export default class JSCodeGenerator extends CodeGenerator {

    generate(scriptFunction, world) {
        const functionRegistry = world.getFunctionRegistry()
        const instructions = []
        const registry = {base: {}}
        scriptFunction.getStack().forEach(stackOperation => {
            const operation = stackOperation.getOperation()
            const args = stackOperation.getArgs()
            if (operation === OPERATIONS.JUMP_TO) {
                if (_.isEqual(args, ['start_loop'])) {
                    instructions.push('do {')
                } else {
                    //instructions.push(`//${args.join('')}`)
                }
            } else if (operation === OPERATIONS.PUSH) {
                const variable = this.getVarName(args[0])
                const value = StackRegistryHelper.getVarName(`${args[1]}`)
                if (StackRegistryHelper.isResult(args[0]) || StackRegistryHelper.isMemory(args[0])) {
                    registry.base[args[0]] = {value: args[1]}
                } else {
                    const registryInfo = ScriptHelper.extractInfoFromRegistryName(args[0])
                    if (!registry[registryInfo.scope]) {
                        registry[registryInfo.scope] = {}
                    }
                    registry[registryInfo.scope][registryInfo.attributeName] = {value}
                }
                if (StackRegistryHelper.isMemory(args[0]) || StackRegistryHelper.isResult(args[0])) {
                    instructions.push(`${variable} = ${value};`)
                }
            } else if (operation === OPERATIONS.CALL) {
                const functionName = args[0]
                const registryScope = registry[args[1]]
                const params = []
                const func = functionRegistry.getInstance(functionName)
                let resultReturn = ''
                func.getInputs().forEach(input => {
                    const value = registryScope[input.getAttrName()].value
                    let paramValue = value
                    if (StackRegistryHelper.isResult(value)) {
                        if (StackRegistryHelper.isCustomResult(value)) {
                            const customResult = StackRegistryHelper.getCustomResult(value)
                            paramValue = `${CONSTANTS.RESULT}.${customResult}`
                        }
                    } else {
                        if (input.getAttrType() === TYPES.STRING) {
                            paramValue = `"${value}"`
                        }
                    }
                    params.push(paramValue)
                })
                if (func.getOutputs().length > 0 || func.getOutput()) {
                    resultReturn = `${CONSTANTS.RESULT} = `
                }
                instructions.push(`${resultReturn}__${functionName}(${params.join(',')});`)
            } else if (operation === OPERATIONS.JUMP) {
                let jumpCondition = args[0]
                if (StackRegistryHelper.isResult(args[0])) {
                    if (StackRegistryHelper.isCustomResult(args[0])) {
                        const customResult = StackRegistryHelper.getCustomResult(args[0])
                        jumpCondition = `${CONSTANTS.RESULT}.${customResult}`
                    }
                }
                instructions.push(`}while(${jumpCondition});`)
            } else if (operation === OPERATIONS.EXIT) {
                let exitCondition = args[0]
                if (StackRegistryHelper.isResult(args[0])) {
                    if (StackRegistryHelper.isCustomResult(args[0])) {
                        const customResult = StackRegistryHelper.getCustomResult(args[0])
                        exitCondition = `${CONSTANTS.RESULT}.${customResult}`
                    }
                }
                instructions.push(`if(!${exitCondition}) return;`)
            }
        })
        return instructions.join('\n')
    }

    /**
     * @param {string} variable
     * @return {string}
     */
    getVarName(variable) {
        const arrVar = StackRegistryHelper.getVarName(variable).split('.')
        return StringHelper.lowFirstLetter(arrVar.map(part => _.capitalize(part)).join(''))
    }

}
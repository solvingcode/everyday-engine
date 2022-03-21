import CodeGenerator from './CodeGenerator.js'
import {OPERATIONS} from '../../operation/StackOperation.js'
import StackRegistryHelper from '../../utils/StackRegistryHelper.js'
import StringHelper from '../../utils/StringHelper.js'
import ScriptHelper from '../../utils/ScriptHelper.js'
import {TYPES} from '../../pobject/AttributeType.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import CompiledClass from '../../flow/compiler/compiled/CompiledClass.js'
import CompiledFunction from '../../flow/compiler/compiled/CompiledFunction.js'
import CompiledAttribute from '../../flow/compiler/compiled/CompiledAttribute.js'

export default class JSCodeGenerator extends CodeGenerator {

    generate(script, world) {
        const functionRegistry = world.getFunctionRegistry()
        const classInstances = functionRegistry.getInstancesByClass(script.getName())
        const compiledClass = new CompiledClass(script.getName())
        classInstances.forEach(instance => {
            const compiledFunction = new CompiledFunction()
            if (instance.getOriginalName()) {
                compiledFunction.setName(instance.getOriginalName())
                compiledFunction.setCode(this.generateFunction(instance, world))
                compiledClass.addFunction(compiledFunction)

                const attributes = this.generateAttributes(instance)
                attributes.forEach(attribute => {
                    if (!compiledClass.getAttribute(attribute.name)) {
                        const compiledAttribute = new CompiledAttribute()
                        compiledAttribute.setName(attribute.name)
                        compiledAttribute.setCode(attribute.code)
                        compiledClass.addAttribute(compiledAttribute)
                    }
                })
            }
        })
        const classCode = `class ${script.getName()}{\n${this.getBlockAttribute(compiledClass)}\n${this.getBlockFunction(compiledClass)}\n}`
        compiledClass.setCode(classCode)
        return compiledClass
    }

    /**
     * @param {CompiledClass} compiledClass
     * @return {string}
     */
    getBlockFunction(compiledClass) {
        return compiledClass.getFunctions().map(func => `${func.getName()}(){\n${func.getCode()}\n}`).join('\n')
    }

    /**
     * @param {CompiledClass} compiledClass
     * @return {string}
     */
    getBlockAttribute(compiledClass) {
        return compiledClass.getAttributes().map(attribute => attribute.getCode()).join('\n')
    }

    /**
     * @param {AFunction} scriptFunction
     * @return {{name: string, code: string}[]}
     */
    generateAttributes(scriptFunction) {
        const attributes = []
        scriptFunction.getStack().forEach(stackOperation => {
            const operation = stackOperation.getOperation()
            const args = stackOperation.getArgs()
            if (operation === OPERATIONS.PUSH) {
                const variable = this.getVarName(args[0])
                if (StackRegistryHelper.isMemory(args[0]) || StackRegistryHelper.isResult(args[0])) {
                    attributes.push({name: variable, code: `${variable};`})
                }
            }
        })
        return attributes
    }

    generateFunction(scriptFunction, world) {
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
                instructions.push(`${resultReturn}__.${StringHelper.normalize(functionName)}(${params.join(',')});`)
            } else if (operation === OPERATIONS.JUMP) {
                let jumpCondition = args[0]
                if (StackRegistryHelper.isResult(args[0])) {
                    if (StackRegistryHelper.isCustomResult(args[0])) {
                        const customResult = StackRegistryHelper.getCustomResult(args[0])
                        jumpCondition = `${CONSTANTS.RESULT}.${customResult}`
                    }
                }
                instructions.push(`}while(!${jumpCondition});`)
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
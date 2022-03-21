import CodeGenerator from './CodeGenerator.js'
import {OPERATIONS} from '../../operation/StackOperation.js'
import StackRegistryHelper from '../../utils/StackRegistryHelper.js'
import StringHelper from '../../utils/StringHelper.js'
import ScriptHelper from '../../utils/ScriptHelper.js'
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
            if (operation === OPERATIONS.GET) {
                const variable = ScriptHelper.getVarName(args[0])
                attributes.push({name: variable, code: `${variable};`})
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
                } else if (args[0].match(/^\[NEXT].+$/)) {
                    instructions.push('}')
                }
            } else if (operation === OPERATIONS.PUSH) {
                const variable = ScriptHelper.getVarName(args[0])
                const rightValue = this.getVarName(`${args[1]}`)
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
                instructions.push(`var ${variable} = ${rightValue};`)
            } else if (operation === OPERATIONS.CALL) {
                const functionName = args[0]
                const scope = args[1]
                const params = []
                const func = functionRegistry.getInstance(functionName)
                let resultReturn = ''
                func.getInputs().forEach(input => {
                    params.push(ScriptHelper.getVarName(`${scope}.${input.getAttrName()}`))
                })
                if (func.getOutputs().length > 0 || func.getOutput()) {
                    resultReturn = `${CONSTANTS.RESULT} = `
                }
                instructions.push(`${resultReturn}__.${StringHelper.normalize(functionName)}(${params.join(',')});`)
            } else if (operation === OPERATIONS.GET) {
                instructions.push(`${CONSTANTS.RESULT} = this.${args[0]};`)
            } else if (operation === OPERATIONS.JUMP) {
                let jumpCondition = this.getVarName(args[0])
                const whereJump = args[1]
                if (whereJump === 'start_loop') {
                    instructions.push(`}while(!${jumpCondition});`)
                } else {
                    instructions.push(`if(${jumpCondition}){`)
                }
            } else if (operation === OPERATIONS.EXIT) {
                const exitCondition = this.getVarName(args[0])
                instructions.push(`if(!${exitCondition}) return;`)
            }
        })
        return instructions.join('\n')
    }

    /**
     * @param {string} varName
     * @return {string}
     */
    getVarName(varName) {
        let newName = StringHelper.normalize(varName)
        if (StackRegistryHelper.isResult(varName)) {
            if (StackRegistryHelper.isCustomResult(varName)) {
                const customResult = StackRegistryHelper.getCustomResult(varName)
                newName = `${CONSTANTS.RESULT}.${customResult}`
            }
        } else if (StackRegistryHelper.isMemory(varName)) {
            newName = StackRegistryHelper.getVarName(varName)
        } else if (!newName.match(/^[0-9]+$/)) {
            newName = `"${newName}"`
        }
        return newName
    }

}
import CodeGenerator from './CodeGenerator.js'
import {OPERATIONS} from '../../operation/StackOperation.js'
import StackRegistryHelper from '../../utils/StackRegistryHelper.js'
import StringHelper from '../../utils/StringHelper.js'
import ScriptHelper from '../../utils/ScriptHelper.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import CompiledClass from '../../flow/compiler/compiled/CompiledClass.js'
import CompiledFunction from '../../flow/compiler/compiled/CompiledFunction.js'
import CompiledAttribute from '../../flow/compiler/compiled/CompiledAttribute.js'
import AttributeType, {TYPES} from '../../pobject/AttributeType.js'
import ClientError from '../../exception/type/ClientError.js'

export default class JSCodeGenerator extends CodeGenerator {

    generate(script, world) {
        const functionRegistry = world.getFunctionRegistry()
        const classInstances = functionRegistry.getInstancesByClass(script.getName())
        const compiledClass = new CompiledClass(script.getName())
        classInstances.forEach(instance => {
            const compiledFunction = new CompiledFunction()
            if (instance.getOriginalName()) {
                const params = instance.getInputs().filter(input => input.getAttrName() !== 'unit').map(input =>
                    ScriptHelper.getVarName(`${script.getName()}.${instance.getOriginalName()}.${input.getAttrName()}`))
                compiledFunction.setName(instance.getOriginalName())
                compiledFunction.setCode(this.generateFunction(instance, world))
                compiledFunction.setParams(params)
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
        return compiledClass.getFunctions().map(func => `${func.getName()}(${func.getParams().join(',')}){\n${func.getCode()}\n}`).join('\n')
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
                    if (!args[0].match(/^\[NEXT]setinput_.*/)) {
                        instructions.push('}')
                    }
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
                    params.push(ScriptHelper.getVarName(`${scope ? `${scope}.` : ''}${input.getAttrName()}`))
                })
                if (func.getOutputs().length > 0 || func.getOutput()) {
                    resultReturn = `${CONSTANTS.RESULT} = `
                }
                instructions.push(`${resultReturn}__.${StringHelper.normalize(functionName)}(${params.join(',')});`)
            } else if (operation === OPERATIONS.CALLFUNC) {
                const nameParts = args[0].split('.')
                const scope = args[0]
                const callClassName = nameParts[0]
                const callFunctionName = nameParts[1]
                const params = []
                const func = functionRegistry.getInstance(args[0])
                let resultReturn = ''
                func.getInputs().forEach(input => {
                    if (input.getAttrName() !== 'unit') {
                        params.push(ScriptHelper.getVarName(`${scope ? `${scope}.` : ''}${input.getAttrName()}`))
                    }
                })
                if (func.getOutputs().length > 0 || func.getOutput()) {
                    resultReturn = `${ScriptHelper.getVarName(`${args[0]}.${CONSTANTS.RESULT}`)} = `
                }
                instructions.push(`${resultReturn}${ScriptHelper.getVarName(`${args[0]}.unit`)}.getScript("${callClassName}").${callFunctionName}(${params.join(',')})`)
            } else if (operation === OPERATIONS.GET) {
                instructions.push(`${CONSTANTS.RESULT} = this.${args[0]};`)
            } else if (operation === OPERATIONS.THEN) {
                const func = functionRegistry.getInstance(args[0])
                instructions.push(`promise.then(result => {${ScriptHelper.getVarName(`${func.getName()}.promise.then`)} = result; this.${StringHelper.normalize(func.getOriginalName())}()})`)
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
            } else if (operation === OPERATIONS.SELF) {
                const type = args[0]
                let value
                if (AttributeType.is(type, TYPES.UNIT)) {
                    value = 'this.unit'
                } else if (AttributeType.is(type, TYPES.COMPONENT_INSTANCE)) {
                    value = 'this.component'
                } else {
                    throw new ClientError(`Self: Input type "${type}" not supported`)
                }
                instructions.push(`${CONSTANTS.RESULT} = ${value}`)
            }
        })
        if (scriptFunction.getOutputs().length > 0 || scriptFunction.getOutput()) {
            instructions.push(`return ${ScriptHelper.getVarName(`${scriptFunction.getName()}.${CONSTANTS.RESULT}`)}`)
        }
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
            newName = ScriptHelper.getVarName(StackRegistryHelper.getVarName(varName))
        } else if (!newName.match(/^[0-9]+$/)) {
            newName = `"${newName}"`
        }
        return newName
    }

}
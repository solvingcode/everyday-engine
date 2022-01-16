import {expect} from '@jest/globals'
import SchemaValidator from '../src/app/schema/SchemaValidator.js'
import World from '../src/app/world/World.js'

test('Compare two objects for history', async function () {
    const object1 = new World()
    const object2 = new World()
    object2.setShowGrid(true)
    const expectedKeyChanged = ['world.assetsManager.folders.element.id', 'world.showGrid']
    const result = await SchemaValidator.get().compare('world', object1, object2)
    expect(Object.keys(result)).toEqual(expectedKeyChanged)
    expect(result['world.showGrid']).toEqual(true)
})
import {expect} from '@jest/globals'
import ObjectHelper from '../src/app/utils/ObjectHelper.js'

test('Compare two objects for history', async function () {
    const object1 = {a: 1, b: {a: 1, e: 5}}
    const object2 = {a: 2, c: 3, b: {a: 4}}
    const result = ObjectHelper.compare(object1, object2)
    console.log(result)
})
global._ = require('../lib/thirdparty/common/lodash.min.js')
global.__ = require('../src/app/compiler/__.js')
global.OffscreenCanvas = jest.fn().mockImplementation(() => ({
    getContext: jest.fn()
}))
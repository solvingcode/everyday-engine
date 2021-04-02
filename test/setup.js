global._ = require('../lib/thirdparty/common/lodash.min.js')
global.OffscreenCanvas = jest.fn().mockImplementation(() => ({
    getContext: jest.fn()
}))
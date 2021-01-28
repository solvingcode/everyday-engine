require([
    '/test/schema/schema.test.js',
    '/test/state/stateManager.test.js'
], function () {
    mocha.setup('bdd')
    mocha.run()
})
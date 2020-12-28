define(function (require) {

    const EntityData = require('../entity/EntityData.js')
    const Vector = require('../utils/Vector.js')
    const Size = require('../pobject/Size.js')
    const Style = require('../pobject/Style.js')
    const PerlinNoiseConfig = require('../pobject/PerlinNoiseConfig.js')

    /**
     * @class {Schema}
     */
    class Schema {
        /**
         * @param {string} prefix
         * @param {SchemaMeta} rootMeta
         * @returns {SchemaMeta}
         */
        static getMeta(prefix = '', rootMeta = null) {
            !rootMeta && (rootMeta = this.schemaMeta.root.meta)
            let meta = {}
            for (let eMetaData in rootMeta) {
                if (rootMeta.hasOwnProperty(eMetaData)) {
                    const metaData = rootMeta[eMetaData]
                    const metaPrefix = `${prefix}${eMetaData}`
                    meta[metaPrefix] = metaData.type
                    const subMeta = metaData.meta
                    if (subMeta) {
                        meta = Object.assign(meta, this.getMeta(`${metaPrefix}.`, subMeta))
                    }
                }
            }
            return meta
        }

        /**
         * Get the actual value from the schema using the given schema meta field and value.
         * Used to help validate the value and correct it according to the format/type
         * @param {String} schemaMeta
         * @param {number|string|boolean|null|undefined} value
         */
        static getValue(schemaMeta, value) {
            const schema = this.getMeta()
            const type = schema[schemaMeta]
            let newValue
            switch (type) {
                case 'number':
                    newValue = _.isNumber(value) ? value : 0
                    break
                case 'string':
                    newValue = _.isString(value) ? value : ''
                    break
                case 'boolean':
                    newValue = !!value
                    break
                default:
                    newValue = ''
            }
            return newValue
        }

        static schemaMeta = {
            root: {
                type: '',
                meta: {
                    entities: {
                        type: Array,
                        meta: {
                            element: {
                                type: EntityData,
                                meta: {
                                    id: {
                                        type: 'number'
                                    },
                                    shape: {
                                        type: 'string'
                                    },
                                    name: {
                                        type: 'string'
                                    },
                                    rotation: {
                                        type: 'number'
                                    },
                                    center: {
                                        type: 'number'
                                    },
                                    radius: {
                                        type: 'number'
                                    },
                                    selectable: {
                                        type: 'boolean'
                                    },
                                    locked: {
                                        type: 'boolean'
                                    },
                                    visible: {
                                        type: 'boolean'
                                    },
                                    clonable: {
                                        type: 'boolean'
                                    },
                                    size: {
                                        type: Size,
                                        meta: {
                                            width: {
                                                type: 'number'
                                            },
                                            height: {
                                                type: 'number'
                                            }
                                        }
                                    },
                                    style: {
                                        type: Style,
                                        meta: {
                                            color: {
                                                type: 'string'
                                            },
                                            fillColor: {
                                                type: 'string'
                                            },
                                            backgroundImageBlob: {
                                                type: 'string'
                                            },
                                            backgroundImageRepeat: {
                                                type: 'boolean'
                                            }
                                        }
                                    },
                                    advancedStyle: {
                                        type: Style,
                                        meta: {
                                            color: {
                                                type: 'string'
                                            },
                                            fillColor: {
                                                type: 'string'
                                            },
                                            backgroundImageBlob: {
                                                type: 'string'
                                            },
                                            backgroundImageRepeat: {
                                                type: 'boolean'
                                            }
                                        }
                                    },
                                    noiseConfigs: {
                                        type: PerlinNoiseConfig,
                                        meta: {
                                            seed: {
                                                type: 'number'
                                            },
                                            octaves: {
                                                type: 'number'
                                            },
                                            amplitude: {
                                                type: 'number'
                                            },
                                            persistence: {
                                                type: 'number'
                                            },
                                            smoothness: {
                                                type: 'number'
                                            }
                                        }
                                    },
                                    vertices: {
                                        type: Array,
                                        meta: {
                                            element: {
                                                type: Vector,
                                                meta: {
                                                    x: {
                                                        type: 'number'
                                                    },
                                                    y: {
                                                        type: 'number'
                                                    },
                                                    z: {
                                                        type: 'number'
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    position: {
                                        type: Vector,
                                        meta: {
                                            x: {
                                                type: 'number'
                                            },
                                            y: {
                                                type: 'number'
                                            },
                                            z: {
                                                type: 'number'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * @typedef {Map<string, Class>} SchemaMeta
     */

    return Schema
})
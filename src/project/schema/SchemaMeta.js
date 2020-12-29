define(function(require){

    const EntityData = require('../data/EntityData.js')
    const Vector = require('../../utils/Vector.js')
    const Size = require('../../pobject/Size.js')
    const Style = require('../../pobject/Style.js')
    const PerlinNoiseConfig = require('../../pobject/PerlinNoiseConfig.js')
    const WorldData = require('../data/WorldData.js')
    const EntityManager = require('../../world/manager/EntityManager.js')
    const CameraData = require('../data/CameraData.js')
    const PhysicsData = require('../data/PhysicsData.js')
    const TerrainManagerData = require('../data/TerrainManagerData.js')
    const TerrainData = require('../../project/data/TerrainData.js')

    return {
        world: {
            type: WorldData,
            meta: {
                mouseConstraintId: {
                  type: 'number'
                },
                entityManager: {
                    type: EntityManager,
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
                },
                camera: {
                    type: CameraData,
                    meta: {
                        entityId: {
                            type: 'number'
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
                },
                physics: {
                    type: PhysicsData
                },
                terrainManager: {
                    type: TerrainManagerData,
                    meta: {
                        terrain: {
                            type: TerrainData,
                            meta: {
                                entityId: {
                                    type: 'number'
                                },
                                rotation: {
                                    type: 'number'
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
                                }
                            }
                        }
                    }
                }
            }
        }
    }

})
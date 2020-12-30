define(function(require){

    const EntityMotion = require('../../entity/EntityMotion.js')
    const Vector = require('../../utils/Vector.js')
    const Size = require('../../pobject/Size.js')
    const Style = require('../../pobject/Style.js')
    const PerlinNoiseConfig = require('../../pobject/PerlinNoiseConfig.js')
    const World = require('../../world/World.js')
    const EntityManager = require('../../world/manager/EntityManager.js')
    const Camera = require('../../core/Camera.js')
    const Physics = require('../../physics/Physics.js')
    const TerrainManager = require('../../world/terrain/TerrainManager.js')
    const Terrain = require('../../world/terrain/Terrain.js')

    return {
        world: {
            type: World,
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
                                    type: EntityMotion,
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
                                            prototype: Size,
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
                                            prototype: Style,
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
                                            prototype: Style,
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
                                            prototype: PerlinNoiseConfig,
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
                                                    prototype: Vector,
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
                                            prototype: Vector,
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
                    type: Camera,
                    meta: {
                        entityId: {
                            type: 'number'
                        },
                        position: {
                            prototype: Vector,
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
                    type: Physics
                },
                terrainManager: {
                    type: TerrainManager,
                    meta: {
                        terrain: {
                            type: Terrain,
                            meta: {
                                entityId: {
                                    type: 'number'
                                },
                                rotation: {
                                    type: 'number'
                                },
                                size: {
                                    prototype: Size,
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
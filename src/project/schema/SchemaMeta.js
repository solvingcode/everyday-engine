define(function(require){

    const EntityMotion = require('../../entity/EntityMotion.js')
    const Vector = require('../../utils/Vector.js')
    const Size = require('../../pobject/Size.js')
    const Style = require('../../pobject/Style.js')
    const PerlinNoiseConfig = require('../../pobject/PerlinNoiseConfig.js')
    const World = require('../../world/World.js')
    const EntityManager = require('../../world/manager/EntityManager.js')
    const TextureManager = require('../../world/manager/TextureManager.js')
    const Camera = require('../../core/Camera.js')
    const Physics = require('../../physics/Physics.js')
    const TerrainManager = require('../../world/terrain/TerrainManager.js')
    const Terrain = require('../../world/terrain/Terrain.js')
    const EntityProps = require('../../pobject/EntityProps.js')
    const PhysicsProps = require('../../pobject/PhysicsProps.js')
    const Texture = require('../../core/Texture.js')
    const Mesh = require('../../core/Mesh.js')

    /**
     * Define the schema of project data.
     * Used to serialize/deserialize all data when saving/loading the project.
     * the schema of each data can be defined using type or prototype properties :
     *      - Type: the type can be a string (like 'number'), Array, or a Class of Data type.
     *              if type defined as Data, the Data parent class will be used for serializing,
     *              and the type for deserializing
     *      - Prototype: the prototype can be a string, Array or any Class
     *                   if prototype is specified, it will be used for serializing and deserializing
     */

    return {
        world: {
            type: World,
            meta: {
                dataId: {
                    type: 'number'
                },
                mouseConstraintId: {
                  type: 'number'
                },
                entityManager: {
                    type: EntityManager,
                    meta: {
                        dataId: {
                            type: 'number'
                        },
                        entities: {
                            type: Array,
                            meta: {
                                element: {
                                    type: EntityMotion,
                                    meta: {
                                        dataId: {
                                            type: 'number'
                                        },
                                        textureId: {
                                            type: 'number'
                                        },
                                        subEntity: {
                                            type: 'boolean'
                                        },
                                        props: {
                                            prototype: EntityProps,
                                            meta: {
                                                name: {
                                                    type: 'string'
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
                                                        backgroundImageRepeat: {
                                                            type: 'boolean'
                                                        },
                                                        opacity: {
                                                            type: 'number'
                                                        },
                                                        borderSize: {
                                                            type: 'number'
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
                                                },
                                                rotation: {
                                                    type: 'number'
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
                                                        backgroundImageRepeat: {
                                                            type: 'boolean'
                                                        },
                                                        opacity: {
                                                            type: 'number'
                                                        },
                                                        borderSize: {
                                                            type: 'number'
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
                                        },
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
                                                backgroundImageRepeat: {
                                                    type: 'boolean'
                                                },
                                                opacity: {
                                                    type: 'number'
                                                },
                                                borderSize: {
                                                    type: 'number'
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
                                                backgroundImageRepeat: {
                                                    type: 'boolean'
                                                },
                                                opacity: {
                                                    type: 'number'
                                                },
                                                borderSize: {
                                                    type: 'number'
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
                                        },
                                        physics: {
                                            prototype: PhysicsProps,
                                            meta: {
                                                velocity: {
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
                                                },
                                                angularVelocity: {
                                                    type: 'number'
                                                },
                                                speed: {
                                                    type: 'number'
                                                },
                                                density: {
                                                    type: 'number'
                                                },
                                                force: {
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
                                                },
                                                fixed: {
                                                    type: 'boolean'
                                                },
                                                motion: {
                                                    type: 'boolean'
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
                        dataId: {
                            type: 'number'
                        },
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
                    type: Physics,
                    meta: {
                        dataId: {
                            type: 'number'
                        }
                    }
                },
                terrainManager: {
                    type: TerrainManager,
                    meta: {
                        dataId: {
                            type: 'number'
                        },
                        terrains: {
                            type: Array,
                            meta: {
                                element: {
                                    type: Terrain,
                                    meta: {
                                        dataId: {
                                            type: 'number'
                                        },
                                        entityId: {
                                            type: 'number'
                                        },
                                        rotation: {
                                            type: 'number'
                                        },
                                        chunksNbr: {
                                            type: 'number'
                                        },
                                        chunkIds: {
                                            type: Array,
                                            meta: {
                                                element: {
                                                    type: 'number'
                                                }
                                            }
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
                },
                textureManager: {
                    type: TextureManager,
                    meta: {
                        dataId: {
                            type: 'number'
                        },
                        textures: {
                            type: Array,
                            meta: {
                                element: {
                                    type: Texture,
                                    meta: {
                                        dataId: {
                                            type: 'number'
                                        },
                                        id: {
                                            type: 'number'
                                        },
                                        name: {
                                            type: 'string'
                                        },
                                        mesh: {
                                            type: Mesh,
                                            meta: {
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
                                                },
                                                dataUrl: {
                                                    type: 'string'
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
    }

})
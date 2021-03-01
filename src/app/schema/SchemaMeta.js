import EntityMotion from '../entity/EntityMotion.js'
import Vector from '../utils/Vector.js'
import Size from '../pobject/Size.js'
import Style from '../pobject/Style.js'
import PerlinNoiseConfig from '../pobject/PerlinNoiseConfig.js'
import World from '../world/World.js'
import EntityManager from '../world/manager/EntityManager.js'
import TextureManager from '../world/manager/TextureManager.js'
import Camera from '../core/Camera.js'
import Physics from '../physics/Physics.js'
import TerrainManager from '../world/terrain/TerrainManager.js'
import Terrain from '../world/terrain/Terrain.js'
import EntityProps from '../pobject/EntityProps.js'
import PhysicsProps from '../pobject/PhysicsProps.js'
import Texture from '../core/Texture.js'
import Mesh from '../core/Mesh.js'
import PhysicsEngine from '../physics/engine/PhysicsEngine.js'

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

export default {
    world: {
        type: World,
        meta: {
            dataId: {
                type: 'number'
            },
            mouseConstraintId: {
                type: 'number'
            },
            cameraEntityId: {
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
                                    entityChildIds: {
                                        type: Array,
                                        meta: {
                                            element: {
                                                type: 'number'
                                            }
                                        }
                                    },
                                    entityLinkIds: {
                                        type: Array,
                                        meta: {
                                            element: {
                                                type: 'number'
                                            }
                                        }
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
                    },
                    physicsEngine: {
                        type: PhysicsEngine,
                        meta: {
                            dataId: {
                                type: 'number'
                            }
                        }
                    }
                }
            },
            resolution: {
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